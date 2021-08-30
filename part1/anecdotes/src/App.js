// only exercises 1.12 and 1.13 

import React, { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const [vote, setVote] =  useState([0,0,0,0,0,0,0])

  const handleAnecdoteClick = () => {
    setSelected(Math.floor(Math.random() * 7))
  }
  const handleVoteClick = () => {
    const copy = [...vote]
    copy[selected] += 1
    setVote(copy)
  }

  return (
    <div>
      {anecdotes[selected]}
      <br></br>
      has {vote[selected]} votes
      <br></br>
      <Button handleClick={handleAnecdoteClick} text='next anecdote'/>
      <Button handleClick={handleVoteClick} text='vote'/>
    </div>
  )
}

export default App