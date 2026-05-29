import {
  BoltIcon,
  ChartPieIcon,
  ClockIcon,
  CursorArrowRaysIcon,
  PencilSquareIcon
} from "@heroicons/react/24/outline";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/ui/SectionHeading";

const values = [
  { title: "학생 맞춤형 진로 설계", desc: "학생의 강점과 관심사를 반영한 진로 전략", icon: CursorArrowRaysIcon },
  { title: "실제 학생부 기반 분석", desc: "활동과 내용을 분석해 보완 방향 제시", icon: ChartPieIcon },
  { title: "쉽고 빠른 입시 정보", desc: "최신 입시 정보를 한눈에 쉽게 확인", icon: ClockIcon },
  { title: "실전 중심 탐구·세특 준비", desc: "탐구 주제부터 세특 작성까지 실전 지원", icon: PencilSquareIcon },
  { title: "온라인으로 편리하게 활용", desc: "언제 어디서나 온라인으로 간편하게 이용", icon: BoltIcon }
];

export function CoreValueSection() {
  return (
    <section className="section-padding bg-surface">
      <div className="section-wrap">
        <Reveal>
          <SectionHeading title="한국진로진학연구원의 핵심 가치" />
        </Reveal>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Reveal key={value.title} delay={index * 0.05}>
                <article className="h-full rounded-card border border-line bg-white p-6 text-center shadow-card transition duration-300 ease-premium hover:-translate-y-1">
                  <div className="mx-auto mb-5 grid size-14 place-items-center rounded-2xl border border-line bg-white text-navy-primary">
                    <Icon className="size-7" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold leading-snug text-text-dark">{value.title}</h3>
                  <p className="mt-3 text-[15px] leading-7 text-text-sub">{value.desc}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
