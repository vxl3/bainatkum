const samples = [
  "شلون يشرب جايه، حلو لو بدون سكر؟",
  "شنو الأكلة اللي ما يمل منها أبداً؟",
  "يفضّل يسهر لو ينام بدري؟",
  "منو أكثر شخص يناديه بالتلفون؟",
  "شنو أكثر تطبيق يقضي بيه وكته؟",
  "يحب الطلعات لو يفضّل يقعد البيت؟",
];

export function SampleQuestions() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-16">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-center mb-3">
        شوف نوعية الأسئلة 😏
      </h2>
      <p className="text-center text-ink-muted mb-10">
        أسئلة خفيفة وحلوة، تضحك وما تحرج
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        {samples.map((q, i) => (
          <div
            key={i}
            className="rounded-xl2 bg-bg-surface border border-white/5 p-5 text-ink/90 animate-fade-in"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <span className="text-accent font-bold ml-2">؟</span>
            {q}
          </div>
        ))}
      </div>
    </section>
  );
}
