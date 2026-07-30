import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Noto_Sans_KR, Noto_Serif_KR } from 'next/font/google'
import { DesktopContactButtons } from '@/components/desktop-contact-buttons'
import { MobileContactBar } from '@/components/mobile-contact-bar'
import { SITE_URL } from '@/lib/regions'
import './globals.css'

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-noto-sans-kr',
  display: 'swap',
})

const notoSerifKR = Noto_Serif_KR({
  subsets: ['latin'],
  weight: ['600', '700', '900'],
  variable: '--font-noto-serif-kr',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: '여쌤과외 | 전국 방문과외 · 화상과외 1:1 맞춤수업',
    template: '%s | 여쌤과외',
  },
  description:
    '초등·중등·고등 1:1 맞춤과외. 영어, 수학, 국어, 과학, 사회 과목의 내신 대비와 학습관리, 전국 방문과외 및 화상수업을 안내합니다.',
  keywords: ['여쌤과외', '방문과외', '화상과외', '1:1 맞춤수업', '내신 대비', '영어과외', '수학과외', '과학과외'],
  alternates: { canonical: '/' },
  openGraph: {
    title: '여쌤과외 | 전국 방문과외 · 화상과외',
    description: '초·중·고 학생별 1:1 맞춤수업과 내신 대비, 학습관리.',
    type: 'website',
    locale: 'ko_KR',
    url: '/',
    siteName: '여쌤과외',
  },
  twitter: {
    card: 'summary_large_image',
    title: '여쌤과외 | 전국 방문과외 · 화상과외',
    description: '초·중·고 학생별 1:1 맞춤수업과 내신 대비, 학습관리.',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#1e2a4a',
  width: 'device-width',
  initialScale: 1,
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: '여쌤과외',
  url: SITE_URL,
  telephone: '010-3028-0877',
  areaServed: '대한민국',
  description: '초등·중등·고등 1:1 맞춤 방문과외 및 화상과외 안내',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" className={`${notoSansKR.variable} ${notoSerifKR.variable} bg-background`}>
      <head>
        <meta name="naver-site-verification" content="ad6a4299aaed55cf51f99ad0338d5204dee06786" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="pb-14 font-sans antialiased md:pb-0">
        {children}
        <DesktopContactButtons />
        <MobileContactBar />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
