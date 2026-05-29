type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

export function SectionHeading({ eyebrow, title, description, align = "center", tone = "light" }: Props) {
  const titleClass = tone === "dark" ? "text-white" : "text-text-dark";
  const descriptionClass = tone === "dark" ? "text-white/72" : "text-text-sub";

  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      {eyebrow ? (
        <p className="mb-4 text-[15px] font-bold text-accent-yellow">{eyebrow}</p>
      ) : null}
      <h2 className={`text-[32px] font-bold leading-[1.25] md:text-[40px] ${titleClass}`}>{title}</h2>
      {description ? (
        <p className={`mt-5 text-base leading-8 md:text-lg ${descriptionClass}`}>{description}</p>
      ) : null}
    </div>
  );
}
