
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleExclamation, faXmark } from '@fortawesome/free-solid-svg-icons';

const Warning = () => {
  return (
    <div className="hidden rounded-xl my-5 bg-yellow-200/90 p-5 md:block w-[55%]">
        <div className='flex gap-4 justify-center'>
            <div className="flex gap-1.5">
                <FontAwesomeIcon icon={faCircleExclamation} className='text-yellow-800'/>
                <p className='text-xs text-left text-yellow-800 line-clamp-3 tracking-wider leading-normal'>Received a suspicious email, fake invoice, or message? 
                Don&apos;t reply, open links, download attachments, or call any listed phone numbers. We&apos;ll never ask for your Paypal password or financial details by email or message, or over the phone. 
                Forward suspecious message to <span className='text-xs font-medium text-blue-500'>phishing@paypal.com</span> and then delete them.</p>
                </div>
            <FontAwesomeIcon icon={faXmark} className='text-yellow-700'/>
        </div>
    </div>
  )
}

export default Warning