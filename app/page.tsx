
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-green-700 text-white py-20 text-center">
        <h1 className="text-5xl font-bold">العيكورة</h1>

        <p className="mt-4 text-xl">
          منصة أبناء العيكورة للتواصل والتنمية والتوثيق
        </p>
      </section>

      {/* About Section */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6">
          مرحباً بكم في العيكورة
        </h2>

        <p className="text-lg leading-8">
          العيكورة منصة رقمية تهدف إلى توثيق تاريخ القرية،
          ونشر الأخبار والمبادرات التنموية، وربط أبناء
          العيكورة داخل السودان وخارجه.
        </p>
      </section>

      {/* News Section */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">
            آخر الأخبار
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-100 p-6 rounded-xl shadow">
              <h3 className="font-bold text-lg">
                خبر تجريبي
              </h3>

              <p className="mt-3">
                سيتم عرض أخبار القرية هنا.
              </p>
            </div>

            <div className="bg-gray-100 p-6 rounded-xl shadow">
              <h3 className="font-bold text-lg">
                مبادرة تنموية
              </h3>

              <p className="mt-3">
                متابعة المشاريع والمبادرات المجتمعية.
              </p>
            </div>

            <div className="bg-gray-100 p-6 rounded-xl shadow">
              <h3 className="font-bold text-lg">
                إعلان
              </h3>

              <p className="mt-3">
                إعلانات المناسبات والفعاليات.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white text-center py-6">
        <p>
          © 2026 العيكورة - جميع الحقوق محفوظة
        </p>
      </footer>
    </main>
  );
}
