import React from 'react';
import { connect } from 'react-redux';
import beautiful from '../assets/static/so-beautiful-cry.gif'
import '../assets/styles/Components/Alert.scss';

const Alert = () => {

  const handleClick = () =>{
    const alert = document.getElementById('alert')
    alert.classList.remove('display')
  }

  return (
    <>
      <div id='alert' className='alert-container'>
        <img className='alert-gif' src={beautiful} alt="" />
      <div className='close-container'>
        <button className='close-button' onClick={handleClick}>x</button>
      </div>
      </div>
    </>
  );
};


export default connect(null, null)(Alert);
