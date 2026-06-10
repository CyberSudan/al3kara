export default function NewsPage() {
  const news = [
    {
      title: "إطلاق منصة العيكورة الرقمية",
      description: "تم إطلاق الموقع الرسمي لتوثيق تاريخ وأخبار العيكورة.",
      date: "2026-01",
    },
    {
      title: "مبادرة توثيق الرواد",
      description: "بدء مشروع توثيق رواد العيكورة في المجالات المختلفة.",
      date: "2026-01",
    },
    {
      title: "تحديث صحيفة العيكورة",
      description: "إضافة أرشيف جديد للأعداد السابقة من الصحيفة الإلكترونية.",
      date: "2026-01",
    },
    {
      title: "إنطلاقة دورة الشهيد العقيد هيثم التاي الرياضية",
      date: "2026-05-30",
      description: `
دورة الشهيد العقيد ركن هيثم خضر محمد أحمد التاي

في حضرة الشهداء... تصمت الكلمات احتراماً.

انطلقت دورة الشهيد بملعب نادي النهضة الرياضي بالعيكورة،
تكريماً لروح شهيد جسّد الشجاعة والتضحية والوفاء.

شارك في الدورة عدد من الفرق الرياضية:
- الزعيم بقيادة صلاح يوسف
- القوة الجوالة بقيادة مؤمن جمال
- الجلاكين بقيادة عصمت أبو الروس
- فريق الافريقي بقيادة ربيع من السيد
- الأكاديمية بقيادة بليغ
- فريق الكمبو

وتأهلت أربعة فرق للمرحلة التالية بنظام خروج المغلوب،
على أن يُقام النهائي في 12 يونيو 2026م.

وسط حضور جماهيري كبير من أبناء القرية،
في أجواء رياضية أعادت النشاط بعد فترة توقف طويلة.
      `.trim(),
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50">

      {/* Header */}
      <section className="bg-green-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">الأخبار</h1>
          <p className="text-yellow-400 text-lg">
            آخر أخبار ومبادرات مجتمع العيكورة
          </p>
        </div>
      </section>

      {/* News */}
      <section className="max-w-6xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">

          {news.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition"
            >
              <div className="text-sm text-gray-500 mb-2">
                {item.date}
              </div>

              <h2 className="text-xl font-bold text-green-900 mb-3">
                {item.title}
              </h2>

              <p className="text-gray-700 whitespace-pre-line leading-8">
                {item.description}
              </p>

              <button className="mt-4 text-yellow-600 font-bold hover:underline">
                اقرأ المزيد
              </button>
            </div>
          ))}

        </div>

      </section>

    </main>
  );
}
