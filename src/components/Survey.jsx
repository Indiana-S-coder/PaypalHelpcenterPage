

const Survey = () => {
  return (
    <div className="flex justify-between w-[60%] bg-slate-100 my-5 mb-10">
        <div className="flex flex-col md:flex-row md:justify-between w-full items-center py-8 px-12">
            <div className="flex flex-col md:text-left max-w-[20rem]">
                <h4 className="text-lg md:text-sm font-bold md:font-medium">How are we doing?</h4>
                <p className="line-clamp-4 text-base md:text-sm font-medium md:font-thin py-3">Help improving the <span className="font-bold md:font-semibold">Paypal Help Center experience</span> with some quick feedback.</p>
            </div>
            <button className="bg-blue-900 text-white leading-tight py-2 px-5 rounded-full font-normal text-sm">Take the survey</button>
        </div>
    </div>
  )
}

export default Survey