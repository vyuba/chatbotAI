import React from 'react'

function chat() {
  return (
    <div className='w-full h-screen flex flex-col px-3 pt-3'>
      <div className='chat-container w-full flex-1 flex-col'> 
        <div className='flex flex-row gap-3 pt-3'>
          <span className='w-6 h-6 text-center rounded-full bg-[#C5C5C5] '>
            al
          </span>
          <div className='grid grid-flow-row gap-2'>
            <span className='text-sm text-[#C5C5C5] font-medium'>alexander</span>
            <span className='text-base capitalize font-medium bg-[#4353FF] text-white px-2 py-2 rounded-2xl'>can you explain how convi works</span>
          </div>
        </div>
        <div className='flex flex-row-reverse gap-3 pt-3'>
          <span className='w-6 h-6 text-center rounded-full bg-[#C5C5C5] '>
            al
          </span>
          <div className='flex flex-col  gap-2'>
            <span className='text-sm text-[#C5C5C5] font-medium '>alexander</span>
            <span className='text-base capitalize font-medium bg-[#EFEFEF] text-[#4353FF] px-2 py-2 rounded-2xl'>can you explain how convi works</span>
          </div>
        </div>
      </div>
      <div className='w-full flex flex-row items-center px-3 gap-2 py-3'>
        <input type="text" className='rounded-2xl py-1 flex-1 bg-[#EFEFEF] outline-[#C5C5C5] border pl-3' />
        <button className='bg-[#4353FF] w-fit rounded-full px-1 py-1 cursor-pointer'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18.07 10.3199C17.88 10.3199 17.69 10.2499 17.54 10.0999L12 4.55994L6.46 10.0999C6.17 10.3899 5.69 10.3899 5.4 10.0999C5.11 9.80994 5.11 9.32994 5.4 9.03994L11.47 2.96994C11.76 2.67994 12.24 2.67994 12.53 2.96994L18.6 9.03994C18.89 9.32994 18.89 9.80994 18.6 10.0999C18.46 10.2499 18.26 10.3199 18.07 10.3199Z" fill="#fff"/>
            <path d="M12 21.25C11.59 21.25 11.25 20.91 11.25 20.5V3.67004C11.25 3.26004 11.59 2.92004 12 2.92004C12.41 2.92004 12.75 3.26004 12.75 3.67004V20.5C12.75 20.91 12.41 21.25 12 21.25Z" fill="#fff"/>
          </svg>  
        </button>
      </div>
    </div>
  )
}

export default chat