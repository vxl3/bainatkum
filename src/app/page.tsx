import { LinkButton } from "@/components/Button";
import { Logo } from "@/components/Logo";
import { HowItWorks } from "@/components/HowItWorks";
import { SampleQuestions } from "@/components/SampleQuestions";
import { ResultCardPreview } from "@/components/ResultCardPreview";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      <header className="mx-auto max-w-5xl px-5 pt-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Logo className="h-8 w-8" />
          <span className="font-extrabold text-lg">بيناتكم</span>
        </div>
        <LinkButton
          href="/challenge/create"
          variant="secondary"
          className="!px-4 !py-2 text-sm"
        >
          سوّي تحدّيك
        </LinkButton>
      </header>

      <section className="mx-auto max-w-5xl px-5 pt-14 pb-10 grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="text-center lg:text-right animate-fade-in">
          <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight mb-4">
            مو كل صديق <br className="hidden sm:block" />
            <span className="bg-gradient-to-l from-primary to-accent bg-clip-text text-transparent">
              يعرفك صدگ 👀
            </span>
          </h1>
          <p className="text-ink-muted text-base sm:text-lg mb-8 max-w-md mx-auto lg:mx-0">
            سوّي تحدّيك، دزّه لجماعتك، وشوف منو يعرفك أكثر 😂
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <LinkButton href="/challenge/create" className="w-full sm:w-auto">
              سوّي تحدّيك الحين 🚀
            </LinkButton>
          </div>
        </div>

        <ResultCardPreview />
      </section>

      <HowItWorks />
      <SampleQuestions />

      <section className="mx-auto max-w-3xl px-5 py-16 text-center">
        <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">
          جاهز تشوف منو يعرفك أكثر؟
        </h2>
        <p className="text-ink-muted mb-8">
          دگيقتين بس وتحدّيك جاهز للمشاركة
        </p>
        <LinkButton href="/challenge/create">سوّي تحدّيك 🔥</LinkButton>
      </section>

      <Footer />
    </main>
  );
}
