import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Logo } from "@/components/Logo";

export default function PrivacyPage() {
  return (
    <main>
      <header className="mx-auto max-w-3xl px-5 pt-6">
        <Link href="/" className="inline-flex items-center gap-2">
          <Logo className="h-7 w-7" />
          <span className="font-extrabold">بيناتكم</span>
        </Link>
      </header>

      <section className="mx-auto max-w-3xl px-5 py-12">
        <h1 className="text-2xl sm:text-3xl font-extrabold mb-8">
          سياسة الخصوصية
        </h1>

        <div className="space-y-6 text-ink/90 leading-loose text-sm sm:text-base">
          <p>
            «بيناتكم» لعبة بسيطة مصممة بأقل قدر ممكن من جمع البيانات. ما
            نطلب منك تسجيل دخول، ولا رقم هاتف، ولا بريد إلكتروني.
          </p>

          <div>
            <h2 className="font-bold text-lg mb-2 text-ink">شنو نخزن؟</h2>
            <ul className="list-disc pr-5 space-y-1 text-ink-muted">
              <li>الاسم المستعار اللي تختاره (اختياري).</li>
              <li>الأسئلة اللي تختارها والإجابات الصحيحة الخاصة بتحدّيك.</li>
              <li>إجابات أصدقائك اللي يحاولون يخمنون تحدّيك، ونتيجتهم.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-lg mb-2 text-ink">شنو ما نجمع؟</h2>
            <ul className="list-disc pr-5 space-y-1 text-ink-muted">
              <li>ما نجمع موقعك الجغرافي.</li>
              <li>ما نجمع جهات اتصالك.</li>
              <li>ما نطلب معلومات صحية أو مالية أو كلمات مرور.</li>
              <li>ما نستخدم عدادات أو إحصائيات وهمية لخداعك.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-lg mb-2 text-ink">
              مدة الاحتفاظ بالبيانات
            </h2>
            <p className="text-ink-muted">
              التحديات تنتهي صلاحيتها تلقائياً بعد فترة محددة، وتُحذف
              البيانات القديمة بشكل دوري من قاعدة البيانات.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-lg mb-2 text-ink">تنبيه مهم</h2>
            <p className="text-ink-muted">
              اللعبة مصممة للمرح بين الأصدقاء فقط. الرجاء عدم كتابة أي
              معلومات حساسة أو خاصة داخل الأسئلة أو الإجابات.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
