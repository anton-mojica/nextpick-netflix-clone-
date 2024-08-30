const API_KEY = "5154a6ab70de6ddbd62f8a7561971893";

const requests = {

    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetFlixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    // fetchGenres: `/genre/movie/list?api_key=${API_KEY}&language=en-US`
};
export default requests;
