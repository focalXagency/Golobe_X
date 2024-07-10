import React from 'react'
import Hero from "../Hero/Hero"
import"./HeroFlowSearch.css"
export default  function HeroFlowSearch  (){
    const title ="Make your travel whishlist, we’ll do the rest";
    const para ="Special offers to suit your plan";
    const className="MS_HeroSearch OS_HeroSearch"
  return (
    <>
       <Hero title={title} para={para} className={className}  disableAnimation = {true}/>
    </>
  )
}


