import React from "react";
import "./FavouritesMainFlight.css";
import syrianAirLogo from "../../assets/images/Syrianair.svg";
import chamWIngsLogo from "../../assets/images/Cham wings.svg";
import qatarAirwaysLogo from "../../assets/images/Qatar airways.svg";
import etihadLogo from "../../assets/images/Etihad.png";
import Checkbox from "@mui/material/Checkbox";
import listingLine from '../../assets/images/listingline.png'
import heart from '../../assets/images/heart.svg'
import { Link } from "react-router-dom";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function FavouritesMainFlight() {
  const flights = [
    {
      id: 1,
      rating: "4.2",
      status: "Very Good",
      reviews: "54 reviews",
      price: "104 $",
      departureTime: "12:00 pm",
      arrivalTime: "01:28 pm",
      duration: "2h 28m",
      stops: "non stop",
      route: "EWR-BNA",
      country: "Emirates",
      logo: syrianAirLogo,
      className: "syrianAirLogo",
      lineImg: listingLine,
    },
    {
        id: 2,
        rating: "4.2",
        status: "Very Good",
      reviews: "54 reviews",
      price: "104 $",
      departureTime: "12:00 pm",
      arrivalTime: "01:28 pm",
      duration: "2h 28m",
      stops: "non stop",
      route: "EWR-BNA",
      country: "Emirates",
      logo: chamWIngsLogo,
      className: "chamWIngsLogo",
      lineImg: listingLine,
    },
    {
        id: 3,
      airline: "Qatar Airways",
      rating: "4.2",
      status: "Very Good",
      reviews: "54 reviews",
      price: "104 $",
      departureTime: "12:00 pm",
      arrivalTime: "01:28 pm",
      duration: "2h 28m",
      stops: "non stop",
      route: "EWR-BNA",
      country: "Emirates",
      logo: qatarAirwaysLogo,
      className: "qatarAirwaysLogo",
      lineImg: listingLine,
    },
    {
        id: 4,
        airline: "Etihad Airways",
      rating: "4.2",
      status: "Very Good",
      reviews: "54 reviews",
      price: "104 $",
      departureTime: "12:00 pm",
      arrivalTime: "01:28 pm",
      duration: "2h 28m",
      stops: "non stop",
      route: "EWR-BNA",
      country: "Emirates",
      logo: etihadLogo,
      className: "etihadLogo",
      lineImg: listingLine,
    },
  ];
  
  const textRow = (items) => {
    return (
      <>
        {items.map((item, index) => (
          <div key={index} className="secRow">
            <Checkbox {...label} />
            <div className="textRow">
              <div>
                <p className="m-0">
                  {item.departureTime} - {item.arrivalTime}
                </p>
                <span>{item.country}</span>
              </div>
              <p className="m-0">{item.stops}</p>
              <div>
                <p className="m-0">{item.duration}</p>
                <span>{item.route}</span>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  };

  const firstHalf = flights.slice(0, 2);
  const secondHalf = flights.slice(2, 4);

  return (
    <div>
      {flights.map((item) => (
        <div key={item.id} className="AM_flightComponent">
          <img className={item.className} src={item.logo} alt="" />
          <div className="AM_content">
            <div className="firstRow">
              <div className="rate">
                <p className="rating">{item.rating}</p>
                <span className="review">
                  <b>{item.status}</b> {item.reviews}
                </span>
              </div>
              <div className="priceItem">
                <p className="captionPrice">starting from</p>
                <p className="price">{item.price}</p>
              </div>
            </div>
            {item.id === 1 && textRow(firstHalf)}
            {item.id === 2 && textRow(firstHalf)}
            {item.id === 3 && textRow(secondHalf)}
            {item.id === 4 && textRow(secondHalf)}
            <div className="foorterflightitem">
                <img className="AM_FooterLine" src={item.lineImg} alt="" />
                <div className="btnsFooterFlight">
                    <button className="favBtn"><img src={heart} alt="" /></button>
                    <Link className='AM_BtnLink' to={'/Golobe_X/flightflow/detail'}><button className="dealBtn">View Deals</button></Link>
                </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FavouritesMainFlight;
