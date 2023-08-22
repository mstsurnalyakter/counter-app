# Counter App

### In this project, I created a simple `Counter App` using `Vite + React`.

Step 1: Create a New React App

````js
      npm create vite@latest
````


Step 2: Navigate to the App Directory

````js
      cd counter-app
````

Step 3: src/App.jsx

````js
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
    
    export default App;
````
