import React from 'react'
import Image, { StaticImageData } from "next/image";

interface Ishopproduct {
    image: StaticImageData,
    tittle: string,
    price: string,

}
const Shopproduct:React.FC<Ishopproduct> = ({image, tittle, price}) => {
  return (
    <div className='h-[312] w-[330]'>
        <Image src={image} alt='image' width={312} height={267} className=''/>
        <p className='font-bold text-gray-700 mt-1 '>{tittle}</p>
        <p className='text-orange-500 '>{"$"}{price}</p>
    </div>
  )
}

export default Shopproduct;