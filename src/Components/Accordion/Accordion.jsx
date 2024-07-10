import React, { useState } from 'react';
import './Accordion.css';
import arrowTop from './../../assets/images/arrowtop.svg';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Accordion({ filters }) {
  const [openItems, setOpenItems] = useState({
    price: false,
    departureTime: false,
    rating: false,
    freebies: false,
    amenities: false,
    airlines: false,
    trips: false,
  });

  const toggleOpen = (item) => {
    setOpenItems(prevState => ({
      ...prevState,
      [item]: !prevState[item]
    }));
  };

  const [valueprice, setValuePrice] = useState([50, 1200]);
  const handleChangeprice = (event, newValue) => {
    setValuePrice(newValue);
  };

  const formatTime = (value) => {
    const hour = Math.floor(value);
    const minute = value % 1 === 0.5 ? '30' : '00';
    const period = hour < 12 ? 'AM' : 'PM';
    const formattedHour = hour % 12 === 0 ? 12 : hour % 12;
    return `${formattedHour}:${minute}${period}`;
  };

  const [valueTime, setValueTime] = useState([0, 24]);
  const handleChangeTime = (event, newValue) => {
    setValueTime(newValue);
  };

  return (
    <>
      {filters.includes('price') && (
        <div className="accordion-item">
          <div className="accordion-title" onClick={() => toggleOpen('price')}>
            <div className='MS-headAcord'>
              <p>Price</p>
              <img src={arrowTop} alt="arrowTop" className={`arrow ${openItems.price ? 'open' : ''}`} />
            </div>
          </div>
          {openItems.price && (
            <div className="accordion-content">
              <Box sx={{ width: { xs: 200, sm: 250, md: 300 } }}>
                <Typography id="range-slider" gutterBottom>
                </Typography>
                <Slider
                  value={valueprice}
                  onChange={handleChangeprice}
                  valueLabelDisplay="auto"
                  min={50}
                  max={1200}
                  sx={{
                    '& .MuiSlider-thumb': {
                      color: '#FF8500',
                    },
                    '& .MuiSlider-track': {
                      color: '#112211',
                    },
                    '& .MuiSlider-rail': {
                      color: 'grey.400',
                    },
                  }}
                />
                <Box display="flex" justifyContent="space-between">
                  <Typography>50$</Typography>
                  <Typography>1200$</Typography>
                </Box>
              </Box>
            </div>
          )}
        </div>
      )}
      {filters.includes('departureTime') && (
        <div className="accordion-item">
          <div className="accordion-title" onClick={() => toggleOpen('departureTime')}>
            <div className='MS-headAcord'>
              <p>Departure Time</p>
              <img src={arrowTop} alt="arrowTop" className={`arrow ${openItems.departureTime ? 'open' : ''}`} />
            </div>
          </div>
          {openItems.departureTime && (
            <div className="accordion-content">
              <Box sx={{ width: { xs: 200, sm: 250, md: 300 } }}>
                <Typography id="range-slider" gutterBottom>
                </Typography>
                <Slider
                  value={valueTime}
                  onChange={handleChangeTime}
                  valueLabelDisplay="auto"
                  min={0}
                  max={24}
                  step={0.5}
                  valueLabelFormat={formatTime}
                  sx={{
                    '& .MuiSlider-thumb': {
                      color: '#FF8500',
                    },
                    '& .MuiSlider-track': {
                      color: '#112211',
                    },
                    '& .MuiSlider-rail': {
                      color: 'grey.400',
                    },
                  }}
                />
                <Box display="flex" justifyContent="space-between">
                  <Typography>{formatTime(valueTime[0])}</Typography>
                  <Typography>{formatTime(valueTime[1])}</Typography>
                </Box>
              </Box>
            </div>
          )}
        </div>
      )}
      {filters.includes('rating') && (
        <div className="accordion-item">
          <div className="accordion-title" onClick={() => toggleOpen('rating')}>
            <div className='MS-headAcord'>
              <p>Rating</p>
              <img src={arrowTop} alt="arrowTop" className={`arrow ${openItems.rating ? 'open' : ''}`} />
            </div>
          </div>
          {openItems.rating && (
            <div className="accordion-content">
              <div className='MS-rating'>
                <p>0+</p>
                <p>1+</p>
                <p>2+</p>
                <p>3+</p>
                <p>4+</p>
              </div>
            </div>
          )}
        </div>
      )}
      {filters.includes('freebies') && (
        <div className="accordion-item">
          <div className="accordion-title" onClick={() => toggleOpen('freebies')}>
            <div className='MS-headAcord'>
              <p>Freebies</p>
              <img src={arrowTop} alt="arrowTop" className={`arrow ${openItems.freebies ? 'open' : ''}`} />
            </div>
          </div>
          {openItems.freebies && (
            <div className="accordion-content">
              <form className='MS-form'>
                <div className='MS-check-box'>
                  <input type="checkbox" name="option1" value="Option1" id='input1' />
                  <label htmlFor="input1" className='MS-lable'>Free breakfast</label>
                </div>
                <div className='MS-check-box'>
                  <input type="checkbox" name="option1" value="Option1" id='input2' />
                  <label htmlFor="input2" className='MS-lable'>Free parking</label>
                </div>
                <div className='MS-check-box'>
                  <input type="checkbox" name="option1" value="Option1" id='input3' />
                  <label htmlFor="input3" className='MS-lable'>Free internet</label>
                </div>
                <div className='MS-check-box'>
                  <input type="checkbox" name="option1" value="Option1" id='input4' />
                  <label htmlFor="input4" className='MS-lable'>Free airport shuttle</label>
                </div>
                <div className='MS-check-box'>
                  <input type="checkbox" name="option1" value="Option1" id='input5' />
                  <label htmlFor="input5" className='MS-lable'>Free cancellation</label>
                </div>
              </form>
            </div>
          )}
        </div>
      )}
      {filters.includes('amenities') && (
        <div className="accordion-item">
          <div className="accordion-title" onClick={() => toggleOpen('amenities')}>
            <div className='MS-headAcord'>
              <p>Amenities</p>
              <img src={arrowTop} alt="arrowTop" className={`arrow ${openItems.amenities ? 'open' : ''}`} />
            </div>
          </div>
          {openItems.amenities && (
            <div className="accordion-content">
              <div className='MS-check-box'>
                <input type="checkbox" name="option1" value="Option1" id='check1' />
                <label htmlFor="check1" className='MS-lable'>24hr front desk</label>
              </div>
              <div className='MS-check-box'>
                <input type="checkbox" name="option1" value="Option1" id='check2' />
                <label htmlFor="check2" className='MS-lable'>Air-conditioned</label>
              </div>
              <div className='MS-check-box'>
                <input type="checkbox" name="option1" value="Option1" id='check3' />
                <label htmlFor="check3" className='MS-lable'>Fitness</label>
              </div>
              <div className='MS-check-box'>
                <input type="checkbox" name="option1" value="Option1" id='check4' />
                <label htmlFor="check4" className='MS-lable'>Pool</label>
              </div>
              <p className='MS-RedPargraph'>+24 more</p>
            </div>
          )}
        </div>
      )}
      {filters.includes('airlines') && (
        <div className="accordion-item">
          <div className="accordion-title" onClick={() => toggleOpen('airlines')}>
            <div className='MS-headAcord'>
              <p>Airlines</p>
              <img src={arrowTop} alt="arrowTop" className={`arrow ${openItems.airlines ? 'open' : ''}`} />
            </div>
          </div>
          {openItems.airlines && (
            <div className="accordion-content">
              <form className='MS-form'>
                <div className='MS-check-box'>
                  <input type="checkbox" name="airline" value="Emirates" id='airline1' />
                  <label htmlFor="airline1" className='MS-lable'>Emirates</label>
                </div>
                <div className='MS-check-box'>
                  <input type="checkbox" name="airline" value="Fly Dubai" id='airline2' />
                  <label htmlFor="airline2" className='MS-lable'>Fly Dubai</label>
                </div>
                <div className='MS-check-box'>
                  <input type="checkbox" name="airline" value="Qatar" id='airline3' />
                  <label htmlFor="airline3" className='MS-lable'>Qatar</label>
                </div>
                <div className='MS-check-box'>
                  <input type="checkbox" name="airline" value="Etihad" id='airline4' />
                  <label htmlFor="airline4" className='MS-lable'>Etihad</label>
                </div>
              </form>
            </div>
          )}
        </div>
      )}
      {filters.includes('trips') && (
        <div className="accordion-item">
          <div className="accordion-title" onClick={() => toggleOpen('trips')}>
            <div className='MS-headAcord'>
              <p>Trips</p>
              <img src={arrowTop} alt="arrowTop" className={`arrow ${openItems.trips ? 'open' : ''}`} />
            </div>
          </div>
          {openItems.trips && (
            <div className="accordion-content">
              <form className='MS-form'>
                <div className='MS-check-box'>
                  <input type="checkbox" name="trip" value="Round trip" id='trip1' />
                  <label htmlFor="trip1" className='MS-lable'>Round trip</label>
                </div>
                <div className='MS-check-box'>
                  <input type="checkbox" name="trip" value="One Way" id='trip2' />
                  <label htmlFor="trip2" className='MS-lable'>One Way</label>
                </div>
                <div className='MS-check-box'>
                  <input type="checkbox" name="trip" value="Multi-City" id='trip3' />
                  <label htmlFor="trip3" className='MS-lable'>Multi-City</label>
                </div>
                <div className='MS-check-box'>
                  <input type="checkbox" name="trip" value="My Dates Are Flexible" id='trip4' />
                  <label htmlFor="trip4" className='MS-lable'>My Dates Are Flexible</label>
                </div>
              </form>
            </div>
          )}
        </div>
      )}
    </>
  );
}
