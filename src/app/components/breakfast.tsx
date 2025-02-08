import React from 'react'
import Image , {StaticImageData} from "next/image";
interface IBreakfast {
    image: StaticImageData,
    textone: string,
    texttwo: string,
    number: number
}
const Breakfast:React.FC<IBreakfast> = ({image, textone, texttwo, number}) => {
  return (
    <div className='h-[79] w-[376] flex mb-3 gap-2'>
      <Image src={image} alt='image' width={80} height={79}/>
      <div className='h-[auto] w-[300]'>
        <p className='text-xl text-white font-bold '>{textone}</p>
        <p className='text-gray-200'>{texttwo}</p>
        <p className='text-xl text-orange-400'>{number}{"$"}</p>
      </div>
    </div>
  )
}

export default Breakfast