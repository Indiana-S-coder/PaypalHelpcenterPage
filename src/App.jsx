import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import { BrowserRouter } from 'react-router-dom'
import SearchBar from './components/SearchBar'
import Warning from './components/Warning'

function App() {
  
  return (
    <BrowserRouter>
    <div className='flex flex-col justify-center'>
      <Navbar/>
      <div className='flex flex-col items-center lg:max-w-1280px'>
        <Header/>
        <SearchBar/>
        <Warning/>
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App
