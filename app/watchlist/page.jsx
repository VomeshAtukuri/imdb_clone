"use client";

import { useContext } from "react";
import CartContext from "@/utils/CartContext";

export default function Watchlist() {
  const { state, dispatch } = useContext(CartContext);
  const removeMovie = (movieId) => {
    dispatch({ type: "remove_movie", payload: { id: movieId } });
  };
  return (
    <div>
      <h1>Movie List</h1>
      <ul>
        {state.cartmovies.map((movie) => (
          <li key={movie.id}>
            {movie.title}
            <button onClick={() => removeMovie(movie.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
