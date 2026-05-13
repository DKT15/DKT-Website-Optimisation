// Styling for the headers needed for each section.

export default function SectionHeader({
  eyebrow,
  title,
  text,
  centered = false,
}) {
  return (
    <div className={`mb-10 max-w-3xl ${centered ? "mx-auto text-center" : ""}`}>
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#00bf63]">
        {eyebrow}
      </p>
      <h2 className="text-4xl font-black tracking-[-0.04em] text-slate-950 md:text-5xl">
        {title}
      </h2>
      {text && <p className="mt-5 text-lg leading-8 text-slate-600">{text}</p>}
    </div>
  );
}
