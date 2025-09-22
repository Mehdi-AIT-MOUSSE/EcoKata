import { urlFor } from "@/sanity/lib/image";
import { Flame, Heart, ShoppingBag  } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface ProductCardProps {
  product: any;
}

const ProductCard = ({ product }: ProductCardProps) => {
    console.log(product);
  return (
    <div className="relative w-full bg-white border border-gray-200 rounded-lg shadow-sm">
      
       <Heart className="absolute top-2 right-2 rounded-full hover:bg-secondary hover:text-white p-2" size={36} />
       {(product?.status === 'hot') ? ( <Flame  className="absolute top-2 left-2 rounded-full border border-orange-400 text-orange-400 fill-orange-400 p-2" size={36} />) : (null)}
      
       <Link href="#">
        <Image
          className={` p-8 rounded-t-lg object-contain overflow-hidden transition-transform bg-shop_light_bg duration-500 
            ${product?.stock !== 0 ? "group-hover:scale-105" : "opacity-50"}`}
          src={urlFor(product.images[0]).url()}
          alt="product image"
          width={300}
          height={300}
          priority
        />
       
      </Link>
      <div className="px-5 pb-5">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900">
            Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
          </h5>

        <div className="flex items-center mt-2.5 mb-5">
          <div className="flex items-center space-x-1 rtl:space-x-reverse">
            {[1,2,3,4,5].map((e) => (e<5 ?  <svg
              className="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>:       <svg
              className="w-4 h-4 text-gray-200 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>))}
           
     
      
          </div>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">
            5.0
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900">
            $599
          </span>
          <button
            className="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center space-x-1.5 flex items-center justify-center gap-1.5"
          >
            Add to cart <ShoppingBag size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
