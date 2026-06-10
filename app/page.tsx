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
            بوابة العيكورة الرقمية للتواصل والتوثيق والتنمية
          </p>

          <div className="mt-10 flex justify-center gap-4 flex-wrap">

            <a
              href="/pioneers"
              className="bg-yellow-500 text-black px-6 py-3 rounded-xl hover:bg-yellow-400 transition"
            >
              استكشف القرية
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

      {/* About Section */}
      <section className="max-w-6xl mx-auto py-20 px-6">

        <h2 className="text-4xl font-bold mb-6 text-green-900">
          نبذة عن العيكورة
        </h2>

        <p className="text-lg leading-9 text-gray-700">
          تقع العيكورة على الضفة الغربية للنيل الأزرق بولاية الجزيرة،
          وتمثل إحدى المناطق ذات الامتداد التاريخي والاجتماعي العريق،
          كما ارتبطت عبر تاريخها بالزراعة ومشروع الجزيرة والتعليم.
        </p>

      </section>

      {/* Navigation Sections */}
      <section className="max-w-6xl mx-auto px-6 pb-24">

        <h2 className="text-4xl font-bold text-green-900 text-center mb-12">
          أقسام الموقع
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <a href="/pioneers" className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-green-900 mb-2">
              رواد العيكورة
            </h3>
            <p className="text-gray-600">
              توثيق الشخصيات المؤثرة في تاريخ القرية.
            </p>
          </a>

          <a href="/newspaper" className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-green-900 mb-2">
              صحيفة العيكورة
            </h3>
            <p className="text-gray-600">
              أرشيف الأخبار والإصدارات الإلكترونية.
            </p>
          </a>

          <a href="/gallery" className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-green-900 mb-2">
              معرض الصور
            </h3>
            <p className="text-gray-600">
              صور توثق تاريخ ومناسبات العيكورة.
            </p>
          </a>

          <a href="/history" className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-green-900 mb-2">
              تاريخ العيكورة
            </h3>
            <p className="text-gray-600">
              لمحة عن تاريخ المنطقة وجذورها.
            </p>
          </a>

          <a href="/people" className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-green-900 mb-2">
              أبناء العيكورة
            </h3>
            <p className="text-gray-600">
              أبناء القرية داخل وخارج السودان.
            </p>
          </a>

          <a href="/contact" className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-green-900 mb-2">
              تواصل معنا
            </h3>
            <p className="text-gray-600">
              شاركنا بالمعلومات أو الملاحظات.
            </p>
          </a>

        </div>

      </section>

    </main>
  );
}
