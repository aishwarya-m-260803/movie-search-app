"use client";

import { useState } from "react";
import { movies } from "@/lib/movies";
import Link from "next/link";
import MovieCard from "../_components/MovieCard";

export default function Movies() {
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );
  let sortedMovies = [...filteredMovies];

    if (sortOrder === "high") {
    sortedMovies.sort((a, b) => b.rating - a.rating);
    } else if (sortOrder === "low") {
    sortedMovies.sort((a, b) => a.rating - b.rating);
    }
  return (
    <div className="max-w-6xl mx-auto p-6">
      
      <h1 className="text-3xl font-bold mb-6">Movies</h1>

      <p className="mt-4 mb-4">
        Welcome to the movies page. Here you can find information about your favorite movies.
      </p>

      {/* 🔍 Search Bar */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
  
        <input
            type="text"
            placeholder="🔍 Search movies..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
        />

        <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
            <option value="">Sort</option>
            <option value="high">⭐ High → Low</option>
            <option value="low">⭐ Low → High</option>
        </select>

        </div>

      {/* 🎬 Movies Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sortedMovies.map((movie) => (
          <Link key={movie.id} href={`/movies/${movie.id}`}>
            <MovieCard movie={movie} />
          </Link>
        ))}
      </div>
      {filteredMovies.length === 0 && (
        <p className="text-gray-500 mt-6 text-center">
            No movies found 🎬
        </p>
    )}
    </div>
  );
}