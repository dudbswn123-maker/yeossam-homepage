import { MessageSquare, Phone } from 'lucide-react'
import { PHONE_SMS, PHONE_TEL } from '@/lib/region-content'

export function DesktopContactButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-40 hidden flex-col gap-3 md:flex">
      <a
        href={PHONE_SMS}
        aria-label="문자 상담"
        className="flex size-14 items-center justify-center rounded-full border border-border bg-background text-primary shadow-xl transition-transform hover:-translate-y-1"
      >
        <MessageSquare className="size-6" />
      </a>
      <a
        href={PHONE_TEL}
        aria-label="전화 상담"
        className="flex size-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-xl transition-transform hover:-translate-y-1"
      >
        <Phone className="size-6" />
      </a>
    </div>
  )
}
