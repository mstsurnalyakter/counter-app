import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Counter App</h1>
    <h2>Count : {count}</h2>
    <button onClick={() => setCount(count => count + 1)}>Increment</button>
    <button onClick={() => setCount(count => count - 1)}>Decrement</button>
     
    </>
  )
}

export default App
