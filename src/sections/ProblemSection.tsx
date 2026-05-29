import { ImageWithFallback } from "@/components/ImageWithFallback";
import { Reveal } from "@/components/Reveal";
import { images } from "@/lib/images";
import { SectionHeading } from "@/ui/SectionHeading";

const problems = [
  {
    title: "학생부 방향이 맞는지 불안할 때",
    desc: "활동은 쌓였지만 전공 적합성과 진로 흐름이 보이지 않을 때가 있습니다.",
    image: images.problemRecords
  },
  {
    title: "세특 준비를 어떻게 해야 할지 막막할 때",
    desc: "탐구 주제, 자료 조사, 보고서 방향까지 학생 수준에 맞는 설계가 필요합니다.",
    image: images.problemSubject
  },
  {
    title: "입시정보가 많아도 정리가 안 될 때",
    desc: "수시, 학생부종합, 면접 준비를 현재 학생부와 연결해 해석해야 합니다.",
    image: images.problemAdmission
  }
];

export function ProblemSection() {
  return (
    <section className="section-padding bg-white">
      <div className="section-wrap">
        <Reveal>
          <SectionHeading title="이런 고민, 하고 계시지 않나요?" />
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {problems.map((problem, index) => (
            <Reveal key={problem.title} delay={index * 0.08}>
              <article className="group h-full overflow-hidden rounded-card border border-line bg-white shadow-card transition duration-300 ease-premium hover:-translate-y-1">
                <div className="relative h-[260px] overflow-hidden bg-surface">
                  <ImageWithFallback
                    src={problem.image}
                    alt={problem.title}
                    fill
                    sizes="(max-width: 767px) 100vw, 33vw"
                    className="object-cover transition duration-500 ease-premium group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-7">
                  <h3 className="text-xl font-bold leading-snug text-text-dark">{problem.title}</h3>
                  <p className="mt-4 text-[15px] leading-7 text-text-sub">{problem.desc}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
