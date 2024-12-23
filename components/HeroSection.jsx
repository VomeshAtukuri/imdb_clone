import SearchBar from "./Searchbar";

export default function HeroSection({ title, description }) {
  return (
    <header
      className="bg-cover bg-center h-[60vh] flex flex-col items-center justify-center text-center relative"
      style={{ backgroundImage: "url('/movies-hero.jpg')" }}
    >
      
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

    
      <div className="relative z-10 max-w-3xl px-4">
        <h1 className="text-5xl font-bold text-yellow-500 mb-6">{title}</h1>
        <p className="text-lg text-gray-300 mb-8">{description}</p>
        <SearchBar/>
      </div>
    </header>
  );
}
