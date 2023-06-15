import React from 'react'
import '../styling/Header.css'

function Header() {
  return (
    <div className='header'>
      <div className='innerHeader'>
        <a
          className='forecastingTag'
          target="_blank"
          rel="noopener noreferrer"
          href='https://docs.google.com/spreadsheets/d/1Iuzp21710Fs3MCrxZodhFMTycOZyZjc8Xi1IiBSAIrs/edit#gid=1114722941'>FORECASTING
        </a>
        <p className='innerLine'/>
        <a
          className='contactTag'
          href=''>CONTACT</a>
      </div>
    </div>
  )
}

export default Header