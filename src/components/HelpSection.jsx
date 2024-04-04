import {useState} from 'react'
import { questions, options } from '../data';
import { Link } from 'react-router-dom';

const HelpSection = () => {
    const [active, setActive] = useState("personal");


  return (
    <div className='flex flex-col items-center'>
        <div className="hidden md:flex md:w-[29rem] md:justify-center gap-6 text-sm rounded-full font-bold p-1 bg-slate-200">
            <button onClick={() => setActive('personal')} className="text-blue-800 px-7 py-2 rounded-full bg-white">
                Personal Help
            </button>
            <button onClick={() => setActive('business')} className="text-slate-500 font-semibold active:text-blue-900 px-5 py-2 rounded-full active:bg-white">
                Business Help
            </button>
            <button onClick={() => setActive('technical')} className="text-slate-500 font-semibold active:text-blue-900 px-5 py-2 rounded-full active:bg-white">
                Technical Help
            </button>
        </div>


        <div className='flex py-10 md:flex-row gap-10 flex-col items-center justify-between'>

            <div className='flex text-left flex-col px-5 w-[20rem] md:w-[12rem] '>
                        <Link to={'/'} className=' py-2 px-1 text-blue-600 border-l-blue-600 border-l-2 bg-blue-600/10 text-lg md:text-sm font-semibold'>
                            Common Questions
                        </Link>
                        {
                            options.map((d, i) => (
                            <Link key={i} to={'/'} className=' py-2 active:text-blue-600 active:border-l-blue-600 active:border-2 text-slate-500 text-lg md:text-sm font-semibold'>
                                {d}
                            </Link>
                            ))
                        }
            </div>

            <div className='flex md:px-5 px-10 text-left flex-col'>
                <h2 className='md:text-left text-center text-3xl text-gray-700 font-semibold'>Common Questions</h2>
                {
                    questions.map((q, index) => (
                        <h4 className='text-base md:text-sm line-clamp-2 text-blue-500 py-2 font-bold' key={index}>{q}</h4>
                    ))
                }
            </div>

            <div className='hidden md:block w-[15rem]'>
                <div className='flex flex-col items-center bg-slate-100 shadow-md py-8 px-5 rounded-xl'>
                    <p className='text-sm font-semibold line-clamp-3 py-2'>Get customized help with your account and access your message center.</p>
                    <button className="bg-white border-blue-700 border-2 text-blue-700 py-1 px-4 rounded-full font-medium text-base">Log in</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HelpSection