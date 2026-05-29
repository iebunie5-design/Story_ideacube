import {
  AcademicCapIcon,
  ChartBarSquareIcon,
  DocumentMagnifyingGlassIcon,
  NewspaperIcon
} from "@heroicons/react/24/outline";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import { Reveal } from "@/components/Reveal";
import { images } from "@/lib/images";
import { SectionHeading } from "@/ui/SectionHeading";

const services = [
  { title: "주제탐구 생성기", desc: "전공 계열과 관심사를 연결해 탐구 주제를 제안합니다.", icon: DocumentMagnifyingGlassIcon },
  { title: "학생부 분석", desc: "활동 흐름과 보완 지점을 보기 쉽게 정리합니다.", icon: ChartBarSquareIcon },
  { title: "진로·진학 강의", desc: "학생부, 세특, 면접 준비를 단계별로 학습합니다.", icon: AcademicCapIcon },
  { title: "입시정보 콘텐츠", desc: "필요한 정보를 학생 상황에 맞게 큐레이션합니다.", icon: NewspaperIcon }
];

export function SolutionPlatformSection() {
  return (
    <section id="solution" className="section-padding bg-surface">
      <div className="section-wrap">
        <Reveal>
          <SectionHeading
            eyebrow="Solution"
            title="한국진로진학연구원이 해결해드립니다"
            description="분석, 설계, 정보, 강의를 한 곳에서 연결해 학생부 준비의 흐름을 선명하게 만듭니다."
          />
        </Reveal>
        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <div className="overflow-hidden rounded-[28px] border border-line bg-white p-3 shadow-soft">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[20px] bg-white">
                <ImageWithFallback
                  src={images.dashboard}
                  alt="한국진로진학연구원 SaaS 대시보드 화면"
                  fill
                  sizes="(max-width: 1023px) 100vw, 680px"
                  className="object-contain"
                />
              </div>
            </div>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.title} delay={index * 0.07}>
                  <article className="rounded-card border border-line bg-white p-6 shadow-card transition duration-300 ease-premium hover:-translate-y-1">
                    <div className="mb-5 grid size-12 place-items-center rounded-2xl bg-navy-primary text-accent-yellow">
                      <Icon className="size-6" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-bold text-text-dark">{service.title}</h3>
                    <p className="mt-3 text-[15px] leading-7 text-text-sub">{service.desc}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
