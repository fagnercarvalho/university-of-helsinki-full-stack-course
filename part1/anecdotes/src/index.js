import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Anecdote = ({ text, votes }) => (
  <>
    <p>
      {text}
    </p>
    <p>
      has {votes} votes
    </p>
  </>
)

const App = ({anecdotes}) => {
  const [selected, setSelected] = useState(0)

  const [votes, setVotes] = useState(Array(6).fill(0))

  const showRandomAnecdote = () => {
    const random = Math.round(Math.random() * 5)
    setSelected(random)
  }

  const vote = () => {
    const copyVotes = [...votes]
    copyVotes[selected] += 1
    setVotes(copyVotes)
  }

  const mostVotes = () => votes.indexOf(Math.max(...votes))

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote text={anecdotes[selected]} votes={votes[selected]} />
      <button onClick={() => vote()}>vote</button>
      <button onClick={() => showRandomAnecdote()}>next anecdote</button>
      <br />
      <h1>Anecdotes with most votes</h1>
      <Anecdote text={anecdotes[mostVotes()]} votes={votes[mostVotes()]} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)