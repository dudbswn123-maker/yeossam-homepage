import { Phone, MessageCircle, Clock, MapPin } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export function ContactSection() {
  return (
    <section id="contact" className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-xl">
            <div className="grid lg:grid-cols-2">
              <div className="flex flex-col justify-center p-8 md:p-12">
                <span className="text-sm font-bold uppercase tracking-widest text-accent">Contact</span>
                <h2 className="mt-3 text-balance font-serif text-3xl font-black tracking-tight text-foreground md:text-4xl">
                  지금 무료 상담받으세요
                </h2>
                <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                  학생에게 딱 맞는 과외 방식과 커리큘럼을 무료로 안내해 드립니다. 부담 없이 문의하세요.
                </p>

                <div className="mt-8 space-y-4">
                  <a
                    href="tel:010-3028-0877"
                    className="flex items-center gap-4 rounded-2xl border border-border bg-background p-4 transition-colors hover:border-primary/40"
                  >
                    <span className="flex size-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                      <Phone className="size-6" />
                    </span>
                    <span>
                      <span className="block text-xs font-medium text-muted-foreground">전화 상담</span>
                      <span className="block text-lg font-black text-foreground">010-3028-0877</span>
                    </span>
                  </a>

                  <div className="flex items-center gap-4 rounded-2xl border border-border bg-background p-4">
                    <span className="flex size-12 items-center justify-center rounded-xl bg-secondary text-primary">
                      <Clock className="size-6" />
                    </span>
                    <span>
                      <span className="block text-xs font-medium text-muted-foreground">상담 시간</span>
                      <span className="block text-base font-semibold text-foreground">
                        평일 · 주말 오전 9시 ~ 오후 10시
                      </span>
                    </span>
                  </div>

                  <div className="flex items-center gap-4 rounded-2xl border border-border bg-background p-4">
                    <span className="flex size-12 items-center justify-center rounded-xl bg-secondary text-primary">
                      <MapPin className="size-6" />
                    </span>
                    <span>
                      <span className="block text-xs font-medium text-muted-foreground">수업 지역</span>
                      <span className="block text-base font-semibold text-foreground">
                        전국 방문과외 · 화상수업 가능
                      </span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center gap-6 bg-primary p-8 text-primary-foreground md:p-12">
                <h3 className="font-serif text-2xl font-black">
                  첫 상담은
                  <br />
                  언제나 무료입니다
                </h3>
                <p className="text-sm leading-relaxed text-primary-foreground/75">
                  전화 또는 상담 신청으로 연락 주시면, 전문 상담원이 학생 맞춤 학습 플랜을 안내해 드립니다.
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href="tel:010-3028-0877"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-base font-bold text-accent-foreground transition-transform hover:-translate-y-0.5"
                  >
                    <Phone className="size-5" />
                    전화 상담하기
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
          </div>
        </Reveal>
      </div>
    </section>
  )
}
