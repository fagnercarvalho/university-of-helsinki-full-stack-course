import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = ({ good, neutral, bad }) => {
  const formatNumber = (number) => number.toFixed(2)

  const formatPercentage = (percentage) => formatNumber(percentage) + " %"

  const averageFeedback = () => (good - bad) / (good + neutral + bad)

  const positivePercentage = () => (good / (good + neutral + bad)) * 100

  return (
    <>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>average {formatNumber(averageFeedback())}</p>
      <p>positive {formatPercentage(positivePercentage())}</p>
    </>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setNeutralFeedback = () => {
    setNeutral(neutral + 1)
  }

  const setBadFeedback = () => setBad(bad + 1)

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={setNeutralFeedback}>neutral</button>
      <button onClick={setBadFeedback}>bad</button>

      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)