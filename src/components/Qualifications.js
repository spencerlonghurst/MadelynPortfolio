import React from 'react'
import '../styling/Qualifications.css'

function Qualifications() {
  return (
    <div className='qualifications'>
      <div className='qualLeft'>
        <img className='qualPhoto' src={require('../styling/contactImg.png')} alt='Contact'/>
      </div>
      <div className='qualRight'>
        <p>Quick Qualification Reminder</p>
        <ul>
          <li>7+ years experience in acquisition, performance and life cycle or CRM marketing, with direct oversight of SEM, paid social, display, TV, email and funnel optimization.</li>
          <li>3+ years of experience building and leading a team.</li>
          <li>Experience managing a large budget with a track record of growing marketing investment on a measurable basis at scale.</li>
          <li>Experience owning the evaluation, implementation and testing of new channels.</li>
          <li>Exceptional critical thinking and problem solving skills. Analyzing data combined with the ability to synthesize and effectively communicate findings to all levels throughout the organization.</li>
          <li>Willingness to be deep in the details while also being able to create and communicate higher level strategy.</li>
          <li>Success in managing agencies and other external partners to receive optimal value.</li>
          <li>Excellent communication skills; listening, written and oral communication skills and comprehensive people management skills.</li>
          <li>A naturally curious, self-starter who is willing to take measured risks.</li>
        </ul>
      </div>
    </div>
  )
}

export default Qualifications