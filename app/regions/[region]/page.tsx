import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  ChevronRight,
  Phone,
  MessageCircle,
  MapPin,
  BookOpen,
  GraduationCap,
  Users,
  CheckCircle2,
} from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Reveal } from '@/components/reveal'
import { allRegions, getNearbyRegions, getRegionBySlug } from '@/lib/regions'

interface PageProps {
  params: Promise<{ region: string }>
}

export function generateStaticParams() {
  return allRegions.map((region) => ({ region: region.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { region } = await params
  const data = getRegionBySlug(region)
  if (!data) {
    return { title: '지역을 찾을 수 없습니다 | 여쌤과외' }
  }

  const regionName = data.ri ?? data.eupmyeondong ?? data.sigungu ?? data.sido
  const title = `${regionName} 영어과외 수학과외 | 초등 중등 고등 1:1 맞춤수업 - 여쌤과외`
  const description = `${data.fullName} 초등·중등·고등 영어과외, 수학과외, 국어·과학·사회 1:1 맞춤수업 안내. 내신 대비와 시험 대비, 방문과외·화상과외 상담을 진행합니다.`

  return {
    title,
    description,
    alternates: { canonical: `/regions/${data.slug}` },
    openGraph: {
      title,
      description,
      type: 'website',
    },
  }
}

const subjects = ['영어', '수학', '국어', '과학', '사회']
const grades = [
  { icon: BookOpen, label: '초등 과정', desc: '학습 습관 형성과 기초 개념 완성' },
  { icon: GraduationCap, label: '중등 과정', desc: '내신 대비와 취약 과목 집중 관리' },
  { icon: Users, label: '고등 과정', desc: '수능·내신 전략과 심화 학습' },
]

export default async function RegionPage({ params }: PageProps) {
  const { region } = await params
  const data = getRegionBySlug(region)

  if (!data) {
    notFound()
  }

  const regionName = data.ri ?? data.eupmyeondong ?? data.sigungu ?? data.sido
  const provinceName = data.sido
  const nearbyRegions = getNearbyRegions(data, 8)

  const faqs = [
    {
      q: `${regionName}에서도 방문과외가 가능한가요?`,
      a: `네, ${provinceName} ${regionName} 전 지역 방문과외가 가능합니다. 방문이 어려운 경우 실시간 화상과외로도 동일한 커리큘럼을 제공합니다.`,
    },
    {
      q: `${regionName} 과외는 어떤 과목을 배울 수 있나요?`,
      a: `영어, 수학, 국어, 과학, 사회 등 초·중·고 전 과목을 지원합니다. 학생의 학년과 목표에 맞춰 과목별 맞춤 커리큘럼을 설계합니다.`,
    },
    {
      q: '선생님은 어떻게 매칭되나요?',
      a: `${regionName} 학생의 성향, 학습 수준, 목표를 상담을 통해 파악한 뒤 학생의 조건과 수업 목표에 맞는 선생님을 안내해 드립니다.`,
    },
    {
      q: '수업료와 상담은 어떻게 진행되나요?',
      a: '첫 상담은 무료이며, 학년·과목·수업 횟수에 따라 합리적인 수업료를 안내해 드립니다. 부담 없이 전화 또는 문자로 문의해 주세요.',
    },
  ]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  }

  return (
    <>
      <SiteHeader />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="pt-16 md:pt-20">
        {/* Hero */}
        <section className="border-b border-border bg-secondary">
          <div className="mx-auto max-w-5xl px-4 py-16 md:px-6 md:py-24">
            <Reveal>
              <nav aria-label="위치" className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
                <Link href="/" className="transition-colors hover:text-primary">
                  홈
                </Link>
                <ChevronRight className="size-4" />
                <Link href="/regions" className="transition-colors hover:text-primary">
                  지역별 과외
                </Link>
                <ChevronRight className="size-4" />
                <span className="font-medium text-foreground">
                  {provinceName} {regionName}
                </span>
              </nav>

              <span className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-accent/15 px-3 py-1 text-sm font-semibold text-accent-foreground">
                <MapPin className="size-4" />
                {provinceName}
              </span>

              <h1 className="mt-4 text-balance font-serif text-4xl font-black leading-tight tracking-tight text-foreground md:text-5xl">
                {regionName} 1:1 맞춤 과외
              </h1>
              <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
                {provinceName} {regionName} 학생을 위한 여쌤과외입니다. 초·중·고 주요 과목을 학생별 수준에 맞춰
                방문 또는 화상 수업으로 {regionName} 학생 한 명 한 명의 성적 향상을 책임집니다.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="tel:010-3028-0877"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-bold text-primary-foreground shadow-sm transition-transform hover:-translate-y-0.5"
                >
                  <Phone className="size-5" />
                  무료 상담 신청
                </a>
                <a
                  href="sms:010-3028-0877"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-7 py-3.5 text-base font-semibold text-foreground transition-colors hover:border-primary/40"
                >
                  <MessageCircle className="size-5" />
                  문자 상담
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Course information */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-5xl px-4 md:px-6">
            <Reveal className="max-w-2xl">
              <span className="text-sm font-bold uppercase tracking-widest text-accent">Course</span>
              <h2 className="mt-3 text-balance font-serif text-3xl font-black tracking-tight text-foreground md:text-4xl">
                {regionName} 과외 안내
              </h2>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                {regionName} 지역 학생의 학년과 목표에 맞춘 체계적인 커리큘럼을 제공합니다.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {grades.map((grade, i) => (
                <Reveal as="article" key={grade.label} delay={i * 100}>
                  <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-sm">
                    <span className="flex size-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                      <grade.icon className="size-6" />
                    </span>
                    <h3 className="mt-4 font-serif text-xl font-bold text-foreground">{grade.label}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{grade.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={120} className="mt-10">
              <div className="rounded-2xl border border-border bg-secondary p-6 md:p-8">
                <h3 className="font-serif text-lg font-bold text-foreground">
                  {regionName}에서 수강 가능한 과목
                </h3>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {subjects.map((subject) => (
                    <span
                      key={subject}
                      className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground"
                    >
                      <CheckCircle2 className="size-4 text-accent" />
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Regional SEO guide */}
        <section className="border-y border-border bg-background py-16 md:py-24">
          <div className="mx-auto max-w-5xl px-4 md:px-6">
            <Reveal className="max-w-3xl">
              <span className="text-sm font-bold uppercase tracking-widest text-accent">Local Guide</span>
              <h2 className="mt-3 text-balance font-serif text-3xl font-black tracking-tight text-foreground md:text-4xl">
                {regionName} 영어과외 · 수학과외 · 과학과외 안내
              </h2>
              <div className="mt-6 space-y-5 text-pretty leading-8 text-muted-foreground">
                <p>
                  {provinceName} {regionName} 과외는 학생의 학년, 현재 성적, 공부 습관과 목표를 먼저
                  확인한 뒤 수업 방향을 정합니다. 초등학생은 기초 개념과 학습 습관을, 중학생은
                  학교별 내신 대비와 시험 준비를, 고등학생은 내신과 수능 목표에 맞춘 개념 학습과
                  문제 풀이를 중심으로 관리합니다.
                </p>
                <p>
                  {regionName} 영어과외는 어휘·문법·독해와 학교 시험 범위를 학생 수준에 맞춰
                  지도합니다. {regionName} 수학과외는 부족한 개념을 찾아 보완하고 풀이 과정을
                  점검해 반복되는 실수와 오답을 줄입니다. 국어, 과학, 사회 과목도 취약 단원과
                  시험 일정에 맞춰 1:1로 진행할 수 있습니다.
                </p>
                <p>
                  방문수업 가능 여부는 학생의 위치와 희망 일정에 따라 상담 후 안내합니다. 이동이
                  어렵거나 일정 조율이 필요한 경우에는 실시간 화상과외로 수업할 수 있습니다.
                  상담 시 학년, 과목, 목표, 희망 시간대를 알려주시면 적합한 수업 방향을 안내합니다.
                </p>
              </div>
            </Reveal>

            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                `${regionName} 초등 기초 학습`,
                `${regionName} 중등 내신 대비`,
                `${regionName} 고등 내신·수능 대비`,
                `${regionName} 방문·화상 과외`,
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-xl border border-border bg-secondary px-4 py-3 text-sm font-semibold text-foreground"
                >
                  <CheckCircle2 className="size-4 shrink-0 text-accent" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Nearby regions */}
        {nearbyRegions.length > 0 && (
          <section className="py-16 md:py-20">
            <div className="mx-auto max-w-5xl px-4 md:px-6">
              <Reveal>
                <h2 className="font-serif text-2xl font-black tracking-tight text-foreground md:text-3xl">
                  {regionName} 인근 지역 과외 안내
                </h2>
                <p className="mt-3 text-muted-foreground">
                  가까운 지역의 1:1 방문과외와 화상과외 안내도 함께 확인해 보세요.
                </p>
                <div className="mt-6 flex flex-wrap gap-2.5">
                  {nearbyRegions.map((nearby) => {
                    const nearbyName = nearby.ri ?? nearby.eupmyeondong ?? nearby.sigungu ?? nearby.sido
                    return (
                      <Link
                        key={nearby.code}
                        href={`/regions/${nearby.slug}`}
                        className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 hover:text-primary"
                      >
                        {nearbyName} 과외
                        <ChevronRight className="size-4" />
                      </Link>
                    )
                  })}
                </div>
              </Reveal>
            </div>
          </section>
        )}

        {/* FAQ */}
        <section className="bg-secondary py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-4 md:px-6">
            <Reveal className="text-center">
              <span className="text-sm font-bold uppercase tracking-widest text-accent">FAQ</span>
              <h2 className="mt-3 text-balance font-serif text-3xl font-black tracking-tight text-foreground md:text-4xl">
                {regionName} 과외 자주 묻는 질문
              </h2>
            </Reveal>

            <div className="mt-10 space-y-4">
              {faqs.map((faq, i) => (
                <Reveal as="article" key={faq.q} delay={i * 80}>
                  <details className="group rounded-2xl border border-border bg-card p-5 shadow-sm [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold text-foreground">
                      {faq.q}
                      <ChevronRight className="size-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-90" />
                    </summary>
                    <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">{faq.a}</p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Contact / CTA */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-5xl px-4 md:px-6">
            <Reveal>
              <div className="overflow-hidden rounded-3xl bg-primary p-8 text-primary-foreground md:p-14">
                <div className="mx-auto max-w-2xl text-center">
                  <h2 className="text-balance font-serif text-3xl font-black tracking-tight md:text-4xl">
                    {regionName} 과외, 지금 무료로 상담받으세요
                  </h2>
                  <p className="mt-4 text-pretty leading-relaxed text-primary-foreground/75">
                    {provinceName} {regionName} 학생에게 딱 맞는 선생님과 커리큘럼을 무료로 안내해
                    드립니다. 부담 없이 문의하세요.
                  </p>
                  <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                    <a
                      href="tel:010-3028-0877"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-base font-bold text-accent-foreground transition-transform hover:-translate-y-0.5"
                    >
                      <Phone className="size-5" />
                      010-3028-0877
                    </a>
                    <a
                      href="sms:010-3028-0877"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/5 px-7 py-3.5 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
                    >
                      <MessageCircle className="size-5" />
                      문자로 상담하기
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120} className="mt-10 text-center">
              <Link
                href="/regions"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                <ChevronRight className="size-4 rotate-180" />
                다른 지역 보기
              </Link>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
