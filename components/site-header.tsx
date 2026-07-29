'use client'

import { useEffect, useState } from 'react'
import { GraduationCap, Menu, Phone, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { label: '왜 여쌤과외', href: '/#why' },
  { label: '학년별 과정', href: '/#programs' },
  { label: '과목', href: '/#subjects' },
  { label: '지역별 과외', href: '/regions' },
  { label: '상담문의', href: '/#contact' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-border/70 bg-background/90 backdrop-blur-md shadow-sm'
          : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:h-20 md:px-6">
        <a href="/" className="flex items-center gap-2">
          <span
            className={cn(
              'flex size-9 items-center justify-center rounded-xl transition-colors md:size-10',
              scrolled ? 'bg-primary text-primary-foreground' : 'bg-primary text-primary-foreground',
            )}
          >
            <GraduationCap className="size-5" />
          </span>
          <span
            className={cn(
              'font-serif text-lg font-bold tracking-tight transition-colors md:text-xl',
              scrolled ? 'text-foreground' : 'text-foreground',
            )}
          >
            여쌤과외
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:010-3028-0877"
            className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-transform hover:-translate-y-0.5 md:inline-flex"
          >
            <Phone className="size-4" />
            무료 상담하기
          </a>
          <button
            type="button"
            aria-label="메뉴 열기"
            onClick={() => setOpen((v) => !v)}
            className="flex size-10 items-center justify-center rounded-xl border border-border bg-background text-foreground lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-4 py-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                {item.label}
              </a>
            ))}
            <a
              href="tel:010-3028-0877"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              <Phone className="size-4" />
              무료 상담하기
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
