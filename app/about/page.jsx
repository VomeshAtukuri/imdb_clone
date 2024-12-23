export default function About() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <header className="bg-gray-800 p-6">
        <h1 className="text-4xl font-bold text-center text-yellow-500">
          About IMDb Clone
        </h1>
      </header>

      <main className="container mx-auto p-6">
        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-400 leading-relaxed">
            Welcome to IMDb Clone, a modern platform to explore movies, TV
            shows, and celebrities. Our mission is to provide a user-friendly
            experience for entertainment enthusiasts to browse and discover
            their favorite content with ease. Whether you’re a casual viewer or
            a cinephile, IMDb Clone is designed to keep you connected to the
            entertainment world.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-400 leading-relaxed">
            Have feedback or suggestions? We’d love to hear from you. Reach out
            to us at:
            <span className="text-yellow-500"> support@imdbclone.com</span>
          </p>
        </section>
      </main>
    </div>
  );
}
