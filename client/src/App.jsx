import { useState } from 'react'
import Login from './pages/login'
import './App.css'
import { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Navbar/>
      <Toaster />
      <Login/>
    </main>
  )
}

export default App
