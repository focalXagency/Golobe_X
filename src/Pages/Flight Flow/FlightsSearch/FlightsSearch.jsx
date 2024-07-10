
import React from "react";
import FlightSearchBook from "../../../Components/FlightSearchBook/FlightSearchBook";
import FlightSearshMap from "../../../Components/FlightSearchMap/FlightSearshMap";
import HeroFlowSearch from "../../../Components/HeroFlowSearch/HeroFlowSearch";
import ShowPlaces from "../../../Components/ShowPlaces/ShowPlaces";
import Newsletter from "../../../Components/Newsletter/Newsletter";
import Footer from "../../../Components/Footer/Footer";
import Navigation from '../../../Components/Nav/Nav'

export default function FlightsSearch({navButtons,navButtonsForMobile,navList}) {
  return (
    <>
    <header>
    <Navigation buttons={navButtons} navMobile={navButtonsForMobile} isLandingPage={false} navList={navList} />
    </header>
    <main>
      <HeroFlowSearch />
      <ShowPlaces />
      <FlightSearshMap />
      <FlightSearchBook />
      <Newsletter />
    </main>
      <Footer />
    </>
  );
}
