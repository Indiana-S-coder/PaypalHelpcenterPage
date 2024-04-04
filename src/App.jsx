import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import { BrowserRouter } from 'react-router-dom'
import SearchBar from './components/SearchBar'
import Warning from './components/Warning'
import Features from './components/Features'
import HelpSection from './components/HelpSection'
import HelpOptions from './components/HelpOptions'
import Survey from './components/Survey'
import Footer from './components/Footer'

function App() {
  
  return (
    <BrowserRouter>
      <div className='flex flex-col justify-center'>
        <Navbar/>
        <div className='flex flex-col items-center lg:max-w-1280px'>
          <Header/>
          <SearchBar/>
          <Warning/>
          <Features />
          <HelpSection />
          <HelpOptions />
          <Survey />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
