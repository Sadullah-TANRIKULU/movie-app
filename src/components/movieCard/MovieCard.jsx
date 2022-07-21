import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { toastWarnNotify } from "../../helpers/ToastNotify";
import "./MovieCard.css";

const IMG_API = `https://image.tmdb.org/t/p/w1280`;
const defaultImage = 'https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80';


const MovieCard = (props) => {
  const { title, overview, poster_path, vote_avarage, id } = props;

  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);

  const setVoteClass = (vote) => {
    if (vote > 8) {
      return 'green';
    } else if (vote >= 6) {
      return 'orange';
    } else {
      return 'red';
    }
  };

  return (
    <div 
    className="movieCard cursor-pointer " 
    onClick={() => {navigate('moviedetail/' + id); 
    !currentUser && toastWarnNotify('Pls, log in to see detail');}} >
      <div className="movieCardPoster">
        <img
          loading="lazy"
          src={poster_path ? IMG_API + poster_path : defaultImage }
          alt={title}
          className="movieImage"
        />
        <h3 className="movieTitle text-4xl text-center bg-slate-800 text-white ">
          {title}
        </h3>
        { currentUser && 
        <span className={`tag ${setVoteClass(vote_avarage)}`} >
          { vote_avarage }
        </span> }
      </div>
      <p className="overview text-white bg-slate-900 bg-opacity-50 ">
        {overview}
      </p>
    </div>
  );
};

export default MovieCard;
