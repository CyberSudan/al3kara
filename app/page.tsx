import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main className="bg-slate-50">

      <Navbar />

      {/* HERO */}
      <section className="relative bg-gradient-to-br from-green-950 via-green-900 to-green-800 text-white py-32 text-center overflow-hidden">

        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.2),transparent)]"></div>

        <div className="max-w-5xl mx-auto px-6 relative z-10">

          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            العيكورة
          </h1>

          <p className="text-xl md:text-2xl text-yellow-300">
            بوابة العيكورة الرقمية للتواصل والتوثيق والتنمية
          </p>

          <div className="mt-10 flex justify-center gap-4 flex-wrap">

            <a
              href="/pioneers"
              className="bg-yellow-500 text-black px-6 py-3 rounded-xl hover:bg-yellow-400 transition font-bold"
            >
              استكشف التاريخ
            </a>

            <a
              href="/news"
              className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-green-900 transition"
            >
              آخر الأخبار
            </a>

          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section className="max-w-6xl mx-auto py-24 px-6 text-center">

        <h2 className="text-4xl font-bold text-green-900 mb-6">
          نبذة عن العيكورة
        </h2>

        <p className="text-lg leading-10 text-gray-700 max-w-3xl mx-auto">
          تقع العيكورة على الضفة الغربية للنيل الأزرق بولاية الجزيرة،
          وتمثل إحدى المناطق ذات الامتداد التاريخي والاجتماعي العريق،
          كما ارتبطت عبر تاريخها بالزراعة ومشروع الجزيرة والتعليم،
          وتعد اليوم من المناطق التي تشهد تطوراً في التوثيق الرقمي
          وحفظ الذاكرة المجتمعية.
        </p>

      </section>

      {/* FEATURES */}
      <section className="max-w-6xl mx-auto px-6 pb-24 grid md:grid-cols-3 gap-6">

        <div className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition">
          <h3 className="text-xl font-bold text-green-900 mb-2">
            رواد العيكورة
          </h3>
          <p className="text-gray-600">
            توثيق الشخصيات التي ساهمت في بناء المجتمع المحلي.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition">
          <h3 className="text-xl font-bold text-green-900 mb-2">
            صحيفة العيكورة
          </h3>
          <p className="text-gray-600">
            أرشيف الأخبار والإصدارات الإلكترونية.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition">
          <h3 className="text-xl font-bold text-green-900 mb-2">
            معرض الصور
          </h3>
          <p className="text-gray-600">
            توثيق بصري لتاريخ وأحداث العيكورة.
          </p>
        </div>

      </section>

    </main>
  );
}
