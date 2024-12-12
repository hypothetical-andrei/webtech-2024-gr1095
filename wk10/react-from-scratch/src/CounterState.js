import React, { useState } from 'react'

const CounterState = () => {
  const [ counter, setCounter ] = useState(0)

  return (
    <div>
      {
        counter % 2 === 0
        ? (
          <>
            The counter value is: {counter}
            <input type="button" value="+" onClick={(evt) => {
              setCounter(counter + 1)
            }} />
            The counter is even
          </>
        ) : (
          <>
            The counter value is: {counter}
            <input type="button" value="+" onClick={(evt) => {
              setCounter(counter + 1)
            }} />
            The counter is odd
          </>
        )
      }
    </div>
  )
}

export default CounterState