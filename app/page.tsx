import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main>

      <Navbar />

      <section className="bg-green-900 text-white py-28 text-center">
        <div className="max-w-5xl mx-auto px-6">

          <h1 className="text-6xl font-bold mb-6">
            العيكورة
          </h1>

          <p className="text-xl text-yellow-400">
            بوابة العيكورة الرقمية للتواصل والتوثيق والتنمية
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <button className="bg-yellow-500 text-black px-6 py-3 rounded-xl font-bold">
              استكشف القرية
            </button>

            <button className="border border-white px-6 py-3 rounded-xl">
              آخر الأخبار
            </button>
          </div>

        </div>
      </section>

      <section className="max-w-6xl mx-auto py-20 px-6">

        <h2 className="text-4xl font-bold mb-6 text-green-900">
          نبذة عن العيكورة
        </h2>

        <p className="text-lg leading-9">
          تقع العيكورة على الضفة الغربية للنيل الأزرق بولاية الجزيرة،
          وتمثل إحدى المناطق ذات الامتداد التاريخي والاجتماعي العريق،
          كما ارتبطت عبر تاريخها بالزراعة ومشروع الجزيرة والتعليم
          والهجرة والعمل العام.
        </p>

      </section>

      <section className="bg-white py-16">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-12 text-green-900">
            أقسام الموقع
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            <div className="p-6 rounded-2xl shadow bg-gray-50">
              <h3 className="font-bold mb-3">التاريخ</h3>
              <p>توثيق تاريخ العيكورة عبر الأجيال.</p>
            </div>

            <div className="p-6 rounded-2xl shadow bg-gray-50">
              <h3 className="font-bold mb-3">التعليم</h3>
              <p>المدارس والخريجون والإنجازات العلمية.</p>
            </div>

            <div className="p-6 rounded-2xl shadow bg-gray-50">
              <h3 className="font-bold mb-3">الزراعة</h3>
              <p>مشروع الجزيرة والمحاصيل الزراعية.</p>
            </div>

            <div className="p-6 rounded-2xl shadow bg-gray-50">
              <h3 className="font-bold mb-3">المجتمع</h3>
              <p>المبادرات والخدمات والمناسبات.</p>
            </div>

          </div>

        </div>

      </section>

      <footer className="bg-green-950 text-white py-10 text-center mt-20">
        <p>© جميع الحقوق محفوظة - العيكورة 2026</p>
      </footer>

    </main>
  );
}
