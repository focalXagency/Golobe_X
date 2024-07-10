import React from 'react'
import './Favorites.css'
import Navigation from '../../../Components/Nav/Nav'
import Favoriteshead from '../../../Components/Favorites-head/Favoriteshead'
import Favoritesmain from '../../../Components/Favorites-main/Favoritesmain'
import Footer from '../../../Components/Footer/Footer'
import Newsletter from '../../../Components/Newsletter/Newsletter'
export default function Favorites({navButtons, navButtonsForMobile, navList}) {
  return (
    <section className='MH-favorites'>
      <Navigation buttons={navButtons} navMobile={navButtonsForMobile} isLandingPage={false} navList={navList} />
      <div className="MH-favorites-content">
      <Favoriteshead/>
      <Favoritesmain/>
      </div>
      <div className='MH-Newsletter'>
        <Newsletter/>
        </div>
      <Footer/>
    </section>
  )
}