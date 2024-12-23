import HeroSection from "@/components/HeroSection";
import MovieCard  from "@/components/Moviecard";
import { fetchData } from "@/utils/fetchcalls"; 


export default async function MoviesPage() {
  const movies = await fetchData({type:'movies',page:1});

   return (
    <div className="bg-gray-900 text-white min-h-screen">
      
      <HeroSection
        title="Movie Collection"
        description="Browse through our extensive collection of movies. Find your next
            favorite film now!"
      />

      <main className="container mx-auto p-6">
        <section className="mb-10">
          <h1 className="text-3xl font-semibold mb-6">Now Playing</h1>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {/* <Slider {...settings}> */}
            {movies.map((movie) => (
              <MovieCard movie={movie} key={movie.id}/>
            ))}
            {/* </Slider> */}
          </div>
          
        </section>
      </main>
    </div>
  );
}
