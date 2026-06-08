export default function HistoryPage() {
  return (
    <main className="min-h-screen bg-slate-50">

      <section className="bg-green-900 text-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">
            تاريخ العيكورة
          </h1>

          <p className="text-yellow-400 text-lg">
            رحلة عبر تاريخ العيكورة وموقعها وتراثها الاجتماعي
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16">

        <div className="bg-white p-8 rounded-2xl shadow">

          <h2 className="text-3xl font-bold text-green-900 mb-6">
            نبذة تاريخية
          </h2>

          <p className="leading-9 mb-6">
            تذكر بعض المصادر المحلية أن العيكورة كانت تُعرف قديمًا
            باسم "مورد المسلمية"، نسبةً إلى اعتماد سكان المنطقة
            على مياه النيل الأزرق، حيث كانت تمثل موردًا مهمًا
            للمياه للسكان والقرى المجاورة.
          </p>

          <p className="leading-9 mb-6">
            تقع العيكورة على الضفة الغربية للنيل الأزرق بولاية
            الجزيرة، جنوب الخرطوم، وتميز موقعها بقربه من الأراضي
            الزراعية ومشروع الجزيرة، مما جعل الزراعة تمثل النشاط
            الاقتصادي الرئيسي لسكانها عبر عقود طويلة.
          </p>

          <p className="leading-9">
            شهدت المنطقة مراحل تاريخية متعددة، وتناقلت الأجيال
            روايات محلية حول ارتباطها بممالك السودان القديمة
            وحركات الهجرة والاستقرار التي ساهمت في تشكيل مجتمعها
            الحالي.
          </p>

        </div>

      </section>

      <section className="max-w-5xl mx-auto px-6 pb-16">

        <div className="bg-white p-8 rounded-2xl shadow">

          <h2 className="text-3xl font-bold text-green-900 mb-6">
            الموقع الجغرافي
          </h2>

          <ul className="space-y-4">
            <li>📍 تقع على الضفة الغربية للنيل الأزرق.</li>
            <li>📍 تتبع ولاية الجزيرة.</li>
            <li>📍 تحدها قرى ومناطق زراعية مرتبطة بمشروع الجزيرة.</li>
            <li>📍 تتميز بموقع استراتيجي بين النيل والأراضي الزراعية.</li>
          </ul>

        </div>

      </section>

      <section className="max-w-5xl mx-auto px-6 pb-16">

        <div className="bg-white p-8 rounded-2xl shadow">

          <h2 className="text-3xl font-bold text-green-900 mb-6">
            التعليم والزراعة
          </h2>

          <p className="leading-9 mb-6">
            عُرفت العيكورة باهتمامها بالتعليم، وأسهم أبناؤها في
            مختلف المجالات العلمية والأكاديمية والمهنية داخل
            السودان وخارجه.
          </p>

          <p className="leading-9">
            كما ظلت الزراعة العمود الفقري لاقتصاد المنطقة،
            مستفيدة من قربها من مشروع الجزيرة والأراضي الخصبة
            المحيطة بها.
          </p>

        </div>

      </section>

    </main>
  );
}
