import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main className="bg-slate-50">

      <Navbar />

      {/* Hero Section */}
      <section className="bg-green-900 text-white py-28 text-center">
        <div className="max-w-5xl mx-auto px-6">

          <h1 className="text-6xl font-bold mb-6">
            العيكورة
          </h1>

          <p className="text-xl text-yellow-400">
            بوابة العيكورة الرقمية للتوثيق، التواصل، والتنمية
          </p>

          <div className="mt-10 flex justify-center gap-4 flex-wrap">

            <button className="bg-yellow-500 text-black px-6 py-3 rounded-xl hover:bg-yellow-400 transition">
              استكشف القرية
            </button>

            <a
              href="/news"
              className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-green-900 transition"
            >
              آخر الأخبار
            </a>

          </div>

        </div>
      </section>

      {/* About Section */}
      <section className="max-w-6xl mx-auto py-20 px-6">

        <h2 className="text-4xl font-bold mb-6 text-green-900">
          نبذة عن العيكورة
        </h2>

        <p className="text-lg leading-10 text-gray-700">
          تقع العيكورة على الضفة الغربية للنيل الأزرق بولاية الجزيرة،
          وتمثل إحدى المناطق ذات الامتداد التاريخي والاجتماعي العريق،
          كما ارتبطت عبر تاريخها بالزراعة ومشروع الجزيرة والتعليم،
          وتعد اليوم من القرى التي تشهد تطوراً في التوثيق الرقمي
          وحفظ الذاكرة المجتمعية عبر الإنترنت.
        </p>

      </section>

      {/* Quick Links */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">

          <a href="/pioneers" className="bg-slate-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-green-900 mb-2">رواد العيكورة</h3>
            <p className="text-gray-600">توثيق الشخصيات المؤثرة في تاريخ القرية.</p>
          </a>

          <a href="/newspaper" className="bg-slate-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-green-900 mb-2">صحيفة العيكورة</h3>
            <p className="text-gray-600">أرشيف الأخبار والإصدارات الإلكترونية.</p>
          </a>

          <a href="/gallery" className="bg-slate-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-green-900 mb-2">معرض الصور</h3>
            <p className="text-gray-600">صور توثق تاريخ ومجتمع العيكورة.</p>
          </a>

        </div>
      </section>

    </main>
  );
}
