import React from 'react'
import '../styling/Content.css'

function Content() {
  return (
    <div className='content'>
      <h1>FORECASTING &</h1>
      <h1>REPORTING EXAMPLES</h1>
      <img className='february' src={require('../styling/februaryScreenShot.png')} alt='February'/>
      <img className='twentyThree' src={require('../styling/2023ScreenShot.png')} alt='2023'/>
      <img className='budgetOne' src={require('../styling/budgetPart1ScreenShot.png')} alt='Budget 1'/>
      <img className='budgetTwo' src={require('../styling/budgetPart2ScreenShot.png')} alt='Budget 2'/>
    </div>
  )
}

export default Content