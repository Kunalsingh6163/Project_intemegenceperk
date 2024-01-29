import React from 'react'

function Counter() {

    const [count, setCount]  = React.useState(0)

    // Write a code for stop count value in negative integer.
    
  return (
    <div>
        <h1>Counter</h1>

        <button  onClick={ () => setCount( count + 1 ) } >Increment</button>
        <p>{count}</p>
        <button  onClick={ () => setCount( count - 1 )} >Decrement</button>
    </div>
  )
}

export default Counter