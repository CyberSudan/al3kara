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

      {/* Archive */}
      <section className="max-w-6xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-bold text-green-900 mb-8">
          الأعداد المتوفرة
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {issues.map((issue) => (
            <div
              key={issue.number}
              className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
            >
              <div className="mb-4">
                <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                  العدد {issue.number}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-green-900 mb-3">
                {issue.title}
              </h3>

              <p className="text-gray-600 mb-6">
                {issue.description}
              </p>

              <div className="flex gap-3 flex-wrap">

                <a
                  href={issue.file}
                  target="_blank"
                  className="bg-green-800 hover:bg-green-900 text-white px-5 py-2 rounded-lg transition"
                >
                  قراءة العدد
                </a>

                <a
                  href={issue.file}
                  download
                  className="bg-yellow-500 hover:bg-yellow-600 text-black px-5 py-2 rounded-lg transition"
                >
                  تحميل PDF
                </a>

              </div>
            </div>
          ))}

        </div>

      </section>

      {/* Footer */}
      <footer className="bg-green-950 text-white py-10 mt-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p>
            © جميع الحقوق محفوظة - صحيفة العيكورة
          </p>
        </div>
      </footer>

    </main>
  );
}
