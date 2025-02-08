import Link from "next/link";
import Navbar1 from "./components/Navbar1";
import Image from "next/image";
import Breakfast from "./components/breakfast";
import burger  from "/public/burger.png"
import glowshese from "/public/glowchesse.png";
import italian from "/public/italianpizza.png";
import slicebeef from "/public/slicebeef.png"
import kofta from "/public/kofta.png";
import milkbutter from "/public/milkbutter.png";
import freshbread from "/public/freshbread.png"
import chooseandpick from "/public/Choose & pick.png";
import ourmenu from "/public/From Our Menu.png";


export default function Home() {
  return (
    <div className=" bg-black min-h-screen">
      <Navbar1/>

      {/* first layout */}
      <div className="pt-20 bg-black text-white relative overflow-hidden ">
      <div className="container mx-auto px-4 h-full">
      
        <div className="grid md:grid-cols-2 gap-8 items-center h-full ">
        
          {/* Left Content */}
          
          <div className="space-y-6 mx-auto ">
            <p className="text-orange-500 font-script text-2xl">Its Quick & Amusing!</p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="text-orange-500">Th</span>e Art of speed
              <br />
              food <span>Quality</span>
            </h1>
            <p className="text-gray-400 max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Varius sed pharetra dictum neque massa congue
            </p>
            <Link
              href="/menu"
              className="inline-block bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-colors"
            >
              See Menu
            </Link>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative w-full aspect-square">
              <Image
                src="/home-pic-1.png"
                alt="Delicious dish with rice and eggs"
                fill
                className="object-contain"
                priority
              />
              
            </div>
          </div>
        </div>
      </div>
     </div>




     {/* second layout */}


     <div className="pt-20 bg-black text-white relative overflow-hidden">
      <div className="container mx-auto px-2 h-full">
        <div className="grid md:grid-cols-2 gap-8 items-center h-full py-12">
          {/* Left Content */}
          <div className="space-y-6 mx-auto">
            <p className="text-orange-500 font-script text-2xl">About us</p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="text-orange-500">We </span>Create the best
              <br />
              foody <span>product</span>
            </h1>
            <p className="text-gray-400 max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Varius sed pharetra dictum neque massa congue
            </p>
            <h1>✔️ Lorem ipsum dolor sit amet, consectetur </h1>
            <h1>✔️ Lorem ipsum dolor sit amet, consectetur </h1>
            <h1>✔️ Lorem ipsum dolor sit amet, consectetur </h1>

            <Link
              href="/menu"
              className="inline-block bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-colors"
            >
              Read More
            </Link>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative w-full aspect-square">
              <Image
                src="/home-pic-2.png"
                alt="Delicious dish with rice and eggs"
                fill
                className="object-contain"
                priority
              />
              
            </div>
          </div>
        </div>
      </div>
     </div>

{/* 
food-catogories */}

     <div className='flex justify-center  mt-8 ml-9 scale-150'>
  <Image
    src="/home-pic-3.1.png"
    alt='Food Categories'
    height={1000}
    width={1000}
  />
  
</div>

<div className="mt-5 lg:flex lg:justify-center p-8 lg:space-x-3 space-y-8">
<Image
    src="/home-pic-3.2.png"
    alt='Food Categories'
    height={1000}
    width={1000}
  />
   <Image
    src="/home-pic-3.3.png"
    alt='Food Categories'
    height={1000}
    width={1000}
  />
   <Image
    src="/home-pic-3.4.png"
    alt='Food Categories'
    height={1000}
    width={1000}
  />
   <Image
    src="/home-pic-3.5.png"
    alt='Food Categories'
    height={1000}
    width={1000}
  />
  </div>

{/* why choose us */}

<div className="pt-20 bg-black text-white relative overflow-hidden ">
      <div className="container mx-auto px-2 h-full">
        <div className="grid md:grid-cols-2 gap-8 items-center h-full py-12">
        <div className="relative">
            <div className="relative w-full aspect-square">
              <Image
                src="/home-pic-4.png"
                alt="Why Choose Us"
                fill
                className="object-contain"
                priority
              />
              
            </div>
          </div>
         
          <div className="space-y-6 mx-auto lg:text-left sm:text-center">
            <p className="text-orange-500 font-script text-2xl">Why Choose us</p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="text-orange-500">Ex</span>tra ordinary taste and Experienced
              <br />
              foody <span>product</span>
            </h1>
            <p className="text-gray-400 max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Varius sed pharetra dictum neque massa congue
            </p>
            <Image
                src="/home-pic-4-icon.png"
                alt="Why Choose Us"
                height={250}
                width={250}
              />
          </div>
        </div>
      </div>
     </div>

     {/* clients */}

     <div className='  mt-8 '>
  <Image  
    src="/home-pic-5.png"
    alt='Food Categories'
    height={1000}
    width={1000}
    className="w-full"
    
  />
</div>


 {/**menu   start */}
 <div className="h-[656] lg:w-auto bg-black sm:pt-11  sm:ml-0 ">
      <div className="h-[600] lg:w-[auto]   border-[1px] pl-[100px] sm:ml-0 border-white sm:pt-3">
         <Image src={chooseandpick} alt="image" width={144} height={40} className=" lg:ml-[800px] sm:ml-[300px] lg:mt-9 lg:mb-4 lg:h-[40px] lg:w-[144px]"/>
         <Image src={ourmenu} alt="image" className="lg:pl-[600]"/>
         <div className="h-[60] lg:w-[1100] bg-black lg:mt-[40]   lg:justify-between lg:flex  flex gap-2  lg:gap-3 sm:pt-4 sm:ml-2">
          <p className="text-orange-400 text-xl">{"Breakfast"}</p>
          <p className="text-gray-300 text-xl">{"Lunch"}</p>
          <p className="text-gray-300 text-xl">{"Dinner"}</p>
          <p className="text-gray-300 text-xl">{"Dessert"}</p>
          <p className="text-gray-300 text-xl">{"Drink"}</p>
          <p className="text-gray-300 text-xl">{"Snack"}</p>
          <p className="text-gray-300 text-xl">{"soups"}</p>
         </div>

         <div className="h-[570] w-[600]    sm:pt-2 lg:flex lg:gap-20  sm:gap-[0px] sm:flex">
        
          <div className="h-[515] w-[406]">
            <Breakfast
            image={kofta} textone="Lettuce Leaf" texttwo="lasus from ek ka iskam kuim ho "
            number={12.5}/>
              <Breakfast
            image={burger} textone="Fresh BreakFast" texttwo="lasus from ek ka iskam kuim ho "
            number={14.5}/>
                <Breakfast
            image={milkbutter} textone="Fresh BreakFast" texttwo="lasus from ek ka iskam kuim ho "
            number={12.5}/>
                  <Breakfast
            image={freshbread} textone="Fresh BreakFast" texttwo="lasus from ek ka iskam kuim ho "
            number={12.5}/>
          </div>
          <div className="h-[515] lg:w-[406] lg:ml-[200px] sm:ml-0 ">
          <Breakfast
            image={glowshese} textone="Fresh BreakFast" texttwo="lasus from ek ka iskam kuim ho "
            number={12.5}/>
                  <Breakfast
            image={italian} textone="Fresh BreakFast" texttwo="lasus from ek ka iskam kuim ho "
            number={12.5}/>
                  <Breakfast
            image={slicebeef} textone="Fresh BreakFast" texttwo="lasus from ek ka iskam kuim ho "
            number={12.5}/>
                  <Breakfast
            image={burger} textone="Fresh BreakFast" texttwo="lasus from ek ka iskam kuim ho "
            number={12.5}/>
          </div>
         </div>
      </div>
      </div>
 {/**menu   start */}

<div className='flex justify-center mt-8 scale-150 '>
  <Image
    src="/home-pic-7.1.png"
    alt='Food Categories'
    height={1000}
    width={1000}
  />
</div>

<div className="mt-5 lg:flex lg:justify-center p-8 lg:space-x-3 space-y-8">
<Image
    src="/home-pic-7.2.png"
    alt='Food Categories'
    height={1000}
    width={1000}
  />
   <Image
    src="/home-pic-7.3.png"
    alt='Food Categories'
    height={1000}
    width={1000}
  />
   <Image
    src="/home-pic-7.4.png"
    alt='Food Categories'
    height={1000}
    width={1000}
  />
   <Image
    src="/home-pic-7.5.png"
    alt='Food Categories'
    height={1000}
    width={1000}
  />
   
  </div>

<div className='flex justify-center mt-8 '>
  <Image
    src="/home-pic-8.png"
    alt='Food Categories'
    height={1000}
    width={1000}
  />
</div>

<div className='  mt-8 '>
  <Image
    src="/home-pic-5.png"
    alt='Food Categories'
    height={1000}
    width={1000}
    className="w-full"
    
  />
</div>

<div className='flex justify-center mt-8 '>
  <Image
    src="/home-pic-10.1.png"
    alt='Food Categories'
    height={1000}
    width={1000}
  />
</div>


<div className="mt-5 lg:flex lg:justify-center p-8 lg:space-x-3 space-y-8">
<Image
    src="/home-pic-10.2.png"
    alt='Food Categories'
    height={1000}
    width={1000}
  />
   <Image
    src="/home-pic-10.3.png"
    alt='Food Categories'
    height={1000}
    width={1000}
  />
   <Image
    src="/home-pic-10.4.png"
    alt='Food Categories'
    height={1000}
    width={1000}
  />

   
  </div>

    </div>
  );
}
