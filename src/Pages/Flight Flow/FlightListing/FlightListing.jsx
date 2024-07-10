import React from 'react';
import Navigation from '../../../Components/Nav/Nav';
import FormWithOutTab from '../../../Components/FormWithOutTab/FormWithOutTab';
import Footer from '../../../Components/Footer/Footer';
import FilterFlight from '../../../Components/FilterFlight/FilterFLight';
import './FlightListing.css';
import Newsletter from '../../../Components/Newsletter/Newsletter';
import TabsFlightListing from '../../../Components/TabsFlightListing/TabsFlightListing'

export default function FlightListing({ navButtons, navButtonsForMobile,navList }) {
  return (
    < >
        <Navigation buttons={navButtons} navMobile={navButtonsForMobile} isLandingPage={false} navList={navList} />
        <TabsFlightListing/>
        <Newsletter/>
        <Footer/>
    </>
  );
}
  