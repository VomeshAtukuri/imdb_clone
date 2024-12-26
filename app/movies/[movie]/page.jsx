"use client";

import { useParams } from "next/navigation";
import { useEffect, useState, useContext } from "react";
import { fetchData } from "@/utils/fetchcalls";
import CartContext from "@/utils/CartContext";

export default function MovieDetails() {
  const { movie } = useParams(); // Get the movie slug from the route
  const movieName = decodeURIComponent(movie); // Decode the movie name from URL

  const [particularMovie, setParticularMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { dispatch } = useContext(CartContext);
  const [text, setText] = useState(1);

  async function fetchDetails() {
    try {
      setLoading(true);
      const data = await fetchData({
        type: "search",
        query: movieName,
        page: 1,
      });
      if (data.length > 0) {
        setParticularMovie(data[0]);
      } else {
        setParticularMovie(null);
      }
    } catch (err) {
      console.error("Error fetching movie details:", err);
      setError("Failed to fetch movie details");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchDetails();
  }, [movieName]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white">
        <div className="text-lg font-semibold animate-pulse">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white">
        <div className="text-red-500 text-lg">{error}</div>
      </div>
    );
  }

  if (!particularMovie) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white">
        <div className="text-lg font-semibold">
          No movie found for "{movieName}".
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start gap-8">
        <img
          src={`https://image.tmdb.org/t/p/w500${particularMovie.poster_path}`}
          alt={particularMovie.title}
          className="w-full md:w-1/3 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
        />

        <div className="flex-1">
          <h1 className="text-4xl font-extrabold mb-4 text-yellow-400">
            {particularMovie.title}
          </h1>
          <p className="text-sm text-gray-500 italic mb-2">
            Release Date: {particularMovie.release_date}
          </p>
          <p className="text-base text-gray-300 leading-relaxed mb-4">
            {particularMovie.overview}
          </p>
          <p className="text-lg text-yellow-500 font-semibold">
            Rating: {particularMovie.vote_average} / 10
          </p>
          <button
            className="mt-6 inline-block px-6 py-3 bg-yellow-500 text-gray-900
                  font-semibold rounded-md hover:bg-yellow-400"
            onClick={() => {
              dispatch({
                type: "add_movie",
                payload: {
                  id: particularMovie.id,
                  title: particularMovie.title,
                  poster_path: particularMovie.poster_path,
                  vote_average: particularMovie.vote_average,
                },
              });
              setText(0);
            }}
          >
            {text ? "Add to Watchlist" : "Added"}
          </button>
        </div>
      </div>
    </div>
  );
}
