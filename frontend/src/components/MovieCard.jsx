import React from "react";

const MovieCard = ({
  movie: { title, vote_average, poster_path, release_date, original_language },
}) => {
  return (
    <div className="movie-card">
      <img
        className="movie-poster"
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : "/No-Poster.png"
        }
        title={title}
      />

      <div className="movie-body mt-4">
        <h3 className="text-white text-bold text-bold">{title}</h3>

        <div className="content">
          <div className="rating">
            <img src="/vuesax/bold/star.svg" alt="Star Icon" />
            <p className="rating-value text-white">
              {vote_average ? vote_average.toFixed(1) : "N/A"}
            </p>

            <span className="dot text-white">·</span>
            <p className="lang">{original_language}</p>
            <span className="dot text-white">·</span>
            <p className="year">
              {release_date ? release_date.split("-")[0] : "N/A"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
