# 한국진로진학연구원 랜딩페이지

Next.js 14 App Router, TypeScript, Tailwind CSS, Framer Motion 기반의 프리미엄 교육 SaaS 랜딩페이지입니다.

## 구조

```txt
src/
  app/
  components/
  sections/
  ui/
  lib/
  styles/
public/
  images/
docs/
```

## 실행

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:3000`으로 확인합니다.

## Netlify 배포

Netlify에서 새 사이트를 만들 때 아래 값으로 설정합니다.

```txt
Build command: npm run build
Publish directory: out
Node version: 20
```

`netlify.toml`에 같은 설정을 포함해 두었습니다.

## 이미지 교체

이미지는 `public/images` 아래의 동일 파일명만 교체하면 페이지에 바로 반영됩니다.

```txt
hero-student-main.webp
problem-records.webp
problem-subject.webp
problem-admission.webp
dashboard-platform.webp
before-student.webp
after-student.webp
trust-parent-student.webp
trust-consulting-scene.webp
cta-student-final.webp
```
