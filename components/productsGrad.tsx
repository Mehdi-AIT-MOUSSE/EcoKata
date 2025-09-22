"use client";

import { client } from "@/sanity/lib/client";
import { useEffect, useState } from "react";
import Containner from "./containner";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import ProductCard from "./productCard";

const ProductsGrad = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const query = `*[_type == "product" && isFeatured == true] | order(name asc) [0...4]`;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await client.fetch(query);
        setProducts(response);
      } catch (error) {
        console.log("Product fetching Error", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <Containner className="p-12">
      <div className="flex justify-between items-center mb-5">
       <h2 className="text-xl lg:text-3xl font-semibold">Featured <span className="text-secondary inline">Products</span></h2>
       <Link href="/shop" className="text-primary text-semibold flex items-center justify-center gap-1">View All <ArrowRightIcon className="w-4 h-4" /></Link>
      </div>
      
      {loading ? (
        <div>Loading products...</div>
      ) : (
        <div>
          {products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2.5">
              {products.map((product: any, index: number) => (
                <ProductCard key={product._id || index} product={product} />
              ))}
            </div>
          ) : (
            <p>No products found</p>
          )}
        </div>
      )}
    </Containner>
  );
};

export default ProductsGrad;
