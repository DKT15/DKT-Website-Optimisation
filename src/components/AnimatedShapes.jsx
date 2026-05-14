import "../styles/AnimatedShapes.css";

// Code for animated shapes.
export default function AnimatedShapes({ density = "normal" }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -left-24 top-32 h-80 w-80 rounded-full bg-[#00bf63]/8 blur-3xl" />

      <div className="absolute -bottom-28 right-20 h-72 w-72 rounded-full bg-[#00bf63]/12 blur-3xl" />

      <div className="absolute left-[48%] top-0 h-[620px] w-[1px] -rotate-12 bg-[#00bf63]/18" />

      <div className="absolute left-[48%] top-28 h-72 w-56 rounded-full border border-[#00bf63]/20 border-l-transparent border-b-transparent" />

      <div className="absolute right-[28%] top-24 grid grid-cols-9 gap-3 opacity-18">
        {Array.from({ length: density === "low" ? 36 : 81 }).map((_, i) => (
          <span key={i} className="h-1 w-1 rounded-full bg-[#00bf63]" />
        ))}
      </div>

      <div className="animate-float-slow absolute right-[14%] top-20 h-40 w-40 rounded-full bg-[#00bf63]/18 blur-sm" />

      <div className="animate-float-medium absolute right-[36%] top-48 h-20 w-20 rounded-full border border-[#00bf63]/45 bg-white/30" />

      <div className="animate-float-slow absolute bottom-32 right-[8%] h-24 w-24 rounded-full bg-[#00bf63]/12 blur-sm" />

      <div className="animate-float-medium absolute bottom-40 left-[40%] h-14 w-14 rounded-full bg-[#00bf63]/24 blur-[1px]" />
    </div>
  );
}
