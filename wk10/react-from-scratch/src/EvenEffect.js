import React, { useState, useEffect } from 'react'

const EvenEffect = () => {
  const [ counter, setCounter ] = useState(0)
  const [ description, setDescription ] = useState('The counter is 0')
  const [ isEven, setIsEven ] = useState(true)

  useEffect(() => {
    if (counter % 2 === 0) {
      setDescription('the counter is even')
    } else {
      setDescription('the counter is odd')
    }
  }, [ counter ])

  useEffect(() => {
    if (counter % 2 === 0) {
      setIsEven(true)
    } else {
      setIsEven(false)
    }
  }, [ counter ])

  useEffect(() => {
    document.title = isEven ? 'even' : 'odd'
  }, [ isEven ])

  return (
    <div>
      <h4>Counter effects</h4>
      The counter value is: {counter}
      <input type="button" value="+" onClick={(evt) => {
        setCounter(counter + 1)
      }} />
      {
        description
      }
    </div>
  )
}

export default EvenEffect