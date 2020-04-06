import React, { useState } from 'react'
import ReactDOM from 'react-dom'

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
      <button onClick={() => setGood(good + 1) }>good</button>
      <button onClick={setNeutralFeedback}>neutral</button>
      <button onClick={setBadFeedback}>bad</button>

      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)