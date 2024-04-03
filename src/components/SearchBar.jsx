// import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => {
  return (
    <div>
        <h1 className="font-medium text-3xl py-8">How can we help?</h1>
        <div className='flex '>
            <div className='border-l-[1px] border-y-[1px] border-slate-400 rounded-l-full p-4'>
                <FontAwesomeIcon icon={faMagnifyingGlass} className='text-slate-400 '/>
            </div>
            <input type="text" 
            placeholder='Search by keyword'
            className='focus:outline-none placeholder:text-slate-400 placeholder:text-base w-[18rem] sm:w-[22rem] md:w-[28rem] lg:w-[32rem] border-slate-400 border-y-[1px] border-r-[1px] rounded-r-full p-4 '
            />
        </div>
    </div>
  )
}

export default SearchBar