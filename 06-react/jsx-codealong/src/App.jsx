import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import StudentList from './components/StudentList/StudentList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <StudentList/>
    </>
  )
}

export default App
