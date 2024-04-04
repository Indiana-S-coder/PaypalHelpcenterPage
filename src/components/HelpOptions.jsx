import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { waysToHelp } from "../data"

const HelpOptions = () => {
  return (
    <div className="w-full flex flex-col items-center">
        <h3 className="text-3xl font-thin my-5 py-2">More ways to get help</h3>
        <div className="flex flex-col md:flex-row items-center gap-10">
            {
            waysToHelp.map((d, i) => (
                <div className='flex flex-col w-[12rem] md:w-[10rem] items-center mx-5 p-5' key={i}>
                    <FontAwesomeIcon icon={d.icon} className="text-3xl"/>
                    <span className="text-xl md:text-sm text-blue-500 py-1 font-semibold">{d.title}</span>
                    <p className="text-lg md:text-xs line-clamp-2 font-light">{d.description}</p>
                </div>
            ))
          }  
        </div>
    </div>
  )
}

export default HelpOptions