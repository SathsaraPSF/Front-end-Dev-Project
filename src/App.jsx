import { useState } from 'react'
import NavBar from './components/NavBar'
import Hero from './pages/Hero'
import Services from './pages/Services'
import ServicesTwo from './pages/ServiceTwo'
import FAQ from './pages/FAQ'
import Footer from './pages/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col'>
      <NavBar />
      <Hero />
      <Services />
      <ServicesTwo />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App
