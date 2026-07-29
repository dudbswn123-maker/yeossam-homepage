import { Backpack, BookOpenText, GraduationCap, ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const programs = [
  {
    icon: Backpack,
    grade: '초등',
    range: '초등 1~6학년',
    desc: '학습 습관과 기초 개념을 탄탄하게. 재미있는 수업으로 공부에 대한 자신감을 키웁니다.',
    points: ['기초 학습 습관 형성', '교과 개념 완성', '자기주도 학습 훈련'],
  },
  {
    icon: BookOpenText,
    grade: '중등',
    range: '중등 1~3학년',
    desc: '내신과 개념을 동시에. 학교 시험에 최적화된 관리로 상위권 도약을 준비합니다.',
    points: ['학교별 내신 대비', '서술형 완벽 대비', '취약 단원 집중 보완'],
    featured: true,
  },
  {
    icon: GraduationCap,
    grade: '고등',
    range: '고등 1~3학년',
    desc: '수능과 내신 전략 관리. 목표 대학에 맞춘 정밀 로드맵으로 성적을 끌어올립니다.',
    points: ['수능·모의고사 대비', '내신 등급 관리', '입시 맞춤 로드맵'],
  },
]

export function GradePrograms() {
  return (
    <section id="programs" className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-accent">Programs</span>
          <h2 className="mt-3 text-balance font-serif text-3xl font-black tracking-tight text-foreground md:text-4xl">
            학년별 맞춤 과정
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            초등부터 고등까지, 각 시기에 꼭 필요한 학습을 설계합니다.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {programs.map((p, i) => (
            <Reveal as="article" key={p.grade} delay={i * 100}>
              <div
                className={[
                  'flex h-full flex-col rounded-3xl border p-8 shadow-sm transition-all hover:-translate-y-1.5 hover:shadow-xl',
                  p.featured
                    ? 'border-primary bg-primary text-primary-foreground'
                    : 'border-border bg-card text-foreground',
                ].join(' ')}
              >
                <span
                  className={[
                    'flex size-14 items-center justify-center rounded-2xl',
                    p.featured ? 'bg-accent text-accent-foreground' : 'bg-primary text-primary-foreground',
                  ].join(' ')}
                >
                  <p.icon className="size-7" />
                </span>

                <div className="mt-6 flex items-center gap-3">
                  <h3 className="font-serif text-2xl font-black">{p.grade}</h3>
                  <span
                    className={[
                      'rounded-full px-3 py-1 text-xs font-semibold',
                      p.featured ? 'bg-primary-foreground/15' : 'bg-secondary text-secondary-foreground',
                    ].join(' ')}
                  >
                    {p.range}
                  </span>
                </div>

                <p
                  className={[
                    'mt-4 text-sm leading-relaxed',
                    p.featured ? 'text-primary-foreground/80' : 'text-muted-foreground',
                  ].join(' ')}
                >
                  {p.desc}
                </p>

                <ul className="mt-6 space-y-3">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-2.5 text-sm font-medium">
                      <ArrowRight
                        className={['size-4 shrink-0', p.featured ? 'text-accent' : 'text-accent'].join(' ')}
                      />
                      {pt}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={[
                    'mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-transform hover:-translate-y-0.5',
                    p.featured
                      ? 'bg-primary-foreground text-primary'
                      : 'bg-primary text-primary-foreground',
                  ].join(' ')}
                >
                  상담 신청하기
                  <ArrowRight className="size-4" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
