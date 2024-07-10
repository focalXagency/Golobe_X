import React, { useState } from 'react';
import Favoritesmain from '../Favorites-main/Favoritesmain'
import './TabsHotelListing.css'
import chevrondown from '../../assets/images/NMchevrondown.svg'
import { Tab, Tabs } from 'react-bootstrap'
import FormWithOutTab from '../FormWithOutTab/FormWithOutTab'
import Accordion from '../Accordion/Accordion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSliders} from '@fortawesome/free-solid-svg-icons';
export default function TabsHotelListing() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };
    const filters = ['price', 'rating', 'freebies', 'amenities'];
    return (
        <section className='NM_HotelListing'>
            <div><FormWithOutTab /></div>
            <div className='NM_MainSection'>
                <div className='NM_filter'>
                <button className='MS-filterBtn' onClick={togglePopup}><FontAwesomeIcon icon={faSliders} size="lg" style={{color: "#ffffff",}} /> Filters</button>
                <p className='MS-filter'>Filters</p>
                <div data-aos="fade-right" className='MS-filterContent'>
                    <Accordion filters={filters} />
                    </div>
                </div>
                <div className='NM_Part2'>
                    <div className='NM_Tabs'>
                        <div className='NM_Head'>
                            <Tabs
                                defaultActiveKey="hotel"
                                id="uncontrolled-tab-example"
                                className="NM_tabs"
                            >
                                <Tab eventKey="hotel" title="Hotels" className='NM_Tap'>
                                    <div className="NM_LineInfo">
                                        <p>Showing 4 of <span> 257 places</span></p>
                                        <p className='NM_ParaN'>
                                            Sort by <b>Recommended</b>
                                            <img src={chevrondown} alt="chevronDown" />
                                        </p>
                                    </div>
                                    <Favoritesmain isListingPage={true} />
                                </Tab>
                                <Tab eventKey="motel" title="Motels" className='NM_Tap'>
                                    <div className="NM_LineInfo">
                                        <p>Showing 4 of <span> 51 places</span></p>
                                        <p className='NM_ParaN'>
                                            Sort by <b>Recommended</b>
                                            <img src={chevrondown} alt="chevronDown" />
                                        </p>
                                    </div>
                                    <Favoritesmain isListingPage={true} />
                                </Tab>
                                <Tab eventKey="resort" title="Resorts" className='NM_Tap'>
                                    <div className="NM_LineInfo">
                                        <p>Showing 4 of <span> 72 places</span></p>
                                        <p className='NM_ParaN'>
                                            Sort by <b>Recommended</b>
                                            <img src={chevrondown} alt="chevronDown" />
                                        </p>
                                    </div>
                                    <Favoritesmain isListingPage={true} />
                                </Tab>
                            </Tabs>

                        </div>
                        {/* <Favoritesmain isListingPage={true} /> */}
                    </div>
                    <input className='NM_btnListing' type="button" value="Show more results" />
                </div>
            </div>
            {isPopupOpen && (
                <div className='popup-overlay'>
                    <div className='popup-content'>
                        <button className='popup-close-btn' onClick={togglePopup}>Close</button>
                        <Accordion filters={filters} />
                    </div>
                </div>
            )}
        </section>
    )
}

