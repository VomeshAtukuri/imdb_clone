"use client";
import { useState } from "react";
import Link from "next/link";
export default function SearchBar() {
  const [Term, setTerm] = useState("");
  return (
    <div className="mt-6 flex items-center bg-gray-800 rounded-full px-4 py-2 w-full max-w-md mx-auto">
      <input
        type="text"
        value={Term}
        placeholder="Search..."
        onChange={(e) => setTerm(e.target.value)}
        className="bg-transparent border-none text-white placeholder-gray-400 text-sm w-full focus:outline-none"
      />
      <Link href={`/search?query=${encodeURIComponent(Term)}`}>
        <button className="text-yellow-500 ml-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
            />
          </svg>
        </button>
      </Link>
    </div>
  );
}
