export default function PeoplePage() {
  const people = [
    {
      name: "شخصية من أبناء العيكورة",
      field: "التعليم",
    },
    {
      name: "شخصية من أبناء العيكورة",
      field: "الهندسة",
    },
    {
      name: "شخصية من أبناء العيكورة",
      field: "الطب",
    },
  ];

  return (
    <main className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-green-900 mb-8">
        أبناء العيكورة
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {people.map((person, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow p-6"
          >
            <div className="w-20 h-20 rounded-full bg-green-100 mx-auto mb-4"></div>

            <h2 className="text-xl font-bold text-center">
              {person.name}
            </h2>

            <p className="text-center text-gray-600 mt-2">
              {person.field}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
