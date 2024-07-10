import React from 'react'
import TabsHotelListing from '../../../Components/TabsHotelListing/TabsHotelListing'
import Navigation from '../../../Components/Nav/Nav'
import Newsletter from '../../../Components/Newsletter/Newsletter'
import Footer from '../../../Components/Footer/Footer'


export default function HotelListing({ navButtons, navButtonsForMobile,navList }) {
  return (
    <>
      <Navigation buttons={navButtons} navMobile={navButtonsForMobile} isLandingPage={false} navList={navList}/>
      <TabsHotelListing />
      <Newsletter />
      <Footer />
    </>

  )
}

