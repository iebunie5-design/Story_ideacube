# Implementation Notes

- 모든 주요 섹션은 `src/sections`에 분리했습니다.
- `next/image`를 사용하고, 이미지 로드 실패 시 `ImageWithFallback`에서 대체 영역을 표시합니다.
- Framer Motion은 fade-up, subtle stagger, FAQ accordion에만 사용했습니다.
- SEO 메타데이터는 `src/app/layout.tsx`에 기본 적용했습니다.
- 디자인 토큰은 `tailwind.config.ts`에 정의했습니다.
