import React from 'react'
import HotelListingOne from '../../../Components/HotelListingOne/HotelListingOne'
import HotelListingTow from '../../../Components/HotelListingTwo/HotelListingTow'
import HotelListingThree from '../../../Components/HotelListingThree/HotelListingThree'
import HotalMap from '../../../Components/HotalMap/HotalMap'
import Amenities from '../../../Components/Amenities/Amenities'
import Reviews from '../../../Components/Reviews/Reviews'
import Navigation from '../../../Components/Nav/Nav'
export default function HotelDetail({navButtons, navButtonsForMobile, navList}) {
  return (
    <div>
      <Navigation buttons={navButtons} navMobile={navButtonsForMobile} isLandingPage={false} navList={navList} />
      <HotelListingOne/>
      < HotelListingTow/>
      <HotelListingThree/>
      <HotalMap/>
      <Amenities/>
      <Reviews/>
    </div>

  )
}
