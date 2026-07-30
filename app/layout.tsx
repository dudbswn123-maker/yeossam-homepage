import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Noto_Sans_KR, Noto_Serif_KR } from 'next/font/google'
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
  title: '여쌤과외 | 전국 방문과외 · 화상과외 전문',
  description:
    '초·중·고 1:1 맞춤수업 전문 여쌤과외. 영어, 수학, 국어, 과학, 사회. 학생별 학습관리와 내신 대비, 방문과외 및 화상수업으로 성적을 올려드립니다.',
  generator: 'v0.app',
  keywords: ['과외', '방문과외', '화상과외', '1:1 맞춤수업', '내신대비', '영어', '수학', '국어', '여쌤과외'],
  openGraph: {
    title: '여쌤과외 | 전국 방문과외 · 화상과외 전문',
    description: '초·중·고 1:1 맞춤수업 전문. 학생별 학습관리와 내신 대비.',
    type: 'website',
    locale: 'ko_KR',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#1e2a4a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className={`${notoSansKR.variable} ${notoSerifKR.variable} bg-background`}>
      <head>
        <meta name="naver-site-verification" content="ad6a4299aaed55cf51f99ad0338d5204dee06786" />
       </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
