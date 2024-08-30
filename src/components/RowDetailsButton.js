import './styles/RowDetailButtons.css';
import { FaPlay,FaDownload,FaTrailer } from "react-icons/fa";
const RowDetailsButton = () => {
    return (
        <div className="detail__buttons">
            <button><FaPlay style={{verticalAlign:'text-top',marginRight: '6px'}}/>Play</button>
            <button><FaDownload style={{verticalAlign:'text-top',marginRight: '6px'}}/> Download</button>
            <button><FaTrailer style={{verticalAlign:'text-top',marginRight: '6px'}}/>Trailer</button>
        </div>
    )
}

export default RowDetailsButton
