import { Reveal } from '@/components/reveal'

const faqs = [
  {
    q: '수업은 어떻게 시작하나요?',
    a: '전화나 문자로 학생의 학년, 과목, 현재 성적, 원하는 수업 방식을 알려주시면 상담 후 학생에게 맞는 수업 방향을 안내합니다.',
  },
  {
    q: '방문과외와 화상과외 중 선택할 수 있나요?',
    a: '네. 지역과 일정에 따라 방문수업 또는 실시간 화상수업을 선택할 수 있습니다. 상담 과정에서 학생에게 더 적합한 방식도 함께 안내합니다.',
  },
  {
    q: '어떤 학년과 과목을 지도하나요?',
    a: '초등·중등·고등 학생을 대상으로 영어, 수학, 국어, 과학, 사회 등 주요 교과목을 1:1로 지도합니다.',
  },
  {
    q: '내신 시험 기간에만 수업받을 수 있나요?',
    a: '학생 상황과 선생님 일정에 따라 단기 내신 대비도 상담할 수 있습니다. 시험 범위, 취약 단원, 남은 기간을 기준으로 수업 계획을 세웁니다.',
  },
  {
    q: '수업료는 어떻게 정해지나요?',
    a: '학년, 과목, 수업 횟수, 수업 방식에 따라 달라집니다. 정확한 비용은 상담 시 조건을 확인한 뒤 안내합니다.',
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-accent">FAQ</span>
          <h2 className="mt-3 text-balance font-serif text-3xl font-black tracking-tight md:text-4xl">
            자주 묻는 질문
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            상담 전에 많이 궁금해하시는 내용을 먼저 확인해 보세요.
          </p>
        </Reveal>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, index) => (
            <Reveal key={faq.q} delay={index * 60}>
              <details className="group rounded-2xl border border-border bg-card p-5 shadow-sm open:border-primary/30 open:shadow-md">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-foreground">
                  <span>{faq.q}</span>
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-secondary text-lg text-primary transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 border-t border-border pt-4 text-sm leading-7 text-muted-foreground">
                  {faq.a}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
