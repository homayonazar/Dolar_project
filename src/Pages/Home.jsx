import { useState } from 'react'
import reactLogo from '../assets/react.svg'

export default function Home() {

  return (
    <div className=''>
      <div className="">
        <div className="main_sec bg-amber-100 rounded-2xl w-[calc(100%-80px)] h-[600px] m-10">
            <p className='text-stone-500 text-3xl text-center pt-5'>Price of Currencies:</p>
            <div className="rectangles flex flex-row justify-between gap-5 mx-8">
                <div className="rec1 bg-gray-200 border-1 rounded-xl border-gray-600 p-20 "></div>
                <div className="rec2  bg-gray-200 border-1 rounded-xl border-gray-600 p-20 "></div>
                <div className="rec3 bg-gray-200 border-1 rounded-xl border-gray-600 p-20 "></div>
                <div className="rec4 bg-gray-200 border-1 rounded-xl border-gray-600 p-20 "></div>
                <div className="rec4 bg-gray-200 border-1 rounded-xl border-gray-600 p-20 "></div>
            </div>

        </div>
      </div>
    </div>
  )
}