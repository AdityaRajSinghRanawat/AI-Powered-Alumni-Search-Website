"use client";

import { useState } from "react";
import logo from "../public/homeLogo.png";

export default function Home() {
  const [searchInput, setSearchInput] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    const res = await fetch("/api/parse-properties", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ post: searchInput }),
    });
    const data = await res.json();
    setResults(Array.isArray(data) ? data : []);
    setLoading(false);
  };

  return (
    <main className="p-8 bg-black min-h-screen text-white">
      <div className="flex items-center justify-center h-[100px] bg-cover bg-center mb-8">
        <img src={logo.src} alt="Logo" className="h-full mb-4" />
      </div>

      <textarea
        className="w-full border p-3 rounded mb-4"
        placeholder="Example: Looking for alumni from Google in Japan skilled in AI"
        rows={3}
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />

      <button
        onClick={handleSearch}
        disabled={loading}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        {loading ? "Searching..." : "Search"}
      </button>

      <div className="mt-6 space-y-4">
        {results.map((alumni) => (
          <div key={alumni.id} className="border p-4 rounded flex gap-4">
            {alumni.photo && (
              <img
                src={alumni.photo}
                alt={alumni.name}
                className="w-20 h-20 rounded-full object-cover"
              />
            )}
            <div>
              <h2 className="font-semibold text-lg">{alumni.name}</h2>
              <p>College: {alumni.college}</p>
              <p>
                Years: {alumni.join_year} – {alumni.passing_year}
              </p>
              <p>Company: {alumni.company}</p>
              <p>Role: {alumni.role}</p>
              <p>Location: {alumni.location}</p>
              <p>Skills: {alumni.skills.join(", ")}</p>
              {alumni.linkedin && (
                <a
                  href={alumni.linkedin}
                  target="_blank"
                  className="text-blue-600 underline"
                >
                  LinkedIn Profile
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
