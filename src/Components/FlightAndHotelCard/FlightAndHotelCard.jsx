import "./FlightAndHotelCard.css"
import arrow from "./../../assets/images/Vector (3).svg"
import { useNavigate } from 'react-router-dom';
export default function FlightAndHotelCard(props) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(props.route);
  };
  return (
    <>
      <div className="MS-FlightHotelCard" style={{ backgroundImage: `url(${props.img})` }} data-aos={props.animation}>
        <h2>{props.heading}</h2>
        <p>{props.text}</p>
        <div className="MS-iconbtn">
          <button onClick={handleClick}><img src={arrow} alt="arrow" />{props.btn}</button>
        </div>
      </div>
    </>
  )
}
