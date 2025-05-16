"use client";

import { useContext } from "react";
import CartContext from "@/utils/CartContext";

export default function Watchlist() {
  const { state, dispatch } = useContext(CartContext);

  const removeMovie = (movieId) => {
    dispatch({ type: "remove_movie", payload: { id: movieId } });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-8">My Watchlist</h1>
        {state.cartmovies.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {state.cartmovies.map((movie) => (
              <div
                key={movie.id}
                className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full h-48 md:h-64 object-cover"
                />

                <div className="p-4">
                  <div className="flex justify-between items-center">
                    <h2 className="text-lg font-bold truncate">{movie.title}</h2>
                    <p className="text-sm text-gray-400">
                      {movie.vote_average.toFixed(1)}/10
                    </p>
                  </div>
                  <button
                    onClick={() => removeMovie(movie.id)}
                    className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-400 mt-10">
            Your watchlist is empty. Add some movies to get started!
          </p>
        )}
      </div>
    </div>
  );
}
