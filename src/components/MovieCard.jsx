const MovieCard = (props) => {
  const { title, overview, poster_path, backdrop_path } = props;

  return (
    <div className="movieCard">
      <img src={`https://image.tmdb.org/t/p/w1280${poster_path}`} alt={title} />
      <h2>{title}</h2>

      <p className="flex hover:hidden">{overview}</p>
    </div>
  );
};

export default MovieCard;
