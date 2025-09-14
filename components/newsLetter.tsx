import React from 'react'
import Containner from './containner'
import { Input } from './ui/input'

const NewsLetter = () => {
  return (
    <Containner >
        <div className='flex flex-col items-center justify-center text-center py-12 gap-4'>
            <h2 className="text-3xl font-bold text-shadow-2xsm">
                Join our 
                <span className="text-secondary"> Newsletter</span>
            </h2>
            <p className="text-sm text-gray-500">
                Subscribe to get special offers, free giveaways, and eco-friendly tips.
            </p>
            <form className="w-full md:w-[60%] flex justify-center">
                <Input placeholder="Enter your email" 
                className='h-10 w-full border border-gray-300 rounded-l-md py-2 px-4' />
                <button className="h-10 bg-blue-600 text-white px-4 py-2 ml-2 rounded">Subscribe</button>
            </form>
        </div>
    </Containner>
  )
}

export default NewsLetter
