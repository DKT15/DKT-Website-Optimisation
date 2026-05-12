import { motion } from "framer-motion";

export default function AnimatedShapes({ density = "normal" }) {
  const circles = [
    {
      className: "right-[14%] top-20 h-40 w-40 bg-[#00bf63]/18 blur-sm",
      animate: { y: [0, -18, 0], x: [0, 10, 0], scale: [1, 1.04, 1] },
      duration: 14,
    },
    {
      className:
        "right-[36%] top-48 h-20 w-20 border border-[#00bf63]/45 bg-white/30",
      animate: { y: [0, 14, 0], x: [0, -8, 0], scale: [1, 0.97, 1] },
      duration: 12,
    },
    {
      className: "right-[8%] bottom-32 h-24 w-24 bg-[#00bf63]/12 blur-sm",
      animate: { y: [0, -12, 0], x: [0, -10, 0], scale: [1, 1.06, 1] },
      duration: 16,
    },
    {
      className: "left-[40%] bottom-40 h-14 w-14 bg-[#00bf63]/24 blur-[1px]",
      animate: { y: [0, 16, 0], x: [0, 8, 0], scale: [1, 1.08, 1] },
      duration: 13,
    },
    {
      className:
        "right-[24%] top-[45%] h-12 w-12 border border-[#00bf63]/50 bg-white/20",
      animate: { y: [0, -10, 0], x: [0, 7, 0], scale: [1, 1.03, 1] },
      duration: 10,
    },
  ];

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
      {circles.map((circle, index) => (
        <motion.div
          key={index}
          animate={circle.animate}
          transition={{
            duration: circle.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`absolute rounded-full ${circle.className}`}
        />
      ))}
    </div>
  );
}
