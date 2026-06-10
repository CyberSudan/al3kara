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

          <p className="text-yellow-200 text-lg md:text-xl max-w-3xl mx-auto leading-8">
            توثيق أولى المبادرات الرقمية التي ربطت أبناء العيكورة عبر الإنترنت وأسست لبداية الحضور الإلكتروني للمجتمع.
          </p>

        </div>
      </section>

      {/* Intro */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-white rounded-2xl shadow-md p-8 border-r-4 border-yellow-500">

          <h2 className="text-3xl font-bold text-green-900 mb-6">
            البداية الرقمية
          </h2>

          <p className="leading-10 text-lg text-gray-700">
            شهدت العيكورة في أوائل الألفينات انطلاقة أول حضور رقمي لها عبر
            منتديات إلكترونية جمعت أبناء القرية داخل السودان وخارجه،
            وكانت بداية لتوثيق التاريخ وبناء مجتمع رقمي متواصل.
          </p>

        </div>
      </section>

      {/* Platform */}
      <section className="max-w-6xl mx-auto px-6 pb-16">

        <div className="bg-white rounded-2xl shadow-md p-8 border-l-4 border-green-700">

          <h2 className="text-3xl font-bold text-green-900 mb-4">
            منتدى شباب العيكورة الإلكتروني
          </h2>

          <p className="text-lg text-gray-700 leading-9">
            كان المنتدى منصة تجمع أبناء العيكورة لتبادل الأخبار،
            توثيق الأحداث، وتعزيز الروابط الاجتماعية، وقد شكل نقطة تحول
            مهمة في التاريخ الرقمي للقرية.
          </p>

          <div className="mt-6 bg-slate-100 p-4 rounded-lg text-center font-bold text-green-900">
            al3kara.forumup.com
          </div>

        </div>

      </section>

      {/* Founder */}
      <section className="max-w-6xl mx-auto px-6 pb-16">

        <h2 className="text-3xl font-bold text-green-900 mb-8">
          المؤسسون
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
            <h3 className="text-2xl font-bold text-green-900 mb-2">
              مبارز طه الإمام
            </h3>
            <p className="text-gray-600 leading-8">
              من أوائل مؤسسي المنتدى الإلكتروني وأحد رواد العمل الرقمي في العيكورة.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
            <h3 className="text-2xl font-bold text-green-900 mb-2">
              مساهمون آخرون
            </h3>
            <p className="text-gray-600 leading-8">
              العديد من الشباب الذين ساهموا في بناء المحتوى الرقمي وتوثيق تاريخ القرية.
            </p>
          </div>

        </div>

      </section>

      {/* Legacy */}
      <section className="max-w-6xl mx-auto px-6 pb-20">

        <div className="bg-white rounded-2xl shadow-md p-8 border-t-4 border-yellow-500">

          <h2 className="text-3xl font-bold text-green-900 mb-6">
            الإرث الرقمي
          </h2>

          <p className="text-lg text-gray-700 leading-10">
            تمثل هذه المبادرات الأساس الذي بني عليه موقع العيكورة الحالي،
            والذي يواصل اليوم مسيرة التوثيق وربط الأجيال الرقمية الجديدة
            بتاريخ ومجتمع العيكورة.
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
            منصة العيكورة الرقمية للتوثيق
          </p>

        </div>
      </footer>

    </main>
  );
}
