
import { fetchData } from "@/utils/fetchcalls";
import Link from "next/link";
import Image from "next/image";

export default async function Home() {

  const movies = await fetchData({type:'trending'});

  return (
    <div className="bg-gray-900 text-white min-h-screen">
     
      <header
        className="bg-cover bg-center h-[60vh] flex items-center justify-center text-center relative"
        style={{ backgroundImage: "url('/hero-banner.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold text-yellow-500 mb-4">
            Welcome to IMDb Clone
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Discover the latest movies, TV shows, and celebrities. Dive into the
            world of entertainment with our interactive platform.
          </p>
          <Link
            href="/movies"
            className="mt-6 inline-block px-6 py-3 bg-yellow-500 text-gray-900 font-semibold rounded-md hover:bg-yellow-400"
          >
            Explore Movies
          </Link>
        </div>
      </header>

    
      <main className="container mx-auto p-6">
        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-6">Trending Now</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            
            {movies.map((movie) => (
              <div
                key={movie.id}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl"
              >
                
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{movie.title}</h3>
                  <p className="text-sm text-gray-400">
                    {movie.release_date} | Rating: {movie.vote_average}
                  </p>
                  <p className="text-sm text-gray-400 mt-2">{movie.overview}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      
        <section className="mb-10 text-center">
          <h2 className="text-3xl font-semibold mb-4">Explore More</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Browse our extensive collection of movies, TV shows, and celebrity
            profiles. Create your watchlist and never miss out on your favorite
            content!
          </p>
          <Link
            href="/tv"
            className="mt-6 inline-block px-6 py-3 bg-yellow-500 text-gray-900 font-semibold rounded-md hover:bg-yellow-400"
          >
            Explore TV Shows
          </Link>
        </section>
      </main>

      
    </div>
  );
}
