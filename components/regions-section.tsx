import Link from 'next/link'
import { MapPin, ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { provinces, totalRegionCount } from '@/lib/regions'

export function RegionsSection() {
  return (
    <section id="regions" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-accent">Nationwide</span>
          <h2 className="mt-3 text-balance font-serif text-3xl font-black tracking-tight text-foreground md:text-4xl">
            전국 지역별 과외
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            전국 17개 시·도, {totalRegionCount}개 지역에서 여쌤과외를 만나보세요. 우리 동네 맞춤 과외 정보를
            지역 페이지에서 확인하실 수 있습니다.
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-12">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {provinces.map((province) => (
              <Link
                key={province.slug}
                href={`/regions#${province.slug}`}
                className="group flex items-center justify-between gap-2 rounded-2xl border border-border bg-card px-5 py-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
              >
                <span className="flex items-center gap-2">
                  <MapPin className="size-4 text-accent" />
                  <span className="font-semibold text-foreground">{province.short}</span>
                </span>
                <span className="text-xs text-muted-foreground">{province.regions.length}</span>
              </Link>
            ))}
          </div>
        </Reveal>

        <Reveal delay={200} className="mt-10 text-center">
          <Link
            href="/regions"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-bold text-primary-foreground shadow-sm transition-transform hover:-translate-y-0.5"
          >
            전체 지역 보기
            <ArrowRight className="size-5" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
