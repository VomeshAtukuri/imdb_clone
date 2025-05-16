import Link from "next/link"

export default function TrailMovieCard({ movie }) {
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
            </div>
          </div>
        </Link>
      </div>
    );
}
