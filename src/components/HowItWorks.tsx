const steps = [
  {
    n: "1",
    title: "سوّي تحدّيك",
    desc: "اختار اسمك المستعار وجاوب على أسئلة تخص عاداتك وتفضيلاتك.",
  },
  {
    n: "2",
    title: "دزّ الرابط",
    desc: "شارك رابط تحدّيك مع جماعتك بواتساب أو انستا أو تيك توك.",
  },
  {
    n: "3",
    title: "شوف منو يعرفك",
    desc: "أصدقاؤك يحاولون يتوقعون إجاباتك، وتطلع النتيجة بالحظة.",
  },
];

export function HowItWorks() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-16">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-center mb-10">
        شلون تلعب؟
      </h2>
      <div className="grid gap-6 sm:grid-cols-3">
        {steps.map((s) => (
          <div
            key={s.n}
            className="rounded-xl2 bg-bg-surface border border-white/5 p-6 shadow-card hover:border-primary/40 transition-colors"
          >
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center font-extrabold text-bg mb-4">
              {s.n}
            </div>
            <h3 className="font-bold text-lg mb-2">{s.title}</h3>
            <p className="text-ink-muted text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
