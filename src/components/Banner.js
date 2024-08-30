import { useState, useEffect } from "react";
import axios from "../axios";
import requests from "../requests";
import './styles/Banner.css'
import { FaPlay, FaList } from "react-icons/fa";

const Banner = () => {
    const [movie, setMovie] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(requests.fetchNetFlixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length -1)
                ]);
               
            return request;
        }
       
        fetchData();
    }, []);

    // console.log(movie);
    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    };

    return (
        <header className="banner"
        style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition: "center center"
        }}
        >
            <div className="banner__contents">
                <h1 className="banner__title">{movie?.title || movie?.name || movie?.orinal_name}</h1>
                <div className="banner__buttons">
                    <button className="banner__button active"><FaPlay style={{verticalAlign:'text-top',marginRight: '6px'}}/>Play</button>
                    <button className="banner__button"><FaList style={{verticalAlign:'text-top',marginRight: '6px'}}/>My List</button>
                </div>
                <div className="banner__description">
                    <p>{truncate(movie?.overview, 150)}</p>
                    </div>
            </div>
            <div className="banner__fade"></div>
        </header>
    )
}

export default Banner
