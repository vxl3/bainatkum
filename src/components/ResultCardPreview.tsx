import { Logo } from "./Logo";

export function ResultCardPreview() {
  return (
    <div className="relative mx-auto w-[220px] sm:w-[260px] aspect-[9/16] rounded-3xl bg-gradient-to-br from-bg-surface via-bg-surface to-primary/20 border border-white/10 shadow-glow overflow-hidden animate-float">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.35),transparent_60%)]" />
      <div className="relative h-full flex flex-col items-center justify-between p-5 text-center">
        <div className="flex items-center gap-1.5">
          <Logo className="h-5 w-5" />
          <span className="font-extrabold text-sm">بيناتكم</span>
        </div>

        <div>
          <p className="text-ink-muted text-xs mb-2">تحدّي "أحمد"</p>
          <div className="text-5xl font-extrabold bg-gradient-to-l from-primary to-accent bg-clip-text text-transparent">
            4/5
          </div>
          <p className="mt-2 text-sm">عاشت، تعرفه زين 😎</p>
        </div>

        <p className="text-[10px] text-ink-muted">جرّب تعرف صديقك — بيناتكم</p>
      </div>
    </div>
  );
}
