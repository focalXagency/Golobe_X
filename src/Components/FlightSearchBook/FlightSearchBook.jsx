import React, { useEffect } from 'react'
import './FlightSearchBook.css'
import {  Row } from 'react-bootstrap'
import'aos/dist/aos.css'
import Aos from 'aos'
import travel1 from '../../assets/images/Travel-1.png'
import travel2 from '../../assets/images/Travel-2.png'
import travel3 from '../../assets/images/Travel-3.png'
import travel4 from '../../assets/images/Travel-4.png'

export default function FlightSearchBook () {
const data =[
        {
        title:"Melbourne",
        paragraf:"An amazing journey",
        sale:"700$",
        class:"OS-Travel OS-Travel1"
        },
        {
        title:"Paris",
        paragraf:"A Paris Adventure",
        sale:"600$",
         class:"OS-Travel OS-Travel2"
        },
        {
         title:"London",
         paragraf:"London eye adventure",
         sale:"350$",
          class:"OS-Travel OS-Travel3"
        }, 
        {
        title:"Columbia",
        paragraf:"Amazing streets",
        sale:"700$",
        class:"OS-Travel OS-Travel4"
        },
];

const data2=[ {img: travel3,
     class:" img1 img2"},
    {img: travel4,  
        class:" img img2"},  
   ]
   const data3=[ {img: travel1,
    class:" img1 "},
   {img:travel2,  
       class:" img  img4"},  
  ]
  useEffect(()=>{Aos.init();},[])
  return (
    <>
<section className='OS_Travel_Section' data-aos="fade-up" data-aos-easing="linear"
     data-aos-duration="1500">
  <div className='OS_oone_Title ' data-aos="fade-up" data-aos-easing="linear"
     data-aos-duration="1500">
            <div className='OS_Title_Book'>
            <h3>Fall into travel</h3>
            <p>Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got the travel tools to get you to your  destination.</p>
           </div>
           <div className='OS_Button_Book'>
           <button>See All</button>
           </div>
     </div>
 <Row className='OS_Travel_R' data-aos="fade-up" data-aos-easing="linear"
     data-aos-duration="1500"> {data.map((item)=>{ 
                return<>
             <div className={item.class} data-aos="flip-left" data-aos-easing="linear"
     data-aos-duration="3000">
         <div className='OS_Travel_T'>
            <div className='OS-TR'>
                <h6 className='OS-Tr-h'>{item.title}</h6>
            </div>
            <div className='OS_visibility'>
            <div className='OS_Travel_Title'>
            <p className='OS-Tr-p'>{item.paragraf}</p>
            <p className='OS_Sale'>{item.sale}</p>
            </div> 
              <div className='OS-btn-Book'><button>Book Flight</button></div>
             </div>
             </div>
         </div>
 </>
})}
         </Row>
   </section>
<section className=''>
   <div className='OS_one_Title MS-padding' data-aos="fade-up" data-aos-easing="linear"
     data-aos-duration="1500">
            <div className='OS_Title_Book'>
            <h3>Fall into travel</h3>
            <p>Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got the travel tools to get you to your  destination.</p>
           </div>
           <div className='OS_Button_Book'>
           <button>See All</button>
           </div>
     </div>
<div className='OS-BackPacking'data-aos="fade-up" data-aos-easing="linear"
     data-aos-duration="1500">
  
<div className='OS-one-Backing'>
        <div className='OS-Back_Par'> 
        <h1>Backpacking Sri Lanka</h1>
        <div className='OS-paragraf'>
         <p>From</p>
         <h6>700 $</h6>
        </div>
        </div>
        <p className='OS-P'>Traveling is a unique experience as it's the best way to unplug from the pushes and pulls of daily life. It helps us to forget about our problems, frustrations, and fears at home. During our journey, we experience life in different ways. We explore new places, cultures, cuisines, traditions, and ways of living.</p>
       <div className='OS_div_Btn'> <button className='OS_btn_Book'>Book Flight</button></div>
    </div>
 <div className='OS-two-Backing'>
 <div className='OS_img_Travel'>{data3.map((item)=>{
        return<>
    <img className={item.class} src={item.img} alt="travel" data-aos="flip-left" data-aos-easing="linear"
     data-aos-duration="3000"/>
 </>})}</div>
 <div className='OS_img_Travel'>{data2.map((item)=>{
        return<>
    <img className={item.class} src={item.img} alt="travel" data-aos="flip-left" data-aos-easing="linear"
     data-aos-duration="3000" />
 </>})}</div>
    </div>
        
     </div>
</section>
    </>
  )
}


