import Link from 'next/link';
import Image from 'next/image';
import products from './lib/data.json'
import { Children } from 'react';

export default function Home({}) {
  return (
    <>
    <div className="  border-2 justify-center items-center bg-zinc-50 dark:bg-black">
    <div className='grid 
  grid-cols-1
  sm:grid-cols-2
  md:grid-cols-3
  lg:grid-cols-4
  xl:grid-cols-5
  2xl:grid-cols-6
  gap-6
  m-5
  p-4 '>
     {products.map(product=>
       <Link key={product.id} href={`/products/${product.id}`}
        className='border-2 border-green-300 bg-white dark:bg-neutral-900 p-3
        rounded h-40 flex flex-col justify-center items-center'>
         <Image src={product.image} alt={product.name}  width={80} height={80}/>
        <h1 className='text-lg font-semibold'>
          {product.name}
        </h1>
         <p className="text-sm text-gray-600">
           {product.price}
        </p>
        </Link>
    )}
    </div>
    </div>
    
    
    </>
  );
}
