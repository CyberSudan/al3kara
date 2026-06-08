export default function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="font-bold text-xl text-green-700">
          العيكورة
        </h1>

        <div className="flex gap-6">
          <a href="/">الرئيسية</a>
          <a href="/about">عن القرية</a>
          <a href="/news">الأخبار</a>
          <a href="/gallery">الصور</a>
        </div>
      </div>
    </nav>
  );
}
