// import { Row, Col } from 'react-bootstrap' 
import './CardFlightDetailFinal.css'
import Card from 'react-bootstrap/Card';
import './../../../src/index.css'
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
import img1 from './../../assets/images/airplane.svg'
import img2 from './../../assets/images/Line2.svg'
import img3 from './../../assets/images/Wifi.svg'
import img4 from './../../assets/images/Line2.svg'
import img5 from './../../assets/images/ion_stopwatch.svg'
import img6 from './../../assets/images/Line2.svg'
import img7 from './../../assets/images/ion_fast-food.svg'
import img8 from './../../assets/images/Line2.svg'
import img9 from './../../assets/images/ic_round-airline-seat-recline-normal.svg'
import img10 from './../../assets/images/Line5.svg'
import img11 from './../../assets/images/Vector1.svg'
import img12 from './../../assets/images/Line6.svg'
import Emirates_line from './../../assets/images/Emirates-line.png'
const CardFlightDetailFinal = ({page}) => {
    const data = {
        title : 'Emirates A380 Airbus' ,
        price : '240 $' ,
        return : 'Return Wed, Dec 8' ,
        hour : '2h 28m' ,
        subtitle1 : 'Emirates' ,
        subtitle2 : 'Airbus A320' , 
        hour2 : '12:00 pm' ,
        location : 'Newark(EWR)' ,
        imgPart3 : [img1 , img2 , img3 , img4 , img5 , img6 , img7 , img8 , img9 ] ,
        imgPart4 : [img10 , img11 , img12]
    }
    useEffect (() => {
        Aos.init({duration : 2000})
    }, [])
    return (
<section className={page==='FlightBooking' ? 'Aya_Flight_Details_Final' : 'RH_Flight_Details_Final'}>  
      <Card className='cards' data-aos='fade-right'>
        <Card.Body>
        <div className='part1 d-flex justify-content-between'>
            <Card.Title className={page === 'FlightBooking' ? 'title' : 'd-none'}>Emirates A380 Airbus{data.title}</Card.Title>
            <span className={page === 'FlightBooking' ? 'span' : 'd-none'}>{data.price}</span>
        </div>
        <div className='part2 d-flex justify-content-between'>
            <Card.Title className='title'>{data.return}</Card.Title>
            <span className='span'>{data.hour}</span>
        </div>
        <div className='part3 d-flex '>
            <div className="part3-1 d-flex">
                <Card.Img className='image' src={Emirates_line} />
                <p className='p'>
                    <span className='span1'>{data.subtitle1}</span>
                    <span className='span2'> {data.subtitle2}</span>
                </p>
            </div>
            <div className="part3-2">
                {data.imgPart3.map((img,index) => (
                    <Card.Img key={index} src={img} className={`img${index+1}`} alt={`img${index+1}`} />   
                ))}
            </div>
        </div>
        <div className="part4">
            <div className="part4-1">
                <Card.Title className='span1'>{data.hour2}</Card.Title>
                <Card.Title className='span2'>{data.location}</Card.Title>
            </div>
            <div className="part4-2">
            {data.imgPart4.map((img,index) => (
                    <Card.Img key={index} src={img} className={`img${index+1}`} alt={`img${index+1}`} />   
                ))}
            </div> 
            <div className="part4-3">
                <Card.Title className='span3'>{data.hour2}</Card.Title>
                <Card.Title className='span4'>{data.location}</Card.Title>
            </div>
        </div>
        </Card.Body>
    </Card>
    </section>
    )
}

export default CardFlightDetailFinal