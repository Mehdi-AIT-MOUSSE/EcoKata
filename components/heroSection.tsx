import React from 'react'
import Containner from './containner'
import { Button } from './ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { auth } from '@clerk/nextjs/server';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-green-50 to-blue-50 py-10">
      <Containner>
        <div className="flex items-center gap-10 flex-col md:flex-row">
          <div className="flex flex-col gap-6 flex-1 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold">
              <span className="text-secondary">Eco</span>-Friendly Products for
              a
              <span className="text-primary"> Better Tomorrow</span>
            </h1>
            <p className="text-sm text-gray-500">
              Shop our sustainable collection and make a positive impact on the
              planet with every purchase.
            </p>
            <Link href={"/shop"} className="m-auto md:m-0 w-full">
              <Button className="p-6 w-[75%] md:w-[45%] bg-green-500 hover:bg-secondary font-semibold text-xl">
                Shop Now
              </Button>
            </Link>
          </div>

          <div className="relative w-full h-64 md:w-1/2 md:h-96">
            <Image
              src="/heroBgImg.png"
              alt="Hero Image"
              className="w-lg h-auto rounded-lg shadow-lg"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
        </div>
      </Containner>
    </section>
  );
}

export default HeroSection
