import React from 'react'
import './FlightDetail.css';
//import FlightDetailsHero from '../../Components/FlightDetailsHero/FlightDetailsHero';
import FlightDetailsHero from '../../../Components/FlightDetailsHero/FlightDetailsHero';
import EmiratesAirlinesPolicies from '../../../Components/EmiratesAirlinesPolicies/EmiratesAirlinesPolicies';
import FlightDeatailsGalary from '../../../Components/FlightDeatailsGalary/FlightDeatailsGalary';
import Footer from '../../../Components/Footer/Footer'
import Navigation from '../../../Components/Nav/Nav';
import Newsletter from '../../../Components/Newsletter/Newsletter';
import CardFlightDetailFinal from '../../../Components/CardFlightDetailFinal/CardFlightDetailFinal';
export default function FlightDetail({navButtons, navButtonsForMobile, navList}) {
  return (
    <section className='RH_FlightDetail'>
      <Navigation buttons={navButtons} navMobile={navButtonsForMobile} isLandingPage={false} navList={navList} />
      <FlightDetailsHero />
      <FlightDeatailsGalary />
      <EmiratesAirlinesPolicies />
<CardFlightDetailFinal />
<CardFlightDetailFinal />
<div style={{marginBottom:'80px'}}></div>
<Newsletter />
      <Footer />




    </section>
  )
}
