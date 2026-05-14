export default function About() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow">

      <h1 className="text-3xl font-bold mb-4">About Us</h1>

      <p className="text-gray-700 mb-4">
        Welcome to Movie App 🎬 — a simple platform to explore popular movies and view their details.
      </p>

      <p className="text-gray-600 mb-4">
        This project is built using Next.js, TypeScript, and Tailwind CSS as part of a learning experience.
      </p>

      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Technologies Used</h2>
        <ul className="list-disc list-inside text-gray-600">
          <li>Next.js</li>
          <li>TypeScript</li>
          <li>Tailwind CSS</li>
        </ul>
      </div>

    </div>
  );
}