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

    // <nav className='shadow-md w-full fixed top-0 left-0'>
    //     <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
    //         <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
    //         text-gray-800'>
    //           <div className='text-3xl text-indigo-600 mr-1 pt-2' to="/">
    //               <img src="/paypal.svg" alt="Paypal logo" className='w-8'/>
    //           </div>
    //         </div>

    //         <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
    //             <FontAwesomeIcon icon={open ? faXmark : faBars}/>
    //             <ul className={`md:flex font-medium text-sm text-center bg-blue-900 md:items-center md:pb-0 pb-12 absolute md:static md:bg-white md:z-auto 
    //             z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
    //               {
    //                   navLinks.map((link)=>(
    //                       <li key={link.label} className='md:ml-8 text-lg md:my-0 my-7'>
    //                     <a href={link.link} className='text-gray-100 md:text-gray-600 hover:text-gray-400 duration-500'>{link.label}</a>
    //                   </li>
    //                 ))
    //               }
    //             </ul>
    //         </div>

    //         <button className='bg-blue-900 md:border-white md:border-2 text-white py-1 px-3.5 rounded-full font-normal text-base'>
    //           Sign up
    //         </button>
    //     </div>
    //   </nav>



        <nav className="flex justify-between px-8 items-center py-6 shadow-md">
        <div className="flex items-center gap-8">
          <section className="flex items-center gap-4 md:justify-between">
            {/* menu */}
            <div className=''>

              <button className='border-blue-700 items-center border-[2px] rounded-full px-3.5 py-1 flex gap-2 md:hidden'>
                <FontAwesomeIcon
                  icon = {faBars}
                  onClick={() => setOpen(true)}
                  className="text-blue-700 cursor-pointer lg:hidden"
                />
                <span className='text-blue-700 text-lg font-medium'>Menu</span>
              </button>

            </div>
            {/* logo */}
            <Link to="/" className="md:text-center w-8">
              <img src="/paypal.svg" alt="" />
            </Link>
          </section>
          {navLinks.map((d, i) => (
            <Link
              key={i}
              className="hidden lg:block  text-gray-400 hover:text-black"
              href={d.link}
            >
              {d.label}
            </Link>
          ))}
        </div>

        {/* sidebar mobile menu */}
        <div
          className={`
            "fixed h-full lg:hidden bg-black/50 backdrop-blur-sm top-0 right-0 -translate-x-full transition-all ",
            ${open && "translate-x-0"}`
          }
        >
          <section className=" bg-blue-900 flex-col text-gray-100 absolute left-0 top-0 h-screen p-8 gap-8 z-50 w-56 flex  ">
            <FontAwesomeIcon
              icon = {faXmark}
              onClick={() => setOpen(false)}
              className="mt-0 mb-8 cursor-pointer"
            />

            {navLinks.map((d, i) => (
              <Link key={i} className="font-normal" href={d.link}>
                {d.label}
              </Link>
            ))}
          </section>
          
          <section className="flex bottom-1 items-center gap-4">
            <button className='bg-blue-900 md:border-white md:border-2 text-white py-1 px-3.5 rounded-full font-normal text-base'>
              Log in
            </button>    
          </section>
        </div> 
      </nav> 
    
  )
}

export default Navbar