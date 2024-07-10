import React from 'react'
import './TapFlights.css'
import Emirates from '../../assets/images/Emirates-line.png'
import linel from '../../assets/images/LineL.svg'
import DateIcon from '../../assets/images/calendar.svg'
import HourIcon from '../../assets/images/timmer.svg'
import GateIcon from '../../assets/images/doorclosed.svg'
import SateIcon from '../../assets/images/airlineseat.svg'
import btnContent2 from '../../assets/images/chevron_forward.svg'
export default function TapFlights  () {
    const OSArrowFlight=[{
        img:Emirates,
        paragraf:'Newark(EWR)',
        number1:'12:00 pm',
        linel:linel,
        number2:'6:00 pm',
        dateIcon:DateIcon,
        dateText:'Date',
        Date:'12-11-22',
        HourIcon:HourIcon,
        time:'Flight time',
        TimeText:'Newark(EWR)',
        GateIcon:GateIcon,
        gate:'Gate',
        GateText:'A12',
        SateIcon:SateIcon ,
        sate:'Seat no.',
        SateText:'128',
        btnContent1:'Download Ticket',
        btnContent2:btnContent2
    },
    {
    img:Emirates,
    paragraf:'Newark(EWR)',
    number1:'12:00 pm',
    linel:linel,
    number2:'6:00 pm',
    dateIcon:DateIcon,
    dateText:'Date',
    Date:'12-11-22',
    HourIcon:HourIcon,
    time:'Flight time',
    TimeText:'Newark(EWR)',
    GateIcon:GateIcon,
    gate:'Gate',
    GateText:'A12',
    SateIcon:SateIcon,
    sate:'Seat no.',
    SateText:'128',
    btnContent1:'Download Ticket',
    btnContent2:btnContent2
    },
    {
    img:Emirates,
    paragraf:'Newark(EWR)',
    number1:'12:00 pm',
    linel:linel,
    number2:'6:00 pm',
    dateIcon:DateIcon,
    dateText:'Date',
    Date:'12-11-22',
    HourIcon:HourIcon,
    time:'Flight time',
    TimeText:'Newark(EWR)',
    GateIcon:GateIcon,
    gate:'Gate',
    GateText:'A12',
    SateIcon: SateIcon,
    sate:'Seat no.',
    SateText:'128',
    btnContent1:'Download Ticket',
    btnContent2:btnContent2}
    ]
  return (
    <>
       <div className='OS-big-Style'>
           {OSArrowFlight.map((item ,index)=>{
             return<div className='OS-Fl-Style'>
                <div className='OS-Emirates-line'key={index} > <img  src={item.img} alt="Emirates-line" /></div>
                <div className=' OS-Text-Style'>
                    <div className='OS-Text'>
                        <p className='OS-Text-par'>{item.paragraf}</p>
                        <h4 className='OS-Text-number'>{item.number1}</h4>
                    </div>
                    <div className='OS-Line-img'><img src={item.linel}alt="Line" /></div>
                    <div>
                    <p className='OS-Text-par'>{item.paragraf}</p>
                    <h4 className='OS-Text-number'>{item.number2}</h4>
                    </div>
                </div>
                <div className='OS-Date-All'>
                    <div className='OS-Date-padding'>
                    <div className='OS-Date-flex'>
                       <div  className='OS-HourIcon'> <img src={item.dateIcon} alt="dateIcon" /></div>
                        <div className='OS-Text-padding'>
                        <span className='OS-Text-para'>{item.dateText} </span>
                        <span className='OS-Text-date'>{item.Date}</span>
                      </div>
                    </div>
                    <div className='OS-Date-flex'>
                       <div className='OS-HourIcon'><img src={item.HourIcon} alt="dateIcon" /></div>
                        <div className='OS-Text-padding'>
                        <span className='OS-Text-para'>{item.time}</span>
                        <span className='OS-Text-date'>{item. TimeText}</span>
                        </div>
                    </div>
                </div>
                <div className='OS-Date-padding'>
                    <div className='OS-Date-flex'>
                       <div  className='OS-HourIcon'> <img src={item.GateIcon} alt="dateIcon" /></div>
                        <div className='OS-Text-padding'>
                        <span className='OS-Text-para'>{item.gate} </span>
                        <span className='OS-Text-date'>{item.GateText}</span>
                      </div>
                    </div>
                    <div className='OS-Date-flex'>
                       <div className='OS-HourIcon'><img src={item.SateIcon} alt="dateIcon" /></div>
                        <div className='OS-Text-padding'>
                        <span className='OS-Text-para'>{item.sate}</span>
                        <span className='OS-Text-date'>{item.SateText}</span>
                        </div>
                    </div>
                </div>
                </div>
                <div className='OS-Flight-btn'>
                    <button className='OS-btn1'>{item.btnContent1}</button>
                    <button  className='OS-btn2'><img src={item.btnContent2}alt="" /></button>
                </div>
             </div>})}
       </div>
            
    </>
  )
}


