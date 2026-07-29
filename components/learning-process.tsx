import { PhoneCall, Users, BookOpen, LineChart } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const steps = [
  { icon: PhoneCall, step: '01', title: '무료 상담', desc: '학생의 현재 상황과 목표를 꼼꼼히 진단합니다.' },
  { icon: Users, step: '02', title: '선생님 매칭', desc: '학생에게 가장 잘 맞는 전문 선생님을 배정합니다.' },
  { icon: BookOpen, step: '03', title: '맞춤 수업', desc: '개별 커리큘럼으로 1:1 밀착 수업을 진행합니다.' },
  { icon: LineChart, step: '04', title: '학습 관리', desc: '리포트와 피드백으로 꾸준한 성장을 관리합니다.' },
]

export function LearningProcess() {
  return (
    <section id="process" className="bg-primary py-20 text-primary-foreground md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-accent">Process</span>
          <h2 className="mt-3 text-balance font-serif text-3xl font-black tracking-tight md:text-4xl">
            여쌤과외 학습 과정
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-primary-foreground/70">
            상담부터 학습관리까지, 체계적인 4단계 시스템으로 함께합니다.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal as="article" key={s.step} delay={i * 100}>
              <div className="relative h-full rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-7 transition-all hover:-translate-y-1.5 hover:bg-primary-foreground/10">
                <span className="absolute right-6 top-5 font-serif text-4xl font-black text-primary-foreground/10">
                  {s.step}
                </span>
                <span className="flex size-14 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
                  <s.icon className="size-7" />
                </span>
                <h3 className="mt-6 text-lg font-bold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-primary-foreground/70">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
