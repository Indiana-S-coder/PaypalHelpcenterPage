import { Link } from "react-router-dom"
import { QuickLinks, footerMenu, termsandcondition } from "../data"


const Footer = () => {
  return (
    <div className="flex flex-col items-center sm:items-start sm:text-left px-16 my-10">
        <div className="">
            <img src="/paypalWritten.svg" alt="" className=" w-36 md:w-32"/>
        </div>
        <div className="flex gap-x-5 gap-y-3 flex-wrap text-left text-sm font-bold text-blue-950 ">
            {
                footerMenu.map((d, i) => (
                    <Link className="" key={i} to={d.link}>
                        {d.name}
                    </Link>
                ))
            }
        </div>

        <hr className="h-[1px] w-full text-slate-200 my-3"/>

        <div className="flex w-full flex-col md:items-center md:flex-row place-items-start justify-between">

            <div className="flex flex-wrap md:flex-row gap-x-4 gap-y-3 text-left text-sm font-bold text-blue-950 ">
                {
                    QuickLinks.map((d, i) => (
                        <Link className="" key={i} to={d.link}>
                            {d.name}
                        </Link>
                    ))
                }
            </div>


            <div className="flex flex-row flex-wrap gap-3 font-bold text-blue-950 text-sm py-5 md:py-0">
            <span className="text-sm md:text-xs text-slate-300 font-thin md:py-0 px-3 ">© 1999-2022</span>
                {
                    termsandcondition.map((d, i) => (
                        <Link className="px-1" key={i} to={d.link}>
                            {d.name}
                        </Link>
                    ))
                }
            </div>
        </div>


    </div>
  )
}

export default Footer