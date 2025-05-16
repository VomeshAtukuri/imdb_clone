import { fetchData } from "@/utils/fetchcalls";

export default async function Search({ searchParams }) {
  const { query } = await searchParams;
  const data = await fetchData({ type: "search", query: query });

  const topResults = data.slice(0, 4);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Search Results for: <span className="text-yellow-500">{query}</span>
      </h1>

      {topResults.length > 0 ? (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {topResults.map((item) => (
            <li
              key={item.id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative">
                <img
                  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  alt={item.title || item.name}
                  className="w-full h-56 object-cover rounded-t-lg"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white opacity-0 hover:opacity-100 transition-opacity">
                  <p className="text-lg font-semibold">
                    {item.title || item.name}
                  </p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-300 text-sm">
                  {item.overview || "No overview available."}
                </p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-lg">No results found</p>
      )}
    </div>
  );
}
