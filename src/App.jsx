import './App.css'
import Dashboard from './components/Dashboard'
import Footer from './components/Footer'
import HeroSection1 from './components/HeroSection1'
import HeroSection2 from './components/HeroSection2'
import Navbar from './components/Navbar'


function App() {

  return (
    <div>
      <Navbar/>
      <Dashboard/>
      <HeroSection1/>
      <HeroSection2/>
      <Footer/>
    </div>
  )
}

export default App
