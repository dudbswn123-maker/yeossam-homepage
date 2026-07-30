import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, MapPin, Phone } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Reveal } from '@/components/reveal'
import { provinces, totalRegionCount } from '@/lib/regions'

export const metadata: Metadata = {
  title: '지역별 과외 | 전국 1:1 맞춤 과외 - 여쌤과외',
  description: `서울, 경기, 부산 등 전국 17개 시·도 ${totalRegionCount}개 지역의 1:1 맞춤 방문·화상 과외 안내. 우리 동네 여쌤과외 지역 페이지에서 초·중·고 전 과목 과외를 확인하세요.`,
  alternates: { canonical: '/regions' },
  openGraph: {
    title: '지역별 과외 | 전국 1:1 맞춤 과외 - 여쌤과외',
    description: `전국 17개 시·도 ${totalRegionCount}개 지역 1:1 맞춤 과외 안내.`,
    type: 'website',
  },
}

export default function RegionsPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-16 md:pt-20">
        {/* Hero */}
        <section className="border-b border-border bg-secondary">
          <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
            <Reveal>
              <nav aria-label="위치" className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Link href="/" className="transition-colors hover:text-primary">
                  홈
                </Link>
                <ChevronRight className="size-4" />
                <span className="font-medium text-foreground">지역별 과외</span>
              </nav>
              <h1 className="mt-5 text-balance font-serif text-4xl font-black tracking-tight text-foreground md:text-5xl">
                전국 지역별 영어과외 · 수학과외 · 과학과외
              </h1>
              <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
                여쌤과외는 전국 17개 시·도, {totalRegionCount}개 지역에서 초등·중등·고등 영어과외, 수학과외,
                국어·과학·사회 1:1 맞춤수업을 안내합니다. 원하는 지역을 선택해 방문과외와 화상과외 정보를 확인하세요.
              </p>
              <a
                href="tel:010-3028-0877"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-bold text-primary-foreground shadow-sm transition-transform hover:-translate-y-0.5"
              >
                <Phone className="size-5" />
                무료 상담 010-3028-0877
              </a>
            </Reveal>
          </div>
        </section>

        {/* Province jump nav */}
        <section className="sticky top-16 z-30 border-b border-border bg-background/90 backdrop-blur-md md:top-20">
          <div className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-4 py-3 md:px-6">
            {provinces.map((province) => (
              <a
                key={province.slug}
                href={`#${province.slug}`}
                className="whitespace-nowrap rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
              >
                {province.short}
              </a>
            ))}
          </div>
        </section>

        {/* Province groups */}
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
          <div className="space-y-16">
            {provinces.map((province) => (
              <section key={province.slug} id={province.slug} className="scroll-mt-36">
                <div className="flex items-center gap-3 border-b border-border pb-4">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <MapPin className="size-5" />
                  </span>
                  <div>
                    <h2 className="font-serif text-2xl font-black tracking-tight text-foreground">
                      {province.name}
                    </h2>
                    <p className="text-sm text-muted-foreground">{province.regions.length}개 지역</p>
                  </div>
                </div>
                <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                  {province.regions.map((region) => (
                    <li key={region.slug}>
                      <Link
                        href={`/regions/${region.slug}`}
                        className="group flex items-center justify-between gap-2 rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium text-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary hover:shadow-md"
                      >
                        {region.name}
                        <ChevronRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
