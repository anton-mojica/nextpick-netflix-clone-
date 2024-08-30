import { useState, useEffect, useRef} from "react";
import axios from "../axios";
import './styles/Row.css'
import RowDetails from "./RowDetails";


const imgBaseUrl = "https://image.tmdb.org/t/p/original/";

const Row = ({title, fetchUrl, isLargeRow}) => {
    const [movies, setMovies] = useState([]);

    useEffect(()=> {
       const fetchData = async () => {
           const request = await axios.get(fetchUrl);
     
           setMovies(request.data.results);
    
           return request;
            
       }
       fetchData();
    }, [fetchUrl]);

    
    const [showDetails, setShowDetails] = useState(false);
    
    const [selectedMovie, setSelectedMovie] = useState({});
    
    const handleClick = (movie) => {
        setShowDetails(true);
        setSelectedMovie(movie);
    };

    const useClickOutside = (handler) => {
        const node = useRef();
        useEffect(() => {
            const maybeHandler = (e) => {
                if(!node.current.contains(e.target)) {
                    handler();
                }
                
            };
            document.addEventListener("mousedown", maybeHandler);
            window.addEventListener("scroll", maybeHandler);
    
            return () => {
                document.removeEventListener("mousedown", maybeHandler);
                window.removeEventListener("scroll", maybeHandler);
            };
        });
        return node;
    };

    const node = useClickOutside(() => {
        setShowDetails(false);
    });

    return (
        <div className="row">
            <h2 className="categoryTitle">{title}</h2>
            <div ref={node}>
            <div className="row__posters">
                {movies.map(movie => (
                    <img
                        onClick={() =>handleClick(movie)}
                        onBlur={() => setShowDetails(false) }
                        key={movie.id} 
                        className={`row__poster ${isLargeRow && "row__posterLarge"} `} 
                        src={`${imgBaseUrl}${movie.poster_path}`} 
                        alt={movie.name} 
                    />
                ))}
            </div>
            
            { showDetails &&
                <RowDetails 
                detail={selectedMovie} 
                imgBaseUrl = {imgBaseUrl} 
                />
            }
           
            </div>
        </div>
    )
}

export default Row
