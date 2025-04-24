import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './components/TodoList'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  
  const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem('isDarkMode')))
  console.log(isDark);
  
  return (

    <main className={isDark ? 'app dark' : 'app'}>
    <Header isDark={isDark} setIsDark={setIsDark} />
    <TodoList/>
    <Footer />
  </main>
  
  )
}

export default App
