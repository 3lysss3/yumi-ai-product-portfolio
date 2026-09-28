type SectionHeadingProps = {
  kicker: string;
  title: string;
  subtitle?: string;
};

export default function SectionHeading({ kicker, title, subtitle }: SectionHeadingProps) {
  return (
    <div>
      <p className="section-kicker">{kicker}</p>
      <h2 className="section-title">{title}</h2>
      {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
    </div>
  );
}
