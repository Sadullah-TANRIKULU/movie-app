import "./MovieCard.css";

const MovieCard = (props) => {
  const { title, overview, poster_path } = props;

  return (
    <div className="movieCard ">
      <div className="movieCardPoster">
        <img
          src={`https://image.tmdb.org/t/p/w1280${poster_path}`}
          alt={title}
          className="movieImage"
        />
        <h2 className="movieTitle text-4xl text-center bg-slate-800 text-white ">
          {title}
        </h2>
      </div>
      <p className="overview text-white bg-slate-900 bg-opacity-50 ">
        {overview}
      </p>
    </div>
  );
};

export default MovieCard;
