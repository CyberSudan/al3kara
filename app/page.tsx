import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">

      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-green-950 via-green-900 to-green-800 text-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-yellow-300">
            العيكورة
          </h1>

          <p className="text-yellow-200 text-lg md:text-xl max-w-2xl mx-auto">
            بوابة رقمية للتوثيق، التواصل، وحفظ الذاكرة المجتمعية
          </p>

        </div>
      </section>

      {/* Introduction */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8">

          <h2 className="text-3xl font-bold text-yellow-600 mb-6 border-r-4 border-yellow-500 pr-4">
            نبذة عن الموقع
          </h2>

          <p className="leading-10 text-lg text-gray-700">
            موقع العيكورة هو منصة رقمية تهدف إلى توثيق تاريخ القرية
            ومجتمعها، وربط أبنائها داخل السودان وخارجه، عبر محتوى
            يشمل الأخبار، الرواد، الصور، والإصدارات الإلكترونية.
          </p>

        </div>
      </section>

      {/* Cards */}
      <section className="max-w-6xl mx-auto px-6 pb-20">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          <a href="/pioneers" className="bg-white rounded-2xl shadow p-6 hover:shadow-2xl hover:-translate-y-1 transition border-t-4 border-yellow-500">
            <h3 className="text-2xl font-bold text-green-900 mb-3">
              الرواد
            </h3>
            <p className="text-gray-600">
              توثيق الشخصيات المؤثرة في تاريخ العيكورة.
            </p>
          </a>

          <a href="/newspaper" className="bg-white rounded-2xl shadow p-6 hover:shadow-2xl hover:-translate-y-1 transition border-t-4 border-yellow-500">
            <h3 className="text-2xl font-bold text-green-900 mb-3">
              الصحيفة
            </h3>
            <p className="text-gray-600">
              أرشيف صحيفة العيكورة والإصدارات الإلكترونية.
            </p>
          </a>

          <a href="/gallery" className="bg-white rounded-2xl shadow p-6 hover:shadow-2xl hover:-translate-y-1 transition border-t-4 border-yellow-500">
            <h3 className="text-2xl font-bold text-green-900 mb-3">
              المعرض
            </h3>
            <p className="text-gray-600">
              صور توثق تاريخ ومناسبات العيكورة.
            </p>
          </a>

          <a href="/history" className="bg-white rounded-2xl shadow p-6 hover:shadow-2xl hover:-translate-y-1 transition border-t-4 border-yellow-500">
            <h3 className="text-2xl font-bold text-green-900 mb-3">
              التاريخ
            </h3>
            <p className="text-gray-600">
              لمحة عن تاريخ العيكورة وجذورها.
            </p>
          </a>

        </div>

      </section>

      {/* Footer */}
      <footer className="bg-green-950 text-white py-10 mt-10">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <p className="text-yellow-300 font-semibold text-lg">
            جميع الحقوق محفوظة © العيكورة
          </p>

          <p className="text-gray-300 text-sm mt-2">
            منصة العيكورة الرقمية للتوثيق والتواصل
          </p>

        </div>
      </footer>

    </main>
  );
}
