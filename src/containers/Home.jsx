import React, { useState } from 'react';
import { connect } from 'react-redux';
import Alert from './Alert';
import '../assets/styles/components/Home.scss';

const Home = (props) => {

  const handleClick = (event) => {
    console.log(window.innerWidth)
    const alert = document.getElementById('alert')
    alert.classList.add('display')
  };

  return (
    <>
      <Alert/>
      <section className='login'>
        <section className=''>
          
            <button  className='login__container' onClick={() => handleClick()}>Presiona para saber como cantan Lili y Ale</button>

        </section>
      </section>
    </>
  );
};


export default connect(null, null)(Home);
