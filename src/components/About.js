import '../styling/About.css'

import React from 'react'

function About() {
  return (
    <div className='about'>
      <div className='aboutImage'>
        <img src={require('../styling/aboutImg.jpg')} alt='About'/>
      </div>
      <div className='rightColumn'>
        <div>
          <h2>MEET</h2>
          <h2>MADELYN</h2>
        </div>
        <div>
          <p>TAKE A LOOK THROUGH THIS ACQUISITION-FOCUSED</p>
          <p>DIGITAL MEDIA STRATEGY FOR MARKETING CAMPAIGNS.</p>
        </div>
        <div>
          <p>MY INTENTION IS TO ENGAGE, EDUCATE, DELIGHT, AND DRIVE BUSINESS GROWTH IN</p>
          <p>ALIGNMENT WITH COMPANY GOALS.</p>
        </div>
        <div>
          <p>I'VE ANALYZED AND CREATED HUNDREDS OF CONVERTING CAMPAIGNS  THAT HAVE</p>
          <p>INCREASED NET NEW CUSTOMER GROWTH BY 50% YOY.</p>
          <p>BY USING DATA-DRIVEN ANALYTICS TO ASSESS REAL-TIME PROGRAM PERFORMANCE AND</p>
          <p>BUILD STRATEGIC MEDIA PLANS TO LEVERAGE EXISTING CONTENT AND LAUNCHES TO</p>
          <p>REACH NEW AUDIENCES  OPTIMIZING FOR DRIVING A HIGH-QUALIFIED PIPELINE.</p>
        </div>
        <div>
          <p>WORKING WITH ME WILL ENSURE YOU RECEIVE UPDATE ON LAUNCHES, LEARNINGS, AND</p>
          <p>RESULTS ACROSS THE MARKETING TEAMS, HELPING ALL BECOME MORE THOUGHTFUL AND</p>
          <p>EFFECTIVE MARKETERS.</p>
        </div>
        <div>
          <p>I'M CONFIDENT THAT WORKING TOGETHER WILL BE A SUCCESS!</p>
        </div>
        <div>
          <p>-Madelyn</p>
        </div>
      </div>
    </div>
  )
}

export default About