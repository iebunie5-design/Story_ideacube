export function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="section-wrap flex flex-col gap-6 py-10 text-[14px] text-text-sub md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-bold text-navy-primary">한국진로진학연구원</p>
          <p className="mt-2">학생부 진단부터 탐구·상담까지 이어지는 프리미엄 교육 SaaS</p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-3" aria-label="푸터 메뉴">
          <a href="#solution" className="hover:text-navy-primary">서비스 소개</a>
          <a href="#details" className="hover:text-navy-primary">이용 가이드</a>
          <a href="#faq" className="hover:text-navy-primary">자주 묻는 질문</a>
          <a href="#top" className="hover:text-navy-primary">맨 위로</a>
        </nav>
      </div>
    </footer>
  );
}
