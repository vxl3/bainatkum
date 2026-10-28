"use client";

import { Button, LinkButton } from "@/components/Button";
import { Logo } from "@/components/Logo";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="min-h-dvh flex flex-col items-center justify-center px-5 text-center gap-6">
      <Logo className="h-14 w-14 opacity-80" />
      <div>
        <h1 className="text-2xl font-extrabold mb-2">صار خطأ غير متوقع</h1>
        <p className="text-ink-muted">
          عذراً، شي ما مشى زين. جرّب مرة ثانية أو ارجع للصفحة الرئيسية.
        </p>
      </div>
      <div className="flex gap-4">
        <Button onClick={() => reset()}>حاول مرة ثانية</Button>
        <LinkButton href="/" variant="secondary">
          الرئيسية
        </LinkButton>
      </div>
    </main>
  );
}
