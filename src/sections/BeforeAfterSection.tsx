import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import { Reveal } from "@/components/Reveal";
import { images } from "@/lib/images";
import { SectionHeading } from "@/ui/SectionHeading";

const before = ["어디서부터 시작할지 막막함", "세특·탐구 방향이 불분명", "정보 부족으로 불안감 상승"];
const after = ["체계적인 학생부 준비", "명확한 탐구·세특 방향", "현재 상황에 맞는 입시 정보 활용"];

export function BeforeAfterSection() {
  return (
    <section className="section-padding bg-white">
      <div className="section-wrap">
        <Reveal>
          <SectionHeading title="학생의 변화, 확실히 경험하세요" description="막연했던 준비가 계획과 실행 중심의 방향으로 바뀝니다." />
        </Reveal>
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <CompareCard title="Before" image={images.before} items={before} tone="before" />
          </Reveal>
          <Reveal delay={0.08}>
            <CompareCard title="After" image={images.after} items={after} tone="after" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function CompareCard({
  title,
  image,
  items,
  tone
}: {
  title: string;
  image: string;
  items: string[];
  tone: "before" | "after";
}) {
  const Icon = tone === "after" ? CheckCircleIcon : XCircleIcon;

  return (
    <article className="overflow-hidden rounded-card border border-line bg-white shadow-card">
      <div className={`px-7 py-4 text-center text-lg font-bold ${tone === "after" ? "bg-navy-primary text-white" : "bg-slate-100 text-text-dark"}`}>
        {title}
      </div>
      <div className="grid md:grid-cols-[0.9fr_1.1fr]">
        <div className="p-7">
          <ul className="space-y-4">
            {items.map((item) => (
              <li key={item} className="flex gap-3 text-[15px] font-semibold text-text-dark">
                <Icon className={`mt-0.5 size-5 shrink-0 ${tone === "after" ? "text-navy-primary" : "text-text-sub"}`} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative min-h-[260px] bg-surface">
          <ImageWithFallback src={image} alt={`${title} 학생 이미지`} fill sizes="(max-width: 1023px) 100vw, 420px" className="object-cover" />
        </div>
      </div>
    </article>
  );
}
