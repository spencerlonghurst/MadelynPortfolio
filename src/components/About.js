import '../styling/About.css'

import React from 'react'

function About() {
  return (
    <div className='about'>
      <div className='aboutImage'>
        <img className='innerAboutImg' src={require('../styling/aboutImg.jpg')} alt='About'/>
      </div>
      <div className='rightColumn'>
        <div>
          <h2 className='aboutTitle'>MEET</h2>
          <h2 className='aboutTitle'>MADELYN</h2>
        </div>
        <div>
          <p>TAKE A LOOK THROUGH THIS ACQUISITION-FOCUSED DIGITAL MEDIA STRATEGY FOR MARKETING CAMPAIGNS.</p>
        </div>
        <div>
          <p><b>MY INTENTION IS TO ENGAGE, EDUCATE, DELIGHT, AND DRIVE BUSINESS GROWTH IN ALIGNMENT WITH COMPANY GOALS.</b></p>
        </div>
        <div>
          <p>I'VE ANALYZED AND CREATED HUNDREDS OF CONVERTING CAMPAIGNS THAT HAVE INCREASED <b>NET NEW CUSTOMER GROWTH</b> BY <b>50% YOY</b> BY USING DATA-DRIVEN ANALYTICS TO ASSESS REAL-TIME PROGRAM PERFORMANCE AND BUILD STRATEGIC MEDIA PLANS TO LEVERAGE EXISTING CONTENT AND LAUNCHES TO REACH NEW AUDIENCES  OPTIMIZING FOR DRIVING A HIGH-QUALIFIED PIPELINE.</p>
        </div>
        <div>
          <p>WORKING WITH ME WILL ENSURE YOU RECEIVE UPDATE ON LAUNCHES, LEARNINGS, AND RESULTS ACROSS THE MARKETING TEAMS, HELPING ALL BECOME MORE THOUGHTFUL AND EFFECTIVE MARKETERS.</p>
        </div>
        <div>
          <p><b>I'M CONFIDENT THAT WORKING TOGETHER WILL BE A SUCCESS!</b></p>
        </div>
        <div>
          <p className='signature'>-Madelyn</p>
        </div>
      </div>
    </div>
  )
}

export default About