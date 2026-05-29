import { AcademicCapIcon } from "@heroicons/react/24/solid";
import { Button } from "@/ui/Button";

const navItems = [
  { label: "서비스 소개", href: "#solution" },
  { label: "주제탐구", href: "#topic-generator" },
  { label: "학생부 분석", href: "#student-analysis" },
  { label: "강의", href: "#lecture-guide" },
  { label: "입시정보", href: "#admission-info" },
  { label: "후기", href: "#trust" }
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/15 bg-navy-deep/95 shadow-[0_10px_30px_rgba(3,18,37,0.18)] backdrop-blur-md">
      <div className="section-wrap flex h-20 items-center justify-between">
        <a href="#top" className="flex items-center gap-3" aria-label="한국진로진학연구원 홈">
          <span className="grid size-11 place-items-center rounded-2xl border border-accent-yellow/35 bg-white/10 text-accent-yellow shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]">
            <AcademicCapIcon className="size-6" aria-hidden="true" />
          </span>
          <span className="leading-tight text-white">
            <strong className="block text-[16px] font-bold tracking-[0.01em]">한국진로진학연구원</strong>
            <span className="hidden text-[11px] font-semibold text-white/64 sm:block">
              Career · Admission · Student Record
            </span>
          </span>
        </a>
        <nav
          className="hidden items-center gap-4 rounded-full border border-white/12 bg-white/10 px-5 py-3 text-[14px] font-bold text-white shadow-[0_8px_24px_rgba(0,0,0,0.12)] xl:gap-6 xl:px-6 xl:text-[15px] lg:flex"
          aria-label="주요 메뉴"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-white drop-shadow-sm transition duration-300 ease-premium hover:text-accent-yellow"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <Button href="#final-cta" className="hidden sm:inline-flex">
          무료 진단 시작하기
        </Button>
      </div>
    </header>
  );
}
