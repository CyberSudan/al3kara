export default function GalleryPage() {
  const images = [
    {
      title: "النيل الأزرق",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    },
    {
      title: "الزراعة",
      image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854",
    },
    {
      title: "الطبيعة",
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    },
  ];

  return (
    <main className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-green-900 mb-8">
        معرض صور العيكورة
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {images.map((img) => (
          <div
            key={img.title}
            className="bg-white rounded-xl shadow overflow-hidden"
          >
            <img
              src={img.image}
              alt={img.title}
              className="w-full h-64 object-cover"
            />

            <div className="p-4">
              <h2 className="font-bold">
                {img.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
