// Button styling.

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-[#00bf63]/40";
  const styles =
    variant === "primary"
      ? "bg-[#00bf63] text-slate-950 hover:bg-[#18d875] shadow-lg shadow-[#00bf63]/20"
      : "border border-slate-300 bg-white/70 text-slate-900 backdrop-blur-xl hover:border-[#00bf63] hover:text-[#00bf63]";

  if (onClick) {
    return (
      <button onClick={onClick} className={`${base} ${styles} ${className}`}>
        {children}
      </button>
    );
  }

  return (
    <a href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </a>
  );
}
