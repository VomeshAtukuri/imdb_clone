import Link from "next/link";

export default function MovieCard({ movie }) {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out">
      <Link href={`/movies/${movie.title}`}>
        <div className="cursor-pointer">
          <div className="relative">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-64 object-cover rounded-t-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 hover:bg-opacity-10 transition-opacity duration-300"></div>
          </div>
          <div className="p-4">
            <h3 className="text-white text-xl font-semibold truncate">
              {movie.title}
            </h3>
            <p className="text-gray-400 text-sm mt-1">
              Released: {movie.release_date || "Unknown"}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
