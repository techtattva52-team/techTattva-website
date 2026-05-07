export default function GlassCard({ children, className = "" }) {
  return (
    <div
      className={`
        bg-white/5
        backdrop-blur-xl
        border border-white/10
        rounded-3xl
        transition-all
        hover:border-blue-500/40
        hover:-translate-y-2
        ${className}
      `}
    >
      {children}
    </div>
  );
}
