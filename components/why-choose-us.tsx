import { UserRound, ClipboardCheck, Trophy, Video } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const features = [
  {
    icon: UserRound,
    title: '1:1 맞춤수업',
    desc: '학생의 현재 수준을 진단하고 목표에 맞춘 개별 커리큘럼으로 밀착 지도합니다.',
  },
  {
    icon: ClipboardCheck,
    title: '학생별 학습관리',
    desc: '수업 리포트와 과제 점검, 취약점 분석으로 꾸준한 성장을 관리합니다.',
  },
  {
    icon: Trophy,
    title: '내신 대비',
    desc: '학교별 시험 범위와 출제 경향을 반영한 전략적 내신 대비 수업을 제공합니다.',
  },
  {
    icon: Video,
    title: '방문과외 및 화상수업',
    desc: '전국 어디서나 방문과외와 실시간 화상수업 중 편한 방식으로 수업할 수 있습니다.',
  },
]

export function WhyChooseUs() {
  return (
    <section id="why" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-accent">Why 여쌤과외</span>
          <h2 className="mt-3 text-balance font-serif text-3xl font-black tracking-tight text-foreground md:text-4xl">
            여쌤과외를 선택하는 이유
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            학생의 학년과 현재 수준을 기준으로 수업 방향을 정하고, 진도·과제·오답을 꾸준히 관리합니다.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <Reveal as="article" key={f.title} delay={i * 90}>
              <div className="group h-full rounded-2xl border border-border bg-card p-7 shadow-sm transition-all hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-xl">
                <span className="flex size-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground transition-transform group-hover:scale-105">
                  <f.icon className="size-7" />
                </span>
                <h3 className="mt-6 text-lg font-bold text-foreground">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
