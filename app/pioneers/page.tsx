import Navbar from "../components/Navbar";

export default function PioneersPage() {
  return (
    <main className="min-h-screen bg-slate-50">

      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-green-950 via-green-900 to-green-800 text-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-yellow-300">
            رواد العيكورة الرقمية
          </h1>

          <p className="text-yellow-200 text-lg md:text-xl max-w-2xl mx-auto">
            توثيق البدايات الأولى للحضور الرقمي للعيكورة على شبكة الإنترنت
          </p>

        </div>
      </section>

      {/* Introduction */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8">

          <h2 className="text-3xl font-bold text-yellow-600 mb-6 border-r-4 border-yellow-500 pr-4">
            البداية الرقمية
          </h2>

          <p className="leading-10 text-lg text-gray-700">
            شهدت العيكورة في عام 2009 تقريباً انطلاقة أولى مبادراتها الرقمية
            عبر شبكة الإنترنت، حيث بدأت مجموعة من أبناء القرية في إنشاء
            منصات إلكترونية هدفت إلى تعزيز التواصل بين أبناء العيكورة داخل
            السودان وخارجه، وتوثيق الأخبار والمناسبات والأنشطة الاجتماعية
            والثقافية.
          </p>

        </div>
      </section>

      {/* Forum */}
      <section className="max-w-6xl mx-auto px-6 pb-16">

        <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-yellow-500">

          <h2 className="text-3xl font-bold text-green-900 mb-4">
            منتدى شباب العيكورة الإلكتروني
          </h2>

          <p className="text-lg text-gray-700 leading-9">
            يُعد منتدى شباب العيكورة الإلكتروني من أوائل المبادرات الرقمية
            التي جمعت أبناء العيكورة داخل السودان وخارجه في منصة واحدة
            لتبادل الأخبار والآراء والذكريات وتوثيق المناسبات والأنشطة
            المجتمعية، مما أسهم في تعزيز التواصل بين أبناء القرية عبر الإنترنت.
          </p>

          <div className="mt-6 bg-slate-100 p-4 rounded-lg text-center font-bold text-green-900">
            al3kara.forumup.com
          </div>

        </div>

      </section>

      {/* Pioneers */}
      <section className="max-w-6xl mx-auto px-6 pb-16">

        <h2 className="text-3xl font-bold text-yellow-600 mb-6 border-r-4 border-yellow-500 pr-4">
          رواد العيكورة الرقمية
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-white rounded-2xl shadow p-6 hover:shadow-2xl transition">
            <h3 className="text-2xl font-bold text-green-900 mb-2">
              مبارز طه الإمام
            </h3>

            <p className="text-gray-600 leading-8">
              من أوائل المساهمين في تأسيس وإدارة منتدى شباب العيكورة الإلكتروني،
              وأسهم في دعم الحضور الرقمي للعيكورة خلال سنواتها الأولى.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6 hover:shadow-2xl transition">
            <h3 className="text-2xl font-bold text-green-900 mb-2">
              مساهمون ورواد آخرون
            </h3>

            <p className="text-gray-600 leading-8">
              شارك عدد من أبناء العيكورة في إنجاح التجربة الرقمية الأولى
              من خلال الإدارة والإشراف والمشاركة بالمحتوى والتوثيق،
              وسيتم إضافة الأسماء تباعاً كلما توفرت المعلومات والوثائق اللازمة.
            </p>
          </div>

        </div>

      </section>

      {/* Documentation Note */}
      <section className="max-w-6xl mx-auto px-6 pb-16">

        <div className="bg-yellow-50 border-r-4 border-yellow-500 p-6 rounded-2xl shadow">

          <h2 className="text-2xl font-bold text-green-900 mb-4">
            ملاحظة توثيقية
          </h2>

          <p className="text-gray-700 leading-9">
            لا يزال هذا التوثيق قيد التطوير، وسيتم العمل على إضافة المزيد من
            الأسماء والصور والوثائق التاريخية المتعلقة بالبدايات الرقمية
            للعيكورة، تقديراً لكل من أسهم في هذه المسيرة الرائدة.
          </p>

        </div>

      </section>

      {/* Legacy */}
      <section className="max-w-6xl mx-auto px-6 pb-20">

        <div className="bg-white rounded-2xl shadow-lg p-8">

          <h2 className="text-3xl font-bold text-yellow-600 mb-6 border-r-4 border-yellow-500 pr-4">
            الإرث الرقمي
          </h2>

          <p className="text-lg text-gray-700 leading-10">
            تمثل هذه المبادرات اللبنة الأولى للحضور الرقمي للعيكورة،
            وقد مهدت الطريق للمشروعات والمنصات الحالية التي تواصل
            توثيق تاريخ القرية وتعزيز التواصل بين أبنائها في مختلف أنحاء العالم.
          </p>

        </div>

      </section>

      {/* Footer */}
      <footer className="bg-green-950 text-white py-10 mt-10">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <p className="text-yellow-300 font-semibold text-lg">
            جميع الحقوق محفوظة © العيكورة
          </p>

          <p className="text-gray-300 text-sm mt-2">
            منصة العيكورة الرقمية للتوثيق والإعلام المجتمعي
          </p>

        </div>
      </footer>

    </main>
  );
}
