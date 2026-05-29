import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kareer-lab.example.com"),
  title: {
    default: "한국진로진학연구원 | 프리미엄 진로·진학 SaaS",
    template: "%s | 한국진로진학연구원"
  },
  description:
    "학생부 분석, 주제탐구, 세특 준비, 진로·진학 강의를 한 곳에서 체계적으로 제공하는 프리미엄 교육 SaaS 플랫폼입니다.",
  keywords: ["한국진로진학연구원", "학생부 분석", "주제탐구", "세특", "입시 정보", "진로 진학"],
  openGraph: {
    title: "한국진로진학연구원",
    description: "막막했던 학생부와 입시 준비를 실전 중심으로 체계화합니다.",
    type: "website",
    locale: "ko_KR",
    images: [{ url: "/images/hero-student-main.webp", width: 1536, height: 1024 }]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
