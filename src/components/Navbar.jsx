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
            <div className="flex w-full justify-between items-center">
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

              <div className='flex items-center justify-center gap-6 '>
                <div className='lg:pr-8'>
                  <Link to="/" className="">
                    <img src="/paypal.svg" alt="" className='w-[1.5rem]'/>
                  </Link>
                </div>
                <div className="hidden md:block ">
                  <ul className={`flex items-center md:gap-2 lg:gap-4`}>
                    {navLinks.map((data, index) => (
                      <li key={index}>
                        <a
                          href={data.link}
                          className="overflow-x-hidden inline-block px-3 md:px-2 lg:px-4 font-semibold text-gray-700 hover:text-black dark:hover:text-white duration-200"
                          >
                          {" "}
                          {data.label}
                        </a>
                      </li>
                    ))}
                  </ul>
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

          {/* sidebar mobile menu */}
           {/* <div
            className={`
            "fixed h-full lg:hidden bg-black/50 backdrop-blur-sm top-0 right-0 -translate-x-full transition-all ",
            ${open && "translate-x-0"}`
          }
          >
            <section className=" bg-blue-900 flex-col text-gray-100 absolute left-0 top-0 h-screen p-8 gap-8 z-50 w-56 flex  ">
               <FontAwesomeIcon
                icon = {faXmark}
                onClick={() => setOpen(!open)}
                className="mt-0 mb-8 cursor-pointer"
                /> 

              {navLinks.map((d, i) => (
                <Link key={i} className="font-normal" href={d.link}>
                  {d.label}
                </Link>
              ))}
            </section> 
              </div>   */}

      </nav> 
      <hr className='bg-slate-300 h-[1px]' />
    </>

  )
}

export default Navbar