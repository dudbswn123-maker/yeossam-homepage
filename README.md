# 여쌤과외 홈페이지

v0에서 내려받은 프로젝트의 지역 데이터 API 불일치 오류를 수정한 Next.js 프로젝트입니다.

## 수정 사항

- `provinces`, `totalRegionCount`, `allRegions` 누락 오류 수정
- 지역 상세 페이지를 현재 `Region` 데이터 구조에 맞게 수정
- `/sitemap.xml` 자동 생성 추가
- `/robots.txt` 자동 생성 추가
- 지역 목록 및 상세 페이지 링크 구조 정리

## 로컬 실행

```bash
npm install
npm run dev
```

## 배포 전 환경변수

Vercel 프로젝트 설정에서 아래 값을 실제 도메인으로 등록하세요.

```text
NEXT_PUBLIC_SITE_URL=https://실제도메인.com
```

도메인이 아직 없으면 Vercel 기본 주소를 넣어도 됩니다.

## 중요

현재 `data/regions.json`에는 예시 지역 10개만 들어 있습니다. 전국 지역 페이지를 만들려면 같은 형식으로 전국 행정구역 데이터를 추가해야 합니다.
