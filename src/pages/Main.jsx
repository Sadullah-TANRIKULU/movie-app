import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

// create routes
// create pages
// get API data with axios, useEffect
// use state to hold data
// console.log(APIdata)
// send props to pages / global states (map, filter, id, ternary, short circuit)
// create navbar and show at all pages
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
  <div className="main">
    <button type="submit" onClick={() => getMovieData()} >Submit</button>
  </div>
  );
};

export default Main;
