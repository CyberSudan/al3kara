export default function NewspaperPage() {
  const issues = [
    {
      number: "004",
      title: "صحيفة العيكورة - العدد الرابع",
      description: "أخبار وأنشطة ومبادرات مجتمع العيكورة.",
      file: "/newspaper/issue-004.pdf",
    },
    {
      number: "002",
      title: "صحيفة العيكورة - العدد الثاني",
      description: "متابعة أخبار المجتمع والمبادرات.",
      file: "/newspaper/issue-002.pdf",
    },
    {
      number: "003",
      title: "صحيفة العيكورة - العدد الثالث",
      description: "فعاليات وأخبار محلية متنوعة.",
      file: "/newspaper/issue-003.pdf",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50">

      {/* Hero */}
      <section className="bg-gradient-to-br from-green-950 via-green-900 to-green-800 text-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-yellow-300">
            صحيفة العيكورة
          </h1>

          <p className="text-yellow-200 text-lg md:text-xl">
            أرشيف الإصدارات الإلكترونية وتوثيق أخبار المجتمع
          </p>

        </div>
      </section>

      {/* Editorial Team */}
      <section className="max-w-6xl mx-auto px-6 py-16">

        <div className="bg-white rounded-2xl shadow-lg p-8">

          <h2 className="text-3xl font-bold text-yellow-600 mb-6 border-r-4 border-yellow-500 pr-4">
            هيئة التحرير
          </h2>

          <div className="space-y-6 text-lg text-gray-700">

            <div>
              <h3 className="font-bold text-green-900">رئيس التحرير</h3>
              <p>م. الطيب عبد الله الطيب البشير</p>
            </div>

            <div>
              <h3 className="font-bold text-green-900">سكرتير التحرير</h3>
              <p>أماني الأمين محمد سعيد</p>
            </div>

            <div>
              <h3 className="font-bold text-green-900">مستشارو التحرير</h3>
              <ul className="list-disc pr-6 mt-2 space-y-1">
                <li>أ. مالك محمد طه</li>
                <li>صبري محمد علي</li>
                <li>أ. عمر عبد الرزاق يوسف</li>
                <li>أ. أبو بكر عبد الله الطيب</li>
              </ul>
            </div>

          </div>

          <p className="mt-6 text-gray-700 border-t pt-4">
            إصدارة إلكترونية شهرية برعاية جمعية إبراهيم عبد السلام الخيرية بالعيكورة.
          </p>

        </div>

      </section>

      {/* Issues */}
      <section className="max-w-6xl mx-auto px-6 pb-20">

        <h2 className="text-3xl font-bold text-yellow-600 mb-8 border-r-4 border-yellow-500 pr-4">
          الأعداد المتوفرة
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {issues.map((issue) => (
            <div
              key={issue.number}
              className="bg-white rounded-2xl shadow p-6 hover:shadow-2xl hover:-translate-y-1 transition border-t-4 border-yellow-500"
            >
              <h3 className="text-xl font-bold text-green-900 mb-2">
                {issue.title}
              </h3>

              <p className="text-gray-600 mb-4">
                {issue.description}
              </p>

              <a
                href={issue.file}
                target="_blank"
                className="text-yellow-600 font-bold hover:underline"
              >
                تحميل العدد
              </a>
            </div>
          ))}

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-950 text-white py-10 mt-10">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <p className="text-yellow-300 font-semibold text-lg">
            جميع الحقوق محفوظة © صحيفة العيكورة
          </p>

          <p className="text-gray-300 text-sm mt-2">
            منصة العيكورة الرقمية للتوثيق والإعلام المجتمعي
          </p>

        </div>
      </footer>

    </main>
  );
}
