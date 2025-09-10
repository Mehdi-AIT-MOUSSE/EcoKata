
import { ShoppingBag } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const CartBtn = () => {
  return (
    <div>
        <Link href='/cart' className='group relative'>
            <span className='w-3.5 h-3.5 bg-secondary rounded-full absolute top-[-2] -right-1 text-[10px] text-center text-white font-semibold'>0</span>
            <ShoppingBag className='w-5 h-5 font-black group-hover:text-secondary hoverEffect' />
        </Link>
    </div>
  )
}

export default CartBtn
