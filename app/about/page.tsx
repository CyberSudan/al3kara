export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* Hero */}
      <section className="bg-green-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">
            عن العيكورة
          </h1>

          <p className="text-yellow-400 text-lg">
            نبذة عن التاريخ والموقع والجغرافيا والمجتمع
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-green-900 mb-6">
            نبذة عامة
          </h2>

          <p className="leading-9 text-lg">
            العيكورة مدينة سودانية تقع على الضفة الغربية للنيل الأزرق
            بولاية الجزيرة، وتتميز بتاريخها العريق وموقعها الزراعي
            المميز، كما ترتبط ارتباطًا وثيقًا بمشروع الجزيرة الذي شكل
            جزءًا مهمًا من حياة سكانها واقتصادها عبر الأجيال.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-green-900 mb-4">
              📍 الموقع
            </h3>

            <p>
              تقع على الضفة الغربية للنيل الأزرق وتتبع ولاية الجزيرة.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-green-900 mb-4">
              📜 التاريخ
            </h3>

            <p>
              تمتلك إرثًا تاريخيًا واجتماعيًا غنيًا تناقلته الأجيال.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-green-900 mb-4">
              🌾 الزراعة
            </h3>

            <p>
              ارتبطت بمشروع الجزيرة واعتمد سكانها على الزراعة لعقود.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-green-900 mb-4">
              🎓 التعليم
            </h3>

            <p>
              ساهم أبناء العيكورة في مختلف المجالات العلمية والأكاديمية.
            </p>
          </div>

        </div>
      </section>

      {/* Mosques */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="bg-white rounded-2xl shadow-lg p-8">

          <h2 className="text-3xl font-bold text-green-900 mb-6">
            🕌 المساجد والخلاوي
          </h2>

          <ul className="space-y-3 text-lg">
            <li>المسجد العتيق (الكبير)</li>
            <li>المسجد الغربي</li>
            <li>مسجد القوز</li>
            <li>مسجد اللواء الدكتور عصام صديق</li>
            <li>مسجد سليمان بندقجي</li>
          </ul>

        </div>
      </section>

      {/* Statistics */}
      <section className="bg-green-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-10">
            معلومات سريعة
          </h2>

          <div className="grid md:grid-cols-4 gap-6 text-center">

            <div>
              <h3 className="text-4xl font-bold text-yellow-400">
                النيل الأزرق
              </h3>
              <p>الموقع الشرقي</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-yellow-400">
                الجزيرة
              </h3>
              <p>الولاية</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-yellow-400">
                الزراعة
              </h3>
              <p>النشاط الرئيسي</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-yellow-400">
                التعليم
              </h3>
              <p>إرث علمي متميز</p>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}
