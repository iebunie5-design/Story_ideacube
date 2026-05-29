import {
  ArrowRightIcon,
  BeakerIcon,
  BookOpenIcon,
  CheckIcon,
  ClipboardDocumentCheckIcon,
  CurrencyDollarIcon,
  NewspaperIcon,
  PencilIcon,
  PresentationChartLineIcon,
  SparklesIcon
} from "@heroicons/react/24/outline";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/ui/SectionHeading";

const topicCards = [
  {
    badge: "중학생",
    title: "기초 탐구의 시작",
    desc: "교과서 기반으로 탐구 주제를 생성하고, 서론·본론·결론의 기본 보고서 구조를 함께 제공합니다.",
    example: "일상 속 화학 변화 관찰하기",
    tone: "green",
    icon: BeakerIcon
  },
  {
    badge: "고등 · EASY",
    title: "개념·정의 중심",
    desc: "고1 대상, 기본 개념과 정의 중심의 탐구 주제로 비교적 쉽게 탐구 활동을 시작할 수 있는 틀을 제시합니다.",
    example: "삼투압 원리와 생활 속 적용",
    tone: "blue",
    icon: SparklesIcon
  },
  {
    badge: "고등 · HARD",
    title: "융합·문제해결",
    desc: "고1 대상, 융합적 사고와 문제 해결 관점을 포함한 심화 탐구 주제로 난도 있는 보고서 틀을 제시합니다.",
    example: "기후 데이터로 본 도시 열섬 해법",
    tone: "purple",
    ribbon: "심화",
    icon: PresentationChartLineIcon
  }
];

const analysisCards = [
  {
    badge: "무료",
    title: "AI 분석",
    desc: "AI 기반 시스템으로 학생부를 분석해 계열 적합성·학업 역량·인성 영역으로 점수화합니다.",
    points: ["영역별 점수 리포트 즉시 확인", "계열 적합성 진단", "상담·진로지도 참고 자료로 활용"],
    cta: "무료 진단 시작하기",
    theme: "light"
  },
  {
    badge: "유료 · 심층",
    title: "컨설턴트 분석",
    desc: "전문 컨설턴트가 학생부를 직접 분석해 강점·보완점과 활동 방향, 지원 가능 대학 범위를 종합 제시합니다.",
    points: ["강점·보완점 1:1 심층 정리", "학생 맞춤 활동 방향 제시", "지원 가능 대학 범위 종합 진단"],
    cta: "상담 신청하기",
    theme: "dark"
  }
];

const lectures = [
  {
    title: "의대 준비반",
    status: "운영중",
    desc: "예비 고1·고1 대상 1:1 Zoom 강의. 생명과학·의학 기본 개념과 의대 진학 탐구 방향을 제시합니다.",
    icon: CurrencyDollarIcon
  },
  {
    title: "중·고등 지식강의",
    status: "준비중",
    desc: "사회 이슈와 다양한 학문 분야의 지식을 소개해 관심 분야와 탐구 주제를 발견하도록 돕습니다.",
    icon: BookOpenIcon
  },
  {
    title: "보고서 작성법",
    status: "준비중",
    desc: "특목고·자사고 준비생과 예비 고등학생 대상. 탐구 보고서의 개념과 작성 과정을 안내합니다.",
    icon: PencilIcon
  }
];

const infoCards = [
  {
    icon: ClipboardDocumentCheckIcon,
    title: "보고서 첨삭 신청",
    badge: "유료",
    desc: "작성한 탐구 보고서를 전문 컨설턴트가 검토해 보완점·논리 구조·탐구 방향을 첨삭합니다.",
    cta: "첨삭 신청하기"
  },
  {
    icon: PresentationChartLineIcon,
    title: "입시 설명회 신청",
    desc: "설명회 주제 안내와 신청을 한곳에서, 최신 설명회 일정과 신청 폼을 확인하세요.",
    cta: "설명회 신청하기"
  },
  {
    icon: NewspaperIcon,
    title: "진로진학 뉴스",
    desc: "최신 대학 입시 정보와 주요 입시 변화를 블로그와 연동해 확인할 수 있습니다.",
    cta: "뉴스 보러가기"
  }
];

export function ServiceCatalogSection() {
  return (
    <section id="service-catalog" className="section-padding bg-white">
      <div className="section-wrap space-y-28">
        <div id="topic-generator" className="scroll-mt-28">
          <Reveal>
            <SectionHeading
              eyebrow="핵심 서비스 · 무료"
              title="학생별 맞춤 탐구 주제, 직접 만들어보세요"
              description="2022 개정 교육과정 교과서를 기반으로, 수준에 맞는 탐구 주제와 보고서 구조를 제공합니다."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {topicCards.map((card, index) => (
              <Reveal key={card.title} delay={index * 0.08}>
                <TopicCard {...card} />
              </Reveal>
            ))}
          </div>
        </div>

        <div id="student-analysis" className="scroll-mt-28">
          <Reveal>
            <SectionHeading
              eyebrow="학생부 분석"
              title="학생부, 먼저 진단하고 전략을 세우세요"
              description="AI로 무료로 먼저 확인하고, 더 깊은 진단이 필요하면 전문 컨설턴트가 함께합니다."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {analysisCards.map((card, index) => (
              <Reveal key={card.title} delay={index * 0.08}>
                <AnalysisCard {...card} />
              </Reveal>
            ))}
          </div>
        </div>

        <div id="lecture-guide" className="scroll-mt-28">
          <Reveal>
            <SectionHeading eyebrow="강의" title="전문가와 함께하는 1:1 강의" />
          </Reveal>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {lectures.map((lecture, index) => (
              <Reveal key={lecture.title} delay={index * 0.08}>
                <LectureCard {...lecture} />
              </Reveal>
            ))}
          </div>
        </div>

        <div id="admission-info" className="scroll-mt-28">
          <Reveal>
            <SectionHeading eyebrow="신청 · 입시정보" title="더 많은 정보가 필요하다면" />
          </Reveal>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {infoCards.map((card, index) => (
              <Reveal key={card.title} delay={index * 0.08}>
                <InfoCard {...card} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TopicCard({
  badge,
  title,
  desc,
  example,
  tone,
  ribbon,
  icon: Icon
}: (typeof topicCards)[number]) {
  const toneClass = {
    green: "bg-emerald-50 text-emerald-800",
    blue: "bg-blue-50 text-blue-800",
    purple: "bg-violet-50 text-violet-800"
  }[tone];

  return (
    <article className="relative h-full overflow-hidden rounded-card border border-line bg-white p-8 shadow-card transition duration-300 ease-premium hover:-translate-y-1 md:p-10">
      {ribbon ? (
        <div className="absolute right-[-46px] top-8 rotate-45 bg-accent-yellow px-14 py-2 text-[14px] font-bold text-navy-deep">
          {ribbon}
        </div>
      ) : null}
      <div className={`mb-9 inline-flex items-center gap-2 rounded-full px-4 py-2 text-[15px] font-bold ${toneClass}`}>
        <Icon className="size-4" aria-hidden="true" />
        {badge}
      </div>
      <h3 className="text-[26px] font-bold leading-snug text-navy-primary">{title}</h3>
      <p className="mt-6 text-[17px] leading-8 text-text-sub">{desc}</p>
      <div className="my-8 border-t border-dashed border-line" />
      <p className="text-[15px] leading-7 text-text-sub">
        예시 주제 · <strong className="text-navy-primary">{example}</strong>
      </p>
      <a
        href="#topic-generator"
        className="mt-8 flex min-h-14 items-center justify-between rounded-2xl bg-surface px-6 text-[16px] font-bold text-navy-primary transition duration-300 ease-premium hover:bg-[#EFE8D8]"
      >
        주제 생성 시작하기
        <ArrowRightIcon className="size-5" aria-hidden="true" />
      </a>
    </article>
  );
}

function AnalysisCard({ badge, title, desc, points, cta, theme }: (typeof analysisCards)[number]) {
  const dark = theme === "dark";

  return (
    <article
      className={`h-full rounded-[28px] border p-8 shadow-card transition duration-300 ease-premium hover:-translate-y-1 md:p-10 ${
        dark ? "border-navy-primary bg-navy-primary text-white" : "border-line bg-white text-text-dark"
      }`}
    >
      <span
        className={`inline-flex rounded-full px-4 py-2 text-[15px] font-bold ${
          dark ? "bg-accent-yellow text-navy-deep" : "bg-emerald-50 text-emerald-800"
        }`}
      >
        {badge}
      </span>
      <h3 className={`mt-9 text-[30px] font-bold leading-snug ${dark ? "text-white" : "text-navy-primary"}`}>{title}</h3>
      <p className={`mt-6 text-[17px] leading-8 ${dark ? "text-white/78" : "text-text-sub"}`}>{desc}</p>
      <ul className="mt-8 space-y-4">
        {points.map((point) => (
          <li key={point} className={`flex gap-3 text-[16px] font-semibold ${dark ? "text-white/88" : "text-navy-primary"}`}>
            <span
              className={`mt-0.5 grid size-6 shrink-0 place-items-center rounded-full ${
                dark ? "bg-accent-yellow text-navy-deep" : "bg-emerald-50 text-emerald-800"
              }`}
            >
              <CheckIcon className="size-4" aria-hidden="true" />
            </span>
            {point}
          </li>
        ))}
      </ul>
      <a
        href={dark ? "#final-cta" : "#student-analysis"}
        className={`mt-10 inline-flex items-center gap-2 text-[17px] font-bold ${
          dark ? "text-accent-yellow" : "text-navy-primary"
        }`}
      >
        {cta}
        <ArrowRightIcon className="size-5" aria-hidden="true" />
      </a>
    </article>
  );
}

function LectureCard({ title, status, desc, icon: Icon }: (typeof lectures)[number]) {
  return (
    <article className="h-full rounded-card border border-line bg-white p-8 shadow-card transition duration-300 ease-premium hover:-translate-y-1 md:p-10">
      <div className="mb-8 grid size-16 place-items-center rounded-[18px] bg-surface text-navy-primary">
        <Icon className="size-8" aria-hidden="true" />
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <h3 className="text-[24px] font-bold leading-snug text-navy-primary">{title}</h3>
        <span className="rounded-full bg-[#F5EBC9] px-4 py-1.5 text-[14px] font-bold text-navy-primary">
          {status}
        </span>
      </div>
      <p className="mt-6 text-[17px] leading-8 text-text-sub">{desc}</p>
    </article>
  );
}

function InfoCard({ icon: Icon, title, badge, desc, cta }: (typeof infoCards)[number]) {
  return (
    <article className="h-full rounded-card border border-line bg-white p-8 shadow-card transition duration-300 ease-premium hover:-translate-y-1 md:p-10">
      <div className="mb-9 grid size-16 place-items-center rounded-[18px] bg-surface text-navy-primary">
        <Icon className="size-8" aria-hidden="true" />
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <h3 className="text-[24px] font-bold leading-snug text-navy-primary">{title}</h3>
        {badge ? (
          <span className="rounded-full bg-[#F5EBC9] px-4 py-1.5 text-[14px] font-bold text-navy-primary">{badge}</span>
        ) : null}
      </div>
      <p className="mt-6 text-[17px] leading-8 text-text-sub">{desc}</p>
      <a
        href={title === "진로진학 뉴스" ? "#admission-info" : "#final-cta"}
        className="mt-8 flex min-h-14 items-center justify-between rounded-2xl bg-surface px-6 text-[16px] font-bold text-navy-primary transition duration-300 ease-premium hover:bg-[#EFE8D8]"
      >
        {cta}
        <ArrowRightIcon className="size-5" aria-hidden="true" />
      </a>
    </article>
  );
}
