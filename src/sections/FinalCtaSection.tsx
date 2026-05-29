import { ImageWithFallback } from "@/components/ImageWithFallback";
import { Reveal } from "@/components/Reveal";
import { images } from "@/lib/images";
import { Button } from "@/ui/Button";

export function FinalCtaSection() {
  return (
    <section id="final-cta" className="bg-white pb-20">
      <div className="section-wrap">
        <div className="relative overflow-hidden rounded-[28px] bg-navy-deep text-white shadow-soft">
          <ImageWithFallback
            src={images.cta}
            alt="체계적으로 입시를 준비하는 학생"
            fill
            sizes="100vw"
            className="object-cover object-right"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,18,37,0.96)_0%,rgba(7,26,51,0.86)_44%,rgba(7,26,51,0.22)_100%)]" />
          <div className="relative min-h-[360px] px-7 py-12 sm:px-12 lg:px-16">
            <Reveal className="max-w-[560px]">
              <h2 className="text-[32px] font-bold leading-[1.25] md:text-[44px]">
                막막했던 입시 준비,
                <br />
                이제 체계적으로 시작하세요
              </h2>
              <p className="mt-5 text-lg leading-8 text-white/78">한국진로진학연구원과 함께 학생부와 진로 방향을 정리해보세요.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="#top" className="w-full sm:w-auto">
                  무료 진단 시작하기
                </Button>
                <Button href="#admission-info" variant="secondary" className="w-full sm:w-auto">
                  상담 신청하기
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
