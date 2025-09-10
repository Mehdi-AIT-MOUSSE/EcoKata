"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HeaderData } from "@/constants/data";
import Link from "next/link";
import { Menu } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import SocialLinks from "./socialLink";

const MobileHeaderMinu = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="md:hidden" />
      </SheetTrigger>
      <SheetContent className="w-[400px] sm:w-[540px] gap-0">
        <SheetHeader>
          <SheetTitle>
            <Image
              src="/logo.svg"
              alt="EcoKata logo"
              width={120}
              height={100}
            />
          </SheetTitle>
        </SheetHeader>
        <ul className="flex flex-col font-semibold p-4 space-y-3">
          {HeaderData?.map((item) => (
            <li key={item.title}>
              <Link
                href={item.href}
                className={`block py-2 px-3 rounded-md transition-colors relative group ${
                  item.href === pathname
                    ? "text-secondary"
                    : "text-gray-700 hover:text-secondary"
                }`}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        <SocialLinks/>
      </SheetContent>
    </Sheet>
  );
};

export default MobileHeaderMinu;
