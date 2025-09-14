'use client'
import { SocialData } from "@/constants/data";
import Link from "next/link";

const SocialLinks = () => {
  return (
    <ul className="flex justify-center space-x-5 p-2">
      {SocialData?.map((item,index) => (
        <li key={index} className="p-2 rounded-full hover:bg-gray-300/50 group transition-colors group">
          <Link href={item.href} target="_blank" className="text-gray-500 group-hover:text-green-500">
            {<item.icon size={25}/>}
          </Link>
        </li>
      ))}
      
    </ul>
  );
}
export default SocialLinks;
