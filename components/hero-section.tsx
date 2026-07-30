import Image from 'next/image'
import { Phone, MessageCircle, Star, CheckCircle2 } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const subjects = ['영어', '수학', '국어', '과학', '사회']

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden bg-primary text-primary-foreground">
      {/* soft decorative accents */}
      <div className="pointer-events-none absolute -right-40 -top-40 size-96 rounded-full bg-primary-foreground/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 size-96 rounded-full bg-accent/10 blur-3xl" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-16 pt-28 md:px-6 md:pb-24 md:pt-36 lg:grid-cols-2 lg:gap-8">
        <div className="text-center lg:text-left">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-sm font-medium">
              <Star className="size-4 text-accent" />
              전국 방문과외 · 화상과외 전문
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 text-balance font-serif text-4xl font-black leading-tight tracking-tight md:text-5xl lg:text-6xl">
              초등 · 중등 · 고등
              <br />
              <span className="text-accent">방문과외 · 화상과외 1:1 맞춤수업</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mx-auto mt-6 max-w-lg text-pretty text-base leading-relaxed text-primary-foreground/75 md:text-lg lg:mx-0">
              학생의 현재 수준과 목표를 먼저 확인하고, 과목별 취약점과 학습 속도에 맞춘 1:1 수업 계획을 안내합니다.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <ul className="mt-8 flex flex-wrap justify-center gap-2.5 lg:justify-start">
              {subjects.map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-2 text-sm font-medium"
                >
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row lg:justify-start">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-base font-bold text-accent-foreground shadow-lg shadow-black/20 transition-transform hover:-translate-y-0.5"
              >
                <MessageCircle className="size-5" />
                무료 상담하기
              </a>
              <a
                href="tel:010-3028-0877"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/5 px-7 py-3.5 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                <Phone className="size-5" />
                전화 상담
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative">
          <div className="animate-float relative mx-auto max-w-md lg:max-w-none">
            <div className="overflow-hidden rounded-3xl border border-primary-foreground/10 shadow-2xl shadow-black/30">
              <Image
                src="/images/hero-tutoring.png"
                alt="여쌤과외 선생님이 학생과 1:1 맞춤수업을 진행하는 모습"
                width={720}
                height={800}
                priority
                className="h-full w-full object-cover"
              />
            </div>

            {/* floating stat card */}
            <div className="absolute -bottom-5 -left-3 flex items-center gap-3 rounded-2xl border border-border bg-background px-4 py-3 text-foreground shadow-xl md:-left-6">
              <span className="flex size-10 items-center justify-center rounded-xl bg-accent/15 text-accent">
                <CheckCircle2 className="size-6" />
              </span>
              <div>
                <p className="text-base font-black leading-none">학생별 맞춤</p>
                <p className="mt-1 text-xs text-muted-foreground">진도·과제·오답 관리</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
