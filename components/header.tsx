import React from 'react'
import Containner from './containner'
import Image from 'next/image'
import Link from 'next/link'
import HeaderNav from './headerNav'
import SearchBar from './searchbar'
import CartBtn from './cartBtn'
import FivoBtn from './fivoBtn'
import { Button } from './ui/button'
import MobileHeaderMinu from './mobileHeaderMinu'


const Header = () => {
  return (
    <header className="bg-white py-4">
      <Containner className="flex items-center justify-between">
        {/* Logo */}
        <div className='flex items-center gap-4 md:gap-0'>
          <MobileHeaderMinu/>
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="EcoKata logo"
              width={120}
              height={120}
            />
          </Link>
        </div>

        {/* Navigation */}
        <HeaderNav />

        {/* Auth Buttons */}
        <div className="w-auto flex items-center justify-end gap-3 ">
          <SearchBar />
          <CartBtn />
          <FivoBtn />
          <Button variant="secondary">Sign Up</Button>
        </div>
      </Containner>
    </header>
  );
}

export default Header
