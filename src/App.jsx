import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import search from "../src/assets/search.png";
import bgImage from "./assets/movie bg.jpg";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const api_url = "http://www.omdbapi.com?apikey=7ac741d8";

  const movieSearch = async (title) => {
    if (title.trim() === "") {
      setMovies([]);
      return;
    }
    const response = await fetch(`${api_url}&s=${title}`);
    const data = await response.json();
    setMovies(data.Response === "False" ? [] : data.Search || []);
  };

  useEffect(() => {
    movieSearch("race");
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-900 text-white">
      <div
        className="w-full flex flex-col items-center p-8 sm:p-4"
        style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <h1 className="text-5xl sm:text-4xl mt-8 font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-500 mb-12 animate-fadeIn">
          Movie World
        </h1>

        <div className="flex items-center w-full max-w-2xl p-4 bg-gray-800 shadow-xl border border-gray-600 rounded-full transition-transform hover:scale-105 ">
          <input
            className="flex-1 text-lg font-medium bg-transparent text-white placeholder-gray-400 outline-none p-2"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Search for movies..."
          />
          <img
            src={search}
            className="w-8 h-8 cursor-pointer transition-transform hover:scale-110"
            onClick={() => movieSearch(searchTerm)}
            alt="search"
          />
        </div>
      </div>

      {movies.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12 w-full max-w-4xl animate-fadeIn">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} state={movie} />
          ))}
        </div>
      ) : (
        <div className="mt-12 text-gray-400 text-xl font-semibold animate-fadeIn">
          Movies not found
        </div>
      )}
    </div>
  );
}

export default App;