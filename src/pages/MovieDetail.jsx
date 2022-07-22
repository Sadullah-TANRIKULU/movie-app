import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_KEY = "8f2ca002e986a1cafaf8f55e80fb42a7"; // process.env.REACT_APP_TMDB_KEY

const MovieDetail = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState("");
  const [video, setVideo] = useState();

  const urlData = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
  const urlVideo = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`;

  const IMG_API = `https://image.tmdb.org/t/p/w1280`;

  const defaultImage =
    "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";

  const {
    title,
    poster_path,
    overview,
    vote_average,
    release_date,
    vote_count,
  } = movieDetails;

  

  useEffect(() => {
    axios
      .get(urlData)
      .then((response) => setMovieDetails(response.data))
      .catch((error) => console.log(error));

    axios
      .get(urlVideo)
      .then((response) => setVideo(response.data.results))
      .catch((error) => console.log(error));
  }, [urlData, urlVideo]);

  console.log(video);

  return (
    <div className="movieDetail" key={id}>
      <div className="video w-full aspect-video my-2">
        {video?.map((videoData, index) => {
          return (
            <div className="officalTrailer " key={index} >
              {(videoData.name === "Official Trailer" || videoData.official === true || videoData.type === "Trailer") && 
                <iframe
                  src={`https://www.youtube.com/embed/${videoData.key}?autoplay=0&mute=1`}
                  title="YouTube video"
                  allowFullScreen
                  className="w-full aspect-video"
                ></iframe> 
                // : (<p className="w-full text-center h-50 " >😯 There is no video available</p>)
              }
            </div>
          );
        })}
      </div>
      <div className="movieDetailDown grid lg:grid-cols-2 gap-6 ">
        <div className="movieImg">
          <img
            loading="lazy"
            src={poster_path ? IMG_API + poster_path : defaultImage}
            alt={title}
            className="movieImage"
          />
        </div>
        <div className="movieInfo ">
            <ul className="flex flex-col gap-4 text-2xl font-bold " >
                <li>Overview       : {overview}</li>
                <li>Release Date   : {release_date}</li>
                <li>Average Vote   : {vote_average}</li>
                <li>Total Vote     : {vote_count}</li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
