import { useContext, useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import {
  FormControl,
  Button,
  Input,
  InputLabel,
  FormGroup,
} from "@mui/material";
import MovieCard from "../components/movieCard/MovieCard";
import { AuthContext } from "../context/AuthContext";
import { toastWarnNotify } from "../helpers/ToastNotify";

// pseudocode:
// create routes
// create navbar and show at all pages
// create pages
// get API data with axios, useEffect
// use state to hold data
// console.log(APIdata)
// send props to pages / global states (map, filter, id, ternary, short circuit)
// firebase

const API_KEY = "8f2ca002e986a1cafaf8f55e80fb42a7"; // process.env.REACT_APP_TMDB_KEY

const Main = () => {
  const [loading, setLoading] = useState(false);
  const [movieData, setMovieData] = useState([]);
  const [searchMovie, setSearchMovie] = useState("");
  const [searchData, setSearchData] = useState([]);
  const { currentUser } = useContext(AuthContext);

  const urlData = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
  const urlSearch = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

  console.log(API_KEY);

  const getMovieData = async () => {
    // setLoading(true);
    try {
      const response = await axios.get(urlData);
      setMovieData(response.data.results);
      console.log(movieData);
    } catch (error) {
      console.error(error);
    }
    // setLoading(false);
  };

  useEffect(() => {
    getMovieData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (searchMovie && currentUser) {
      try {
        const response = await axios.get(urlSearch + searchMovie);
        setSearchData(response.data.results);
        console.log(searchData);
      } catch (error) {
        console.error(error);
      }
    } 
    else if (!currentUser) {
      alert("Pls log in to search a movie");
      // toastWarnNotify("Pls log in to search a movie");
     }  else {
      alert('Pls, enter a text');
      // toastWarnNotify('Pls, enter a text');
    }
  };

  useEffect(() => {
    handleSubmit();
  }, []);

  return (
    <div className="main flex flex-col items-center justify-center gap-4 m-2 ">
      <div className="search ">
        <form action="" onSubmit={handleSubmit}>
          <FormGroup
            sx={{
              // how to customize prop for material ui
              display: "flex",
              flexDirection: "row",
            }}
          >
            <FormControl>
              <InputLabel htmlFor="my-input">Search Movie</InputLabel>
              <Input
                id="search-input"
                value={searchMovie}
                onChange={(e) => setSearchMovie(e.target.value)}
              />
            </FormControl>
            <Button type="submit" variant="contained">
              Search
            </Button>
          </FormGroup>
        </form>
      </div>
      <div className="singleCard grid lg:grid-cols-5 " >
        {" "}
        {/**/}
        {!searchMovie
          ? movieData.map((singleCard, index) => {
            return <MovieCard {...singleCard} key={index} />;  })
          : searchData.map((singleSearch, index) => {
            return <MovieCard {...singleSearch} key={index} />;
            })}
      </div>
    </div>
  );
};

export default Main;
