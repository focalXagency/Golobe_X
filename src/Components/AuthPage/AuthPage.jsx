import React, { useEffect } from 'react';
import './AuthPage.css';
import ImageSlider from '../ImageSlider/ImageSlider';
import ImageLogo from '../../assets/images/NMGroup.svg';
import facebook from "../../assets/images/NMfacebook.svg";
import google from "../../assets/images/NMgoogle.svg";
import apple from "../../assets/images/NMapple.svg";
import Back from '../../assets/images/NMBack.svg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const AuthPage = ({ FormComponent, isSignUp, isAddPayment }) => {
  useEffect(() => {
    AOS.init({
        duration: 1300,
        once: true,
    });
    AOS.refresh();
}, []);
  return (
    <div className={`NM_AuthPage ${isSignUp || isAddPayment ? 'signup' : 'login'}`} >
      <div className={`NM_FormContainer ${isSignUp || isAddPayment ? 'signup' : 'login'}`} 
      data-aos={isSignUp || isAddPayment ? 'fade-left' : 'fade-right'}>
          <img src={ImageLogo} alt="logo" />
          <FormComponent facebook={facebook} google={google} apple={apple} Back={Back}/>
      </div>
      <div className={`NM_ImageContainer ${isSignUp || isAddPayment ? 'signup' : 'login'}`} 
      data-aos={isSignUp || isAddPayment ? 'fade-right' : 'fade-left'}>
          <ImageSlider />
      </div>
    </div>
  );
};

export default AuthPage;

