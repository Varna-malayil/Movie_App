const MovieCard = ( movies ) => {
  return (
    <div className="relative w-full sm:w-72 md:w-64 h-[460px] m-8 rounded-xl overflow-hidden transform transition-all duration-300 ease-in-out group">
      {/* Title (Visible on Hover) */}
      <div className="absolute top-0 left-0 w-full p-4 opacity-0 group-hover:opacity-100 group-hover:text-lg group-hover:text-shadow-lg transition-all duration-300 text-[var(--color-4)] font-bold">
        <p>{movies?.state.Year}</p>
      </div>

      {/* Image */}
      <div className="w-full h-full">
        <img
          className="w-full h-full object-cover"
          src={movies?.state.Poster}
          alt="movie poster"
        />
      </div>

      {/* Movie Info (Visible on Hover) */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-[var(--color-2)] bg-black bg-opacity-70 shadow-md group-hover:bg-transparent group-hover:shadow-none transition-all duration-300 z-10">
        <span className="text-xs uppercase font-semibold tracking-wide text-[var(--color-3)]">{movies?.state.Type}</span>
        <h3 className="mt-2 font-bold  text-lg text-[var(--color-4)]">{movies?.state.Title}</h3>
      </div>

      {/* Hover Effects */}
      <div className="group-hover:scale-105 group-hover:shadow-lg transform transition-all duration-300 ease-in-out"></div>
    </div>
  );
};

export default MovieCard;
