import { ImageWithFallback } from "@/components/ImageWithFallback";
import { Reveal } from "@/components/Reveal";
import { images } from "@/lib/images";
import { Button } from "@/ui/Button";

export function HeroSection() {
  return (
    <section id="top" className="relative min-h-[920px] overflow-hidden bg-navy-deep text-white">
      <ImageWithFallback
        src={images.hero}
        alt="책상에서 진로와 입시 준비를 하는 학생"
        fill
        priority
        sizes="100vw"
        className="object-cover object-right md:object-[right_center]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,18,37,0.96)_0%,rgba(7,26,51,0.88)_36%,rgba(7,26,51,0.36)_70%,rgba(3,18,37,0.18)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,18,37,0.12)_0%,rgba(3,18,37,0.38)_100%)]" />

      <div className="section-wrap relative flex min-h-[920px] items-center pt-24">
        <Reveal className="max-w-[620px]">
          <p className="mb-6 inline-flex rounded-full border border-white/18 bg-white/8 px-4 py-2 text-[15px] font-semibold text-white/82">
            학생부·세특·진로진학을 한 번에
          </p>
          <h1 className="text-[38px] font-bold leading-[1.25] md:text-[52px]">
            학생부와 진로 준비,
            <br />
            이제는 방향이 필요합니다
          </h1>
          <p className="mt-7 max-w-[520px] text-lg leading-8 text-white/78 md:text-[20px]">
            주제탐구부터 세특·입시 설계까지
            <br className="hidden sm:block" />
            실전 중심으로 체계적으로 준비하세요
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href="#student-analysis" className="w-full sm:w-auto">
              무료 진단 시작하기
            </Button>
            <Button href="#final-cta" variant="secondary" className="w-full sm:w-auto">
              상담 신청하기
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
