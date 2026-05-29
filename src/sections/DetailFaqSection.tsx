"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/ui/SectionHeading";

const details = [
  { title: "이용 흐름", desc: "무료 진단으로 현재 상태를 확인한 뒤, 필요한 경우 주제탐구·강의·상담으로 이어집니다." },
  { title: "분석 기준", desc: "활동 흐름, 전공 적합성, 탐구 확장 가능성을 중심으로 보완 방향을 정리합니다." },
  { title: "추천 대상", desc: "학생부 방향, 탐구 주제, 세특 준비를 구체화하고 싶은 중·고등학생에게 적합합니다." },
  { title: "이용 방법", desc: "PC와 모바일에서 분석 결과와 추천 콘텐츠를 확인하고 상담 신청까지 진행할 수 있습니다." }
];

const faqs = [
  {
    q: "누구나 이용할 수 있나요?",
    a: "중학생부터 고등학생, 학부모까지 이용할 수 있습니다. 특히 학생부 방향과 탐구 주제 설계가 필요한 학생에게 알맞습니다."
  },
  {
    q: "학생부 분석은 어떻게 진행되나요?",
    a: "입력한 활동 내용과 목표 전공을 바탕으로 활동 흐름, 강점, 보완이 필요한 지점을 정리해 보여주는 방식입니다."
  },
  {
    q: "주제탐구 생성기는 어떻게 사용하나요?",
    a: "관심 분야와 전공 계열을 선택하면 탐구 주제 후보와 확장 방향을 제안합니다. 결과는 세특 준비와 보고서 기획에 활용할 수 있습니다."
  },
  {
    q: "서비스는 온라인으로만 이용 가능한가요?",
    a: "기본 서비스는 온라인 사용을 기준으로 설계되어 있으며, 상담형 프로그램은 별도 안내에 따라 운영될 수 있습니다."
  }
];

export function DetailFaqSection() {
  const [open, setOpen] = useState(0);

  return (
    <section id="details" className="section-padding bg-white">
      <div className="section-wrap">
        <Reveal>
          <SectionHeading title="이용 전 확인하기" description="서비스 흐름과 자주 묻는 질문만 간결하게 정리했습니다." />
        </Reveal>
        <div className="mt-14 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <div className="overflow-hidden rounded-card border border-line bg-white shadow-card">
              {details.slice(0, 2).map((detail) => (
                <div key={detail.title} className="grid gap-4 border-b border-line p-5 sm:grid-cols-[160px_1fr]">
                  <h3 className="font-bold text-navy-primary">{detail.title}</h3>
                  <p className="text-[15px] leading-7 text-text-sub">{detail.desc}</p>
                </div>
              ))}
              {details.slice(2).map((detail) => (
                <div key={detail.title} className="grid gap-4 border-b border-line p-5 last:border-b-0 sm:grid-cols-[160px_1fr]">
                  <h3 className="font-bold text-navy-primary">{detail.title}</h3>
                  <p className="text-[15px] leading-7 text-text-sub">{detail.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div id="faq" className="rounded-card border border-line bg-white p-4 shadow-card">
              <h3 className="px-2 pb-3 text-xl font-bold text-text-dark">자주 묻는 질문</h3>
              {faqs.map((faq, index) => {
                const isOpen = open === index;
                return (
                  <div key={faq.q} className="border-t border-line">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between gap-4 px-2 py-5 text-left font-bold text-text-dark"
                      onClick={() => setOpen(isOpen ? -1 : index)}
                      aria-expanded={isOpen}
                    >
                      <span>{faq.q}</span>
                      <ChevronDownIcon className={`size-5 shrink-0 transition ${isOpen ? "rotate-180" : ""}`} aria-hidden="true" />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen ? (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="px-2 pb-5 text-[15px] leading-7 text-text-sub">{faq.a}</p>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
