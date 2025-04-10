import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import SplashCursor from './components/animations/SplashCursor'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  

<SplashCursor />
    </>
  )
}

export default App
