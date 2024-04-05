import {useState} from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';



const Navbar = () => {
    const [open, setOpen] = useState(false);
    
    const navLinks = [
      {
        label: "Personal",
        link: "/"
      },
      {
        label: "Business",
        link: "/"
      },
      {
        label: "Developer",
        link: "/"
      },
      {
        label: "Help",
        link: "/"
      }
    ];
  
  return (
      <>
        <nav className="flex justify-center px-4 py-4 items-center md:px-14 lg:px-40">  
            <div className=" flex w-full justify-between items-center">
              {/* menu */}
              <div onClick={() => setOpen(!open)} className='flex items-center justify-between gap-4 md:hidden'>
                <button className='border-blue-700 items-center border-[2px] rounded-full px-3.5 py-1 flex gap-2 '>
                  <FontAwesomeIcon
                    icon = {open ? faXmark : faBars} 
                    className="text-blue-700 cursor-pointer lg:hidden"
                  />
                  <span className='text-blue-700 text-lg font-medium'>Menu</span>
                </button>
              </div>

             {/* logo */}

              <div className='flex items-center justify-center gap-x-6 '>
                <div className='lg:pr-8'>
                  <Link to="/" className="">
                    <img src="/paypal.svg" alt="" className='w-[1.5rem]'/>
                  </Link>
                </div>

                <div className={` ${open ? 'absolute left-0 top-20 text-gray-100 w-[70%] h-screen z-[2] bg-blue-900 transition-all duration-500 ease-in':'hidden'} md:flex md:items-center md:text-gray-800 md:bg-white`}>
                  <ul className={`absolute text-left px-8 py-5 text-2xl md:flex md:text-center md:text-sm md:py-0 md:items-center md:gap-x-2 lg:gap-x-4`}>
                    {navLinks.map((data, index) => (
                      <li key={index}>
                        <a
                          href={data.link}
                          className=" overflow-x-hidden inline-block px-3 py-3 md:py-0 md:px-2 lg:px-4 font-semibold hover:bg-white hover:text-black cursor-pointer duration-200 after:text-black"
                          >
                          {" "}
                          {data.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                  
                  <div className='absolute border-t-gray-100 border-t-[1px] w-full bottom-24 py-6 left-[30] md:hidden'>
                    <button className=' bg-blue-900 border-white border-2 text-white py-2 px-6 rounded-full font-medium text-2xl'>
                      Log in
                    </button> 
                  </div>
                </div>
              </div>

            <div className='hidden md:block '>
              <div className='flex gap-3 items-center '>
              <button className='bg-white border-blue-900 border-2 text-blue-900 py-1.5 px-5 rounded-full font-normal text-sm'>
                Log in
              </button>    
              <button className='bg-blue-900 text-white py-1.5 px-5 rounded-full font-normal text-sm'>
                Sign Up
              </button>    
              </div>
            </div>
            <div className='md:hidden'>
              <button className='bg-white border-blue-700 border-2 text-blue-700 py-1 px-4 rounded-full font-medium text-lg'>
                Log in
              </button> 
            </div>
          </div>

      </nav> 
      <hr className='bg-slate-300 h-[1px]' />
    </>

  )
}

export default Navbar