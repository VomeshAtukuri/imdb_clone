import HeroSection from "@/components/HeroSection";
import Tvcard from "@/components/Tvcard";
import { fetchData } from "@/utils/fetchcalls"; 

export default async function TvPage() {
  const tvshows = await fetchData({type:'tv'});
  return (
    <div className="bg-gray-900 text-white min-h-screen">
     
      <HeroSection
        title="TV Collection"
        description="Browse through our extensive collection of tv. Find your next
            favorite series now!"
      />
      <main className="container mx-auto p-6">
        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-6">Now Playing</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">  
          {tvshows.map((show) => (
              <Tvcard show={show} key={show.id} />
          ))}
          </div>
        </section>
      </main>
      
    </div>
  );
}
