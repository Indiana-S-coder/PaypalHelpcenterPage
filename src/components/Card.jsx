/* eslint-disable react/prop-types */


const Card = ({title, description, image}) => {
  return (
    <div className="py-3 px-5 w-[18rem] rounded-xl flex items-center gap-3 shadow-md ">
        <div className="bg-slate-100 w-14 h-12 rounded-full p-2">
            <img src={image} alt=""/>
        </div>
        <div className="flex- flex-col text-left">
            <h3 className="text-sm font-semibold">{title}</h3>
            <p className="text-sm font-base line-clamp-2 text-slate-800">{description}</p>
        </div>
    </div>
  )
}

export default Card