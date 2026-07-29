import { Languages, Calculator, PenLine, FlaskConical, Globe2 } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const subjects = [
  { icon: Languages, name: '영어', desc: '문법·독해·회화까지 체계적 지도' },
  { icon: Calculator, name: '수학', desc: '개념부터 심화까지 단계별 완성' },
  { icon: PenLine, name: '국어', desc: '독해력과 서술형 논리 강화' },
  { icon: FlaskConical, name: '과학', desc: '원리 이해 중심의 탐구 수업' },
  { icon: Globe2, name: '사회', desc: '흐름을 잡는 개념 정리 수업' },
]

export function SubjectsSection() {
  return (
    <section id="subjects" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-accent">Subjects</span>
          <h2 className="mt-3 text-balance font-serif text-3xl font-black tracking-tight text-foreground md:text-4xl">
            전 과목 전문 수업
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            과목별 전문 선생님이 학생의 목표에 맞춰 지도합니다.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {subjects.map((s, i) => (
            <Reveal as="article" key={s.name} delay={i * 80}>
              <div className="group flex h-full flex-col items-center rounded-2xl border border-border bg-card p-7 text-center shadow-sm transition-all hover:-translate-y-1.5 hover:border-accent/50 hover:shadow-xl">
                <span className="flex size-16 items-center justify-center rounded-2xl bg-secondary text-primary transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <s.icon className="size-8" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-foreground">{s.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
