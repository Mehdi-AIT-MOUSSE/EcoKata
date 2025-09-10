'use client'
import { SocialData } from "@/constants/data";
import Link from "next/link";

const SocialLinks = () => {
  return (
    <ul className="flex justify-center space-x-5 p-2">
      {SocialData?.map((item,index) => (
        <li key={index}>
          <Link href={item.href} target="_blank" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
            {<item.icon size={25}/>}
          </Link>
        </li>
      ))}
      
    </ul>
  );
}
export default SocialLinks;
