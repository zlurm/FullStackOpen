import React, { useState } from 'react'

const StatisticLine = (props) => {
  return (
    //<div>{props.text} {props.value} {props.expression}</div>
    
      <tr>
        <td>{props.text}</td>
        <td>{props.value} {props.expression}</td>
      </tr>
    
  )
}

const Statistics = (props) => {
  if (props.all === 0) {
    return (
      <div>
        <br></br>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      <table>
        <tbody>
        <tr>
            <th><h1>Statistics</h1></th>
        </tr>
        <StatisticLine text="good" value={props.valueGood}/>
        <StatisticLine text="neutral" value={props.valueNeutral}/>
        <StatisticLine text="bad" value={props.valueBad}/>
        <StatisticLine text="all" value={props.valueAll}/>
        <StatisticLine text="average" value={props.valueAverage}/>
        <StatisticLine text="positive" value={props.valuePositive} expression={props.percent} />
        </tbody>
      </table>
    </div>

  )
}



const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>

)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const handleGoodClick = () => {
    setAll(all + 1)
    setGood(good +1)
  }

  const handleBadClick = () => {
    setAll(all + 1)
    setBad(bad +1)
  }

  const handleNeutralClick = () => {
    setAll(all + 1)
    setNeutral(neutral +1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <br></br>
      <Button handleClick={handleGoodClick} text='good'/>
      <Button handleClick={handleNeutralClick} text='neutral'/>
      <Button handleClick={handleBadClick} text='bad'/>
      <Statistics all={all}  valueGood={good} 
         valueNeutral={neutral} valueBad={bad}
         valueAll={all} valueAverage={(good + bad *1) / all}
         valuePositive={good / all * 100} percent='%'/>
    </div>
  )
}

export default App