import { LinkButton } from "@/components/Button";
import { Logo } from "@/components/Logo";

export default function NotFound() {
  return (
    <main className="min-h-dvh flex flex-col items-center justify-center px-5 text-center gap-6">
      <Logo className="h-14 w-14 opacity-80" />
      <div>
        <h1 className="text-3xl font-extrabold mb-2">404</h1>
        <p className="text-ink-muted">
          الصفحة اللي تدوّرها مو موجودة، يمكن انحذفت أو الرابط غلط.
        </p>
      </div>
      <LinkButton href="/">ارجع للصفحة الرئيسية</LinkButton>
    </main>
  );
}
