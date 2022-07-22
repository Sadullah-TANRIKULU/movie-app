import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { toastWarnNotify } from "../../helpers/ToastNotify";
import "./MovieCard.css";

const IMG_API = `https://image.tmdb.org/t/p/w1280`;
const defaultImage =
  "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";

const MovieCard = (props) => {
  const { title, overview, poster_path, vote_average, id } = props;
  console.log(vote_average);

  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

  const setVoteClass = (vote) => {
    if (vote > 8) {
      return "#00ff00"; // green
    } else if (vote >= 6 && vote <= 8) {
      return "#0000ff"; // orange
    } else {
      return "#ff0000"; // red
    }
  };

  return (
    <div
      className="movieCard cursor-pointer "
      onClick={() => {
        navigate("moviedetail/" + id);
        !currentUser && alert("Pls, log in to see detail"); //  toastWarnNotify("Pls, log in to see detail");
      }}
    >
      <div className="movieCardPoster relative group overflow-hidden ">
        <img
          loading="lazy"
          src={poster_path ? IMG_API + poster_path : defaultImage}
          alt={title}
          className="movieImage"
        />
        <h3 className="movieTitle text-4xl flex items-center justify-center bg-slate-800 text-white h-20 ">
          {title}
        </h3>
        {currentUser && (
          <span
            className={`tag bg-[${setVoteClass(
              vote_average
            )}] rounded-full p-4 absolute top-0 left-0 text-lg text-white font-semibold`}
          >
            {vote_average}
          </span>
        )}
        <p className="overview text-lg bg-white/[.85] text-slate-900 absolute left-[40rem] bottom-0 right-[-40rem] group-hover:left-0 group-hover:right-0 group-hover:bottom-0 transition-all ease-in-out duration-400 ">
          <h4>Overview :</h4>
          {overview}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
