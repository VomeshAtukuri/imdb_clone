import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import TrailMovieCard from "@/components/trailMovieCard";
import { fetchData } from "@/utils/fetchcalls";

async function Carosoul() {
  const data = await fetchData({ type: 'movies', page: 1 });
  data.slice(0,5);
  return (
    <Carousel
      opts={{
        align: "start",
        loop:true
      }}
      className="w-full max-w-sm"
    >
      <CarouselContent>
        {data.map((movie, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <TrailMovieCard movie={movie} key={movie.id} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext />
      <CarouselPrevious />
    </Carousel>
  );
}

export default Carosoul;