import type { Region, RegionLevel } from '@/lib/regions'
import { shortName } from '@/lib/regions'

export const PHONE = '010-3028-0877'
export const PHONE_TEL = 'tel:01030280877'
export const PHONE_SMS = 'sms:01030280877'

/**
 * Level-specific intro copy so a 읍·면·동 page and its child 리 page never share
 * the exact same body text (avoids duplicate-content penalties).
 */
export function heroIntro(region: Region): string {
  const name = shortName(region)
  switch (region.level) {
    case 'sido':
      return `${region.fullName} 전 지역에서 초·중·고 학생을 위한 1:1 맞춤 방문과외와 화상과외를 안내합니다. 각 시·군·구별 세부 지역도 함께 확인하실 수 있습니다.`
    case 'sigungu':
      return `${region.fullName} 지역 초·중·고 학생을 위한 1:1 맞춤 수업입니다. 동네 상황과 학교 진도에 맞춘 방문과외와 화상과외를 진행합니다.`
    case 'eupmyeondong':
      return `${region.fullName} 학생과 학부모님을 위한 밀착 1:1 수업입니다. ${name} 인근 학교 내신과 진도에 맞춰 방문과외 또는 화상과외로 학습을 관리합니다.`
    case 'ri':
      return `${region.fullName} 지역까지 찾아가는 1:1 맞춤 과외입니다. ${name} 학생의 이동 부담을 줄이고 방문과외와 화상과외를 유연하게 선택할 수 있습니다.`
  }
}

export function metaTitle(region: Region): string {
  return `${region.fullName} 과외 | 초등 중등 고등 1:1 맞춤수업`
}

export function metaDescription(region: Region): string {
  return `${region.fullName} 초등학생, 중학생, 고등학생 대상 방문과외와 화상과외를 안내합니다. 영어, 수학, 국어, 과학, 사회 등 전 과목 1:1 맞춤수업과 내신 대비, 학습관리를 제공합니다.`
}

export function h1(region: Region): string {
  return `${region.fullName} 방문과외·화상과외`
}

export interface InfoBlock {
  title: string
  body: string
}

export function gradeBlocks(region: Region): InfoBlock[] {
  const name = shortName(region)
  return [
    {
      title: '초등과외',
      body: `${name} 초등학생의 기초 학습 습관과 자기주도 학습력을 키웁니다. 학년별 교과 과정에 맞춰 재미있게 개념을 잡아드립니다.`,
    },
    {
      title: '중등과외',
      body: `${name} 중학생의 내신 성적 관리와 고등 진학 대비를 함께 진행합니다. 서술형·수행평가까지 꼼꼼하게 챙깁니다.`,
    },
    {
      title: '고등과외',
      body: `${name} 고등학생의 내신과 수능을 동시에 대비합니다. 학생의 목표 대학과 성적에 맞춘 전략적 학습 플랜을 설계합니다.`,
    },
  ]
}

export function subjectBlocks(region: Region): InfoBlock[] {
  const name = shortName(region)
  return [
    { title: '영어과외', body: `${name} 어휘·문법·독해부터 내신 서술형까지 균형 있게 지도합니다.` },
    { title: '수학과외', body: `${name} 개념 이해 중심으로 취약 단원을 진단하고 반복 학습으로 실력을 다집니다.` },
    { title: '국어과외', body: `${name} 문학·비문학 독해력과 서술형 답안 작성 능력을 함께 키웁니다.` },
    { title: '과학과외', body: `${name} 물리·화학·생명·지구과학 개념을 실생활 예시로 쉽게 이해시킵니다.` },
    { title: '사회과외', body: `${name} 흐름 중심의 이해 학습으로 사회·역사 과목의 부담을 덜어드립니다.` },
  ]
}

export function serviceBlocks(region: Region): InfoBlock[] {
  const name = shortName(region)
  return [
    { title: '방문과외', body: `${name} 자택으로 직접 찾아가 학습 환경 그대로 밀착 지도합니다.` },
    { title: '화상과외', body: `이동이 어려운 ${name} 학생도 실시간 화상으로 동일한 품질의 수업을 받습니다.` },
    { title: '1:1 맞춤수업', body: `학생 한 명의 수준과 목표에 완전히 맞춘 개인별 커리큘럼을 운영합니다.` },
    { title: '내신 대비', body: `${name} 인근 학교의 시험 범위와 출제 경향에 맞춰 집중 대비합니다.` },
    { title: '학습관리', body: `학생별 진도·과제·오답을 체계적으로 관리하고 학부모님께 정기적으로 리포트합니다.` },
  ]
}

export interface ProcessStep {
  step: string
  title: string
  body: string
}

export const PROCESS_STEPS: ProcessStep[] = [
  { step: '01', title: '상담 신청', body: '전화 또는 문자로 학생의 학년, 과목, 목표를 알려주세요.' },
  { step: '02', title: '수준 진단', body: '현재 실력과 취약점을 진단해 학습 방향을 설정합니다.' },
  { step: '03', title: '맞춤 수업', body: '개인별 커리큘럼으로 방문 또는 화상 1:1 수업을 진행합니다.' },
  { step: '04', title: '학습 관리', body: '진도와 성적 변화를 지속 관리하고 정기 리포트를 제공합니다.' },
]

export function faqItems(region: Region): InfoBlock[] {
  const name = shortName(region)
  return [
    {
      title: `${name}에서도 방문과외가 가능한가요?`,
      body: `네, ${region.fullName} 지역으로 선생님이 직접 방문해 수업합니다. 일정과 위치에 따라 화상과외도 선택하실 수 있습니다.`,
    },
    {
      title: '어떤 과목을 배울 수 있나요?',
      body: '영어, 수학, 국어, 과학, 사회 등 초·중·고 전 과목을 1:1 맞춤으로 지도합니다.',
    },
    {
      title: '수업료와 시간은 어떻게 정하나요?',
      body: '학년과 과목, 수업 횟수에 따라 상담을 통해 결정합니다. 부담 없이 문의해 주세요.',
    },
    {
      title: '내신 대비만 따로 받을 수 있나요?',
      body: `가능합니다. ${name} 인근 학교의 시험 범위에 맞춰 단기 내신 집중반도 운영합니다.`,
    },
  ]
}
