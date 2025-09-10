"use client"
import { HeaderData } from "@/constants/data"
import Link from "next/link"
import { usePathname } from "next/navigation"

const HeaderNav = () => {
    const pathname = usePathname()
  return (
      <nav className="hidden md:flex gap-6 font-semibold">
          {HeaderData?.map((item) => (
              <Link key={item.title} 
                    href={item.href}
                    className={`hover:text-secondary transition-colors hoverEffect relative group ${item.href === pathname && 'text-secondary'}`}>
                    {item.title}
                    <span className={`absolute -bottom-1 left-0 right-0 h-1 rounded-2xl bg-secondary scale-x-0 transition-transform group-hover:scale-x-100 ${item.href === pathname && 'scale-x-100'}`} />
                </Link>
          ))}
      </nav>
  )
}

export default HeaderNav

                 
                
  