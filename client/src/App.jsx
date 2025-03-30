import { useState } from 'react'
import Login from './pages/login'
import './App.css'
import { Toaster } from 'react-hot-toast'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Toaster />
      <Login/>
    </main>
  )
}

export default App
