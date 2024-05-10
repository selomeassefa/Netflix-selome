import "./banner.css";
import Axios from "../../utils/Axios";
import { useEffect, useState } from "react";
import fetchData from "../../utils/Requests";

const Banner = () => {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    async function dataFetch() {
      try {
        const request = await Axios.get(fetchData.FetchTopRatedMovies);
        const randomNumber = Math.random()
        const index = Math.floor(randomNumber * request.data.results.length);
        setMovie(request.data.results[index]);
      } catch (err) {
        console.log(err);
      }
    }
    dataFetch();
  }, []);
    function truncate(str, n) {
      return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }
  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bannerContents">
        <h1 className="bannerTitle">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="bannerButtons">
          <button className="bannerButton play">Play</button>
          <button className="bannerButton">My List</button>
        </div>
        <h1 className="bannerDescription">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className="bannerFadeBottom" />
    </div>
  );
};

export default Banner;