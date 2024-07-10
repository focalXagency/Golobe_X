import React from 'react';
import './Hero.css';

export default function Hero({ title, para, head2, className, disableAnimation = false }) {
  return (
    <section className={className}>
      <h2 className='NM_cssanimation NM_sequence NM_leBlurInTop'>{head2}</h2>
      <h1 className='NM_cssanimation NM_sequence NM_leBlurInRight'>
        {disableAnimation
          ? title
          : title.split("").map((char, index) => (
            <span key={index}>{char}</span>
          ))
        }
      </h1>
      <p className='NM_cssanimation NM_sequence NM_leBlurInBottom'>
        {para}
      </p>
    </section>
  );
}