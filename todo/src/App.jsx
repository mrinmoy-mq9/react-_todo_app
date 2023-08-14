import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Hero from './components/Hero'
import Todo from './components/Todo'
import './App.css'
import { BrowserRouter, Route ,Router} from 'react-router-dom'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
      <Todo/>
    </div>
  )
}

export default App
