'use client'
import Containner from './containner'
import Image from 'next/image'
import { HeaderData, SocialData } from '@/constants/data';
import SocialLinks from './socialLink';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import Link from 'next/link';
import { ArrowBigRightDashIcon, LocateFixedIcon, MailIcon, PhoneCall } from 'lucide-react';


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <Containner>
        <div className="flex flex-col md:flex-row justify-between px-2">
          <div className="w-full text-center md:w-[20%] md:text-left">
            <Image
              src="/logo.svg"
              alt="EcoKata logo"
              width={120}
              height={120}
              className="mx-auto md:mx-0"
              style={{ height: "auto", width: "120px" }}
              priority
            />
            <p className="mt-4 text-sm">
              Making eco-friendly choices accessible to everyone with
              sustainable products for everyday life.
            </p>
            <div className="mt-4 text-white">
              <ul className="flex justify-center space-x-3 p-2">
                {SocialData?.map((item, index) => (
                  <li
                    key={index}
                    className="p-2 rounded-full hover:bg-gray-300/50 group transition-colors group"
                  >
                    <Link
                      href={item.href}
                      target="_blank"
                      className="text-gray-500 group-hover:text-green-500"
                    >
                      {<item.icon className='size-5 md:size-3' />}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Quick Links Desktop*/}
          <div className="hidden md:w-[20%] md:block mt-8 md:mt-0">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul>
              {HeaderData?.map((item) => (
                <li key={item.title}>
                  <Link
                    key={item.title}
                    href={item.href}
                    className="text-gray-300 hover:text-green-400 flex gap-2 items-center"
                  >
                    <ArrowBigRightDashIcon size={16} /> {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Mobile*/}
          <Accordion
            type="single"
            collapsible
            className="w-full md:hidden"
            defaultValue="item-1"
          >
            <AccordionItem value="item-2">
              <AccordionTrigger>Shipping Details</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                {HeaderData?.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="text-gray-200 hover:text-green-400 flex gap-2 items-center"
                  >
                    <ArrowBigRightDashIcon size={16} /> {item.title}
                  </Link>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* Customer Service Desktop*/}
          <div className="hidden md:w-[20%] md:block mt-8 md:mt-0">
            <h3 className="text-lg font-semibold mb-2">Customer Service</h3>
            <ul>
              <li>
                <Link
                  href={"/about"}
                  className="text-gray-300 hover:text-green-400 flex gap-2 items-center"
                >
                  <ArrowBigRightDashIcon size={16} /> About Us
                </Link>
              </li>
              <li>
                <Link
                  href={"/policy"}
                  className="text-gray-300 hover:text-green-400 flex gap-2 items-center"
                >
                  <ArrowBigRightDashIcon size={16} /> Shipping Policy
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="text-gray-300 hover:text-green-400 flex gap-2 items-center"
                >
                  <ArrowBigRightDashIcon size={16} /> Track Order
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="text-gray-300 hover:text-green-400 flex gap-2 items-center"
                >
                  <ArrowBigRightDashIcon size={16} /> Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link
                  href={"/FAQs"}
                  className="text-gray-300 hover:text-green-400 flex gap-2 items-center"
                >
                  <ArrowBigRightDashIcon size={16} /> FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service Mobile*/}
          <Accordion
            type="single"
            collapsible
            className="w-full md:hidden"
            defaultValue="item-1"
          >
            <AccordionItem value="item-2">
              <AccordionTrigger>Customer Service</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <Link
                  href={"/about"}
                  className="text-gray-300 hover:text-green-400 flex gap-2 items-center"
                >
                  <ArrowBigRightDashIcon size={16} /> About Us
                </Link>

                <Link
                  href={"/policy"}
                  className="text-gray-300 hover:text-green-400 flex gap-2 items-center"
                >
                  <ArrowBigRightDashIcon size={16} /> Shipping Policy
                </Link>

                <Link
                  href={"/"}
                  className="text-gray-300 hover:text-green-400 flex gap-2 items-center"
                >
                  <ArrowBigRightDashIcon size={16} /> Track Order
                </Link>

                <Link
                  href={"/"}
                  className="text-gray-300 hover:text-green-400 flex gap-2 items-center"
                >
                  <ArrowBigRightDashIcon size={16} /> Returns & Exchanges
                </Link>

                <Link
                  href={"/FAQs"}
                  className="text-gray-300 hover:text-green-400 flex gap-2 items-center"
                >
                  <ArrowBigRightDashIcon size={16} /> FAQs
                </Link>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* Contact Us */}
          <div className="flex items-center md:items-start flex-col gap-2 mt-8 md:mt-0 w-full md:w-[25%] text-center md:text-left">
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <p className="text-sm flex gap-2">
              <LocateFixedIcon size={24} className="text-green-500" />
              123 Green St, Eco City, Earth 45678
            </p>

            <p className="text-sm flex gap-2">
              <MailIcon size={20} className="text-green-500" />
              <a
                href="mailto:info@ecokata.com"
                className="text-gray-300 hover:text-green-400"
              >
                info@ecokata.com
              </a>
            </p>
            <p className="text-sm flex gap-2">
              <PhoneCall size={20} className="text-green-500" />
              <a
                href="tel:+1234567890"
                className="text-gray-300 hover:text-green-400"
              >
                +212 603-415584
              </a>
            </p>
          </div>
        </div>
        <div>
          <hr className="my-6 border-gray-700" />
          <p className="text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} EcoKata. All rights reserved.
          </p>
        </div>
      </Containner>
    </footer>
  );
}

export default Footer
