import { useState } from "react";
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

// pseudocode:
// create routes
// create navbar and show at all pages
// create pages
// get API data with axios, useEffect
// use state to hold data
// console.log(APIdata)
// send props to pages / global states (map, filter, id, ternary, short circuit)
// firebase

const Main = () => {
  const [movieData, setMovieData] = useState([]);
  const [searchMovie, setSearchMovie] = useState("");
  const [searchData, setSearchData] = useState([]);

  const urlData = `https://api.themoviedb.org/3/discover/movie?api_key=8f2ca002e986a1cafaf8f55e80fb42a7`;
  const urlSearch = `https://api.themoviedb.org/3/search/movie?api_key=8f2ca002e986a1cafaf8f55e80fb42a7&query=${searchMovie}`;

  const getMovieData = async () => {
    try {
      const response = await axios.get(urlData);
      setMovieData(response.data.results);
      console.log(movieData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMovieData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(urlSearch);
      setSearchData(response.data.results);
      console.log(searchData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleSubmit();
  }, [searchMovie]);

  return (
    <div className="main flex flex-col items-center justify-center gap-4 m-2 ">
      <div className="search">
        <FormGroup>
          <FormControl>
            <InputLabel htmlFor="my-input">Search Movie</InputLabel>
            <Input
              id="search-input"
              value={searchMovie}
              onChange={(e) => setSearchMovie(e.target.value)}
            />
          </FormControl>
          <Button type="submit" variant="contained" onClick={handleSubmit}>
            Search
          </Button>
        </FormGroup>
      </div>
      <div className="singleCard grid lg:grid-cols-4 ">
        {" "}
        {/**/}
        {searchMovie
          ? searchData?.map((singleSearch, index) => {
              return <MovieCard {...singleSearch} key={index} />;
            })
          : movieData?.map((singleCard, index) => {
              return <MovieCard {...singleCard} key={index} />;
            })}
      </div>
    </div>
  );
};

export default Main;
