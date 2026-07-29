import { Phone, MessageSquare } from 'lucide-react'
import { PHONE_TEL, PHONE_SMS } from '@/lib/region-content'

export function MobileContactBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-px border-t border-border bg-border md:hidden">
      <a
        href={PHONE_TEL}
        className="flex items-center justify-center gap-2 bg-primary py-3.5 text-sm font-bold text-primary-foreground"
      >
        <Phone className="size-4" />
        전화 상담
      </a>
      <a
        href={PHONE_SMS}
        className="flex items-center justify-center gap-2 bg-accent py-3.5 text-sm font-bold text-accent-foreground"
      >
        <MessageSquare className="size-4" />
        문자 상담
      </a>
    </div>
  )
}
