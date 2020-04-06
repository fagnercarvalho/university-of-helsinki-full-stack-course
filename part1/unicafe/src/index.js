import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = ({ good, neutral, bad }) => {
  const formatNumber = (number) => number.toFixed(2)

  const formatPercentage = (percentage) => formatNumber(percentage) + " %"

  const averageFeedback = () => (good - bad) / (good + neutral + bad)

  const positivePercentage = () => (good / (good + neutral + bad)) * 100

  if (!good && !neutral && !bad) {
    return (
      <>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </>
    )
  }

  return (
    <>
      <h1>statistics</h1>
      <table>
        <tbody>
          <Statistic text="good" value={good} />
          <Statistic text="neutral" value={neutral} />
          <Statistic text="bad" value={bad} />
          <Statistic text="average" value={formatNumber(averageFeedback())} />
          <Statistic text="positive" value={formatPercentage(positivePercentage())} />
        </tbody>
      </table>
    </>
  )
}

const Statistic = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

const Button = ({ label, onClick }) => (
  <button onClick={onClick}>{label}</button>
)

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
      <Button onClick={() => setGood(good + 1)} label="good" />
      <Button onClick={setNeutralFeedback} label="neutral" />
      <Button onClick={setBadFeedback} label="bad" />

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)