import { movies } from "@/lib/movies";
import Link from "next/link";

export default async function MovieDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const movie = movies.find((m) => m.id === Number(id));

  if (!movie) return <h1>Movie not found</h1>;

  return (
    <div className="max-w-5xl mx-auto p-6">

      <div className="flex flex-col md:flex-row gap-8">

        {/* 🎬 Movie Image */}
        <img
          src={movie.image}
          alt={movie.title}
          className="w-full md:w-1/2 h-80 object-cover rounded-xl shadow"
        />

        {/* 📄 Movie Details */}
        <div className="flex flex-col justify-center">

          <h1 className="text-4xl font-bold mb-2">
            {movie.title}
          </h1>

          <p className="text-gray-600 text-lg mb-4">
            ⭐ {movie.rating}
          </p>

          <p className="text-gray-700 leading-relaxed">
            {movie.description}
          </p>

          {/* 🔙 Back Button */}
          <Link
            href="/movies"
            className="mt-6 text-blue-500 hover:underline"
          >
            ← Back to Movies
          </Link>

        </div>

      </div>

    </div>
  );
}