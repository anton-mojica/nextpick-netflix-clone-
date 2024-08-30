import Row from './components/Row';
import Banner from './components/Banner';
import NavBar from './components/NavBar';
import './App.css';
import requests from './requests';

function App() {
	return (
		<div className="App">
		<NavBar/>
		<Banner/>
		<Row 
		title="NEXTPICKS ORIGNALS"
		fetchUrl={requests.fetchNetFlixOriginals}
		isLargeRow
		/>
		<Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
		<Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
		<Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
		<Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
		<Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
		<Row title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies}/>
		<Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
		{/* <Row title="Genre" fetchUrl={requests.fetchGenres} /> */}
		</div>
	);
}

export default App;
