import { ImageWithFallback } from "@/components/ImageWithFallback";
import { Reveal } from "@/components/Reveal";
import { images } from "@/lib/images";
import { SectionHeading } from "@/ui/SectionHeading";

const reviews = [
  {
    role: "고1 학부모",
    text: "아이의 관심사가 학생부 활동과 어떻게 이어지는지 처음으로 정리해서 볼 수 있었습니다."
  },
  {
    role: "고2 학생",
    text: "주제탐구를 막연하게 고르지 않고 전공 방향에 맞춰 생각할 수 있어 도움이 됐습니다."
  }
];

export function TrustSection() {
  return (
    <section id="trust" className="section-padding bg-navy-deep text-white">
      <div className="section-wrap">
        <Reveal>
          <SectionHeading
            eyebrow="Trust"
            title="믿을 수 있는 전문 진로·진학 플랫폼"
            description="학생과 학부모가 실제로 활용하는 장면에 가까운 구성으로 상담, 분석, 실행을 연결합니다."
            tone="dark"
          />
        </Reveal>
        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1fr_0.9fr]">
          <Reveal>
            <TrustImage title="실제 활용 분위기" src={images.trustParent} alt="학부모와 학생이 노트북으로 진로 자료를 확인하는 모습" />
          </Reveal>
          <Reveal delay={0.08}>
            <TrustImage title="전문 컨설팅 기반 운영" src={images.trustConsulting} alt="상담실에서 학생부와 진로 방향을 상담하는 모습" />
          </Reveal>
          <Reveal delay={0.16}>
            <aside className="flex h-full flex-col justify-center rounded-card border border-white/10 bg-white/8 p-7">
              <p className="text-[15px] font-bold text-accent-yellow">실제 이용 후기</p>
              <div className="mt-6 space-y-4">
                {reviews.map((review) => (
                  <blockquote key={review.role} className="rounded-2xl bg-white p-6 text-navy-deep shadow-card">
                    <p className="text-[16px] font-medium leading-8 text-navy-deep">“{review.text}”</p>
                    <footer className="mt-4 text-sm font-bold text-text-sub">- {review.role}</footer>
                  </blockquote>
                ))}
              </div>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function TrustImage({ title, src, alt }: { title: string; src: string; alt: string }) {
  return (
    <article className="overflow-hidden rounded-card border border-white/10 bg-white/8">
      <div className="relative h-[340px] bg-navy-primary">
        <ImageWithFallback src={src} alt={alt} fill sizes="(max-width: 1023px) 100vw, 380px" className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-white">{title}</h3>
      </div>
    </article>
  );
}
