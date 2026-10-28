import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-white/5 mt-20">
      <div className="mx-auto max-w-5xl px-5 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-ink-muted">
        <div className="flex items-center gap-2">
          <Logo className="h-6 w-6" />
          <span className="font-bold text-ink">بيناتكم</span>
        </div>
        <nav className="flex items-center gap-5">
          <Link href="/privacy" className="hover:text-ink transition-colors">
            سياسة الخصوصية
          </Link>
          <Link href="/challenge/create" className="hover:text-ink transition-colors">
            سوّي تحدّيك
          </Link>
        </nav>
        <p>© {new Date().getFullYear()} بيناتكم</p>
      </div>
    </footer>
  );
}
