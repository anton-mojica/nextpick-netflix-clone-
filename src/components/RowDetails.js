import './styles/RowDetails.css';
import { FaStar } from "react-icons/fa";
import RowDetailsButton from './RowDetailsButton';


const RowDetails = ({detail, imgBaseUrl}) => {
	 	const release_date = detail?.release_date || detail?.first_air_date;
		const release_year = new Date().getFullYear(release_date);
		
		return (
			<>
				<div>
					<div className="row__details">
						<div className="row__detail_poster">
							<img width="150" 
							src={`${imgBaseUrl}${detail?.poster_path}`}
							alt={detail?.name}
							/>
						</div>
						<div className="row__detail_content">
							<h1 className="detail__title">{detail?.title || detail?.name || detail?.orinal_name}</h1>
							<span>{release_year}</span>
							<span><FaStar/>{detail?.vote_average}</span>
							<p className="detail__desc">{detail?.overview}</p>
							<RowDetailsButton/>
						</div>
						
					</div>
					
				</div>
				
			</>
		)
}

export default RowDetails
