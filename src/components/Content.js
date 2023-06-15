import React from 'react'
import '../styling/Content.css'

function Content() {
  return (
    <div className='content'>
      <h1 className='contentTitle'>FORECASTING &</h1>
      <h1 className='contentTitle'>REPORTING EXAMPLES</h1>
      <img className='february' src={require('../styling/februaryScreenShot.png')} alt='February'/>
      <img className='twentyThree' src={require('../styling/2023ScreenShot.png')} alt='2023'/>
      <img className='budgetOne' src={require('../styling/budgetPart1ScreenShot.png')} alt='Budget 1'/>
      <img className='budgetTwo' src={require('../styling/budgetPart2ScreenShot.png')} alt='Budget 2'/>
      <p className='budget forecast'>2023 FORECAST, BUDGET &</p>
      <p className='budget'>REPORT TRACKER</p>
      <a
        className='fullSpreadsheet'
        target="_blank"
        rel="noopener noreferrer"
        href='https://docs.google.com/spreadsheets/d/1Iuzp21710Fs3MCrxZodhFMTycOZyZjc8Xi1IiBSAIrs/edit#gid=1114722941'
      >
        <p className='spreadsheet full'>VIEW THE FULL</p>
        <p className='spreadsheet'>SPREADSHEET</p>
      </a>
    </div>
  )
}

export default Content