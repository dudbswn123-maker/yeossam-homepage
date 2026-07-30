import regionsData from '@/data/regions.json'

export type RegionLevel = 'sido' | 'sigungu' | 'eupmyeondong' | 'ri'

export interface Region {
  code: string
  sido: string
  sigungu: string | null
  eupmyeondong: string | null
  ri: string | null
  fullName: string
  slug: string
  active: boolean
  level: RegionLevel
  parentCode: string | null
}

/**
 * Single source of truth. Replacing data/regions.json with the full national
 * dataset automatically flows through every list, selector, page, and sitemap
 * below — no code changes required.
 */
const ALL_REGIONS = regionsData as Region[]

// Index structures built once at module load for O(1)/O(children) lookups,
// so this scales to thousands of rows without repeated full scans.
const byCode = new Map<string, Region>()
const bySlug = new Map<string, Region>()
const childrenByParent = new Map<string, Region[]>()

for (const region of ALL_REGIONS) {
  byCode.set(region.code, region)
  bySlug.set(region.slug, region)
  const key = region.parentCode ?? '__root__'
  const list = childrenByParent.get(key) ?? []
  list.push(region)
  childrenByParent.set(key, list)
}

const LEVEL_LABEL: Record<RegionLevel, string> = {
  sido: '시·도',
  sigungu: '시·군·구',
  eupmyeondong: '읍·면·동',
  ri: '리',
}

export function levelLabel(level: RegionLevel): string {
  return LEVEL_LABEL[level]
}

/** The most specific administrative unit name for a region. */
export function shortName(region: Region): string {
  return region.ri ?? region.eupmyeondong ?? region.sigungu ?? region.sido
}

export function getAllRegions(): Region[] {
  return ALL_REGIONS
}

export function getActiveRegions(): Region[] {
  return ALL_REGIONS.filter((r) => r.active)
}

export function getRegionBySlug(slug: string): Region | undefined {
  return bySlug.get(slug)
}

export function getRegionByCode(code: string): Region | undefined {
  return byCode.get(code)
}

export function getChildren(parentCode: string | null): Region[] {
  const key = parentCode ?? '__root__'
  return (childrenByParent.get(key) ?? [])
    .slice()
    .sort((a, b) => a.fullName.localeCompare(b.fullName, 'ko'))
}

export function getSidos(): Region[] {
  return getChildren(null)
}

/** Ordered ancestry from 시·도 down to (but excluding) the region itself. */
export function getAncestors(region: Region): Region[] {
  const chain: Region[] = []
  let current = region.parentCode ? byCode.get(region.parentCode) : undefined
  while (current) {
    chain.unshift(current)
    current = current.parentCode ? byCode.get(current.parentCode) : undefined
  }
  return chain
}

/** Full breadcrumb trail including the region itself. */
export function getBreadcrumb(region: Region): Region[] {
  return [...getAncestors(region), region]
}

/**
 * Nearby active regions that share the same 시·군·구 (or 시·도 for top levels),
 * excluding the current region. Capped by `limit`.
 */
export function getNearbyRegions(region: Region, limit = 10): Region[] {
  return ALL_REGIONS.filter(
    (r) =>
      r.active &&
      r.code !== region.code &&
      ((region.sigungu && r.sigungu === region.sigungu) ||
        (!region.sigungu && r.sido === region.sido)),
  ).slice(0, limit)
}

function normalize(value: string): string {
  return value.toLowerCase().replace(/\s+/g, '')
}

export interface SearchResult {
  results: Region[]
  total: number
}

/**
 * Whitespace-insensitive substring match against both the full name and each
 * administrative segment, so "옥산", "옥산면", "청주시 옥산면", "강릉 교동" all match.
 * Returns the total count plus a sliced page for lazy rendering.
 */
export function searchRegions(query: string, limit = 50, offset = 0): SearchResult {
  const q = normalize(query)
  if (!q) return { results: [], total: 0 }

  const matches = ALL_REGIONS.filter((r) => {
    if (!r.active) return false
    const haystack = normalize(
      [r.fullName, r.sido, r.sigungu, r.eupmyeondong, r.ri].filter(Boolean).join(' '),
    )
    return haystack.includes(q)
  })

  return {
    results: matches.slice(offset, offset + limit),
    total: matches.length,
  }
}

export function getActiveRegionCount(): number {
  return getActiveRegions().length
}

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://yeossam-homepage.vercel.app'
).replace(/\/$/, '')

export function regionUrl(slug: string): string {
  return `${SITE_URL}/regions/${slug}`
}

/**
 * Compatibility view used by the region navigation components.
 * Each top-level province contains all active descendant regions.
 */
export interface ProvinceGroup {
  name: string
  short: string
  slug: string
  regions: Array<{ name: string; slug: string }>
}

function provinceShortName(name: string): string {
  return name
    .replace('특별자치도', '')
    .replace('특별자치시', '')
    .replace('광역시', '')
    .replace('특별시', '')
    .replace(/도$/, '')
    .replace(/시$/, '')
}

export const provinces: ProvinceGroup[] = getSidos().map((sido) => ({
  name: sido.sido,
  short: provinceShortName(sido.sido),
  slug: sido.slug,
  regions: getActiveRegions()
    .filter((region) => region.sido === sido.sido && region.level !== 'sido')
    .map((region) => ({ name: shortName(region), slug: region.slug })),
}))

export const totalRegionCount = getActiveRegions().filter((region) => region.level !== 'sido').length
export const allRegions = getActiveRegions()
