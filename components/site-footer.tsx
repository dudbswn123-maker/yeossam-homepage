import { GraduationCap, Phone } from 'lucide-react'

const links = [
  { label: '왜 여쌤과외', href: '#why' },
  { label: '학년별 과정', href: '#programs' },
  { label: '과목', href: '#subjects' },
  { label: '수업 과정', href: '#process' },
  { label: '상담문의', href: '#contact' },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2">
              <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <GraduationCap className="size-5" />
              </span>
              <span className="font-serif text-lg font-bold text-foreground">여쌤과외</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              초·중·고 1:1 맞춤수업 전문. 방문과외와 화상수업으로 학생 한 명 한 명의 성장을 함께합니다.
            </p>
            <a
              href="tel:010-3028-0877"
              className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-foreground"
            >
              <Phone className="size-4 text-accent" />
              010-3028-0877
            </a>
          </div>

          <nav className="grid gap-3">
            <span className="text-sm font-bold text-foreground">바로가기</span>
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} 여쌤과외. All rights reserved.</p>
          <p>전국 방문과외 · 화상과외 전문</p>
        </div>
      </div>
    </footer>
  )
}
