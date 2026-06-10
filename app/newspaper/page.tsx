export default function NewspaperPage() {
  const issues = [
    {
      number: "004",
      title: "صحيفة العيكورة - العدد الرابع",
      description: "أخبار وأنشطة ومبادرات مجتمع العيكورة.",
      file: "/newspaper/issue-004.pdf",
    },
    {
      number: "005",
      title: "صحيفة العيكورة - العدد الخامس",
      description: "متابعة الأخبار والفعاليات المجتمعية.",
      file: "/newspaper/issue-005.pdf",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50">

      {/* Header */}
      <section className="bg-green-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">
            صحيفة العيكورة
          </h1>

          <p className="text-yellow-400 text-lg">
            أرشيف أعداد صحيفة العيكورة الإلكترونية
          </p>
        </div>
      </section>

      {/* About / Editorial Team */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8">

          <h2 className="text-3xl font-bold text-green-900 mb-6">
            هيئة التحرير
          </h2>

          <div className="space-y-6 text-lg">

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
              <ul className="list-disc mr-6 mt-2 space-y-1">
                <li>أ. مالله محمد طه</li>
                <li>صبري محمد علي</li>
                <li>أ. عمر عبد الرزاق يوسف</li>
                <li>أ. أبو بكر عبد الله الطيب</li>
              </ul>
            </div>

          </div>

          <p className="mt-6 text-gray-700">
            إصدارة إلكترونية شهرية برعاية جمعية إبراهيم عبد السلام الخيرية بالعيكورة.
          </p>

        </div>
      </section>

      {/* Archive */}
      <section className="max-w-6xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-bold text-green-900 mb-8">
          الأعداد المتوفرة
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {issues.map((issue) => (
            <div
              key={issue.number}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition"
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

    </main>
  );
}
