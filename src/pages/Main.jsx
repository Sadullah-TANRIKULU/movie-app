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

  const urlData = `https://api.themoviedb.org/3/discover/movie?api_key=8f2ca002e986a1cafaf8f55e80fb42a7`;

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

  return (
    <div className="main flex flex-col items-center justify-center gap-4 m-2 ">
      <div className="search">
        <FormGroup>
          <FormControl>
            <InputLabel htmlFor="my-input">Search Movie</InputLabel>
            <Input id="search-input" />
          </FormControl>
          <Button type="submit" variant="contained">
            Search
          </Button>
        </FormGroup>
      </div>
      <div className="singleCard grid lg:grid-cols-4 "> {/**/}

      {movieData?.map((singleCard, index)=> {
        return <MovieCard {...singleCard} key={index} />;
      })}
      </div>
      
    </div>
  );
};

export default Main;
