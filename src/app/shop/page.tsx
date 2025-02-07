import { Search, ShoppingBag, User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Shopproduct from '../components/shopproducts'
import cheesebutter from "/public/cheesebutter.png";
import chesseburgertwo from "/public/chessyburgertwo.png";
import frenchlime from "/public/freshlime.png";

import chocolatemuffin from "/public/chocolatemuffin.png";
import countryburger from "/public/countryburger.png";
import shopdrink from "/public/shopdrink.png";
import pizza from "/public/pizza.png";
import sandwiches from "/public/sandwiches.png";
import chickenchup from "/public/chickenchup.png";
import banner from "/public/banner.png";


export default function Shop() {
  return (
    <div className='min-h-screen'>
        <header className="top-0 left-0 right-0 z-50">
      <nav className="bg-black px-4 md:px-6">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center text-xl font-bold text-white">
            Food<span className="text-orange-500">tuck</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            
            <Link href="/" className="text-white hover:text-orange-500">
              Home
            </Link>
            <Link href="/menu" className="text-white hover:text-orange-500">
              Menu
            </Link>
            <Link href="/blog" className="text-white hover:text-orange-500">
              Blog
            </Link>
            <Link href="/pages" className="text-white hover:text-orange-500">
              Pages
            </Link>
            <Link href="/about" className="text-white hover:text-orange-500">
              About
            </Link>
            <Link href="/shop" className=" text-orange-500">
              Shop
            </Link>
            <Link href="/contact" className="text-white hover:text-orange-500">
              Contact
            </Link>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            
            <button className="text-white hover:text-orange-500">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </button>
            <Link
            href="/account">
            <button className="text-white hover:text-orange-500">
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </button>
            </Link>
            <Link href="/cart">
            <button className="text-white hover:text-orange-500">
              <ShoppingBag className="h-5 w-5" />
              <span className="sr-only">Cart</span>
            </button>
            </Link>
            </div>
          </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-[300px] w-full bg-cover bg-center" style={{ backgroundImage: `url('/hero-section.png')` }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center">
          <h1 className="mb-4 text-5xl font-bold text-white">Our Shop</h1>
          <div className="flex items-center gap-2 text-lg">
            <Link href="/" className="text-white hover:text-orange-500">
              Home
            </Link>
            <span className="text-white">&gt;</span>
            <span className="text-orange-500">Shop</span>
          </div>
        </div>
      </div>
    </header>
    {/* navbar end */}



<div className=' mt-7 mb-7 '>
   
   
  
</div>

<div className='lg:flex lg:ml-[320px] sm:block'>
 {/**first div */} <div>
 <div className="lg:flex lg:gap-4 sm:flex sm:gap-2 mb-4 h-[312] w-[1320]">
            <Shopproduct
              image={frenchlime}
              tittle="French Lime"
              price="32.00"
            />

            <Shopproduct
              image={chocolatemuffin}
              tittle="Chocolate Muffin"
              price="28.00.00"
            />

            <Shopproduct
              image={chesseburgertwo}
              tittle="Burger"
              price="21.00.00"
            />
          </div>

          <div className="lg:flex lg:gap-4 sm:flex sm:gap-2  h-[312] w-[1320] mb-4">
            <Shopproduct image={countryburger} tittle="Burger" price="45.00" />

            <Shopproduct image={shopdrink} tittle="Drink" price="23.00" />

            <Shopproduct image={pizza} tittle="Pizza" price="4300" />
          </div>

          <div className="lg:flex lg:gap-4 sm:flex sm:gap-2  h-[312] w-[1320] mb-4">
            <Shopproduct image={cheesebutter} tittle="Burger" price="10.00" />

            <Shopproduct image={sandwiches} tittle="Drink" price="25.00" />

            <Shopproduct image={chickenchup} tittle="Pizza" price="12.00" />
          </div>

          <div className="lg:flex lg:gap-4 sm:flex sm:gap-2  h-[312] w-[1320] mb-4">
            <Shopproduct image={countryburger} tittle="Burger" price="45.00" />

            <Shopproduct image={shopdrink} tittle="Drink" price="23.00" />

            <Shopproduct image={pizza} tittle="Pizza" price="4300" />
          </div>

          <div className="lg:flex lg:gap-4 sm:flex sm:gap-2 h-[312] w-[1320] mb-4">
            <Shopproduct image={cheesebutter} tittle="Burger" price="10.00" />

            <Shopproduct image={sandwiches} tittle="Drink" price="25.00" />

            <Shopproduct image={chickenchup} tittle="Pizza" price="12.00" />
          </div>
 </div>
 {/**second div */}  <div>
 <div className="h-[1489] w-[312] mt-4 pt-2 ml-9 mr-8">
          <div className="flex bg-red-200  h-[46] w-[248]">
            <input placeholder="Search Product" type="search" />
            <button className="bg-orange-500 h-[46] w-[46]" />
          </div>

          <p className="text-2xl mt-2 mb-2 font-bold">{"Category"}</p>
          <div className="flex gap-2">
            <input type="checkbox" />{" "}
            <p className="text-lg text-gray-600">{"Sandwiches"}</p>
          </div>

          <div className="flex gap-2">
            <input type="checkbox" />{" "}
            <p className="text-lg text-gray-600">{"Burger"}</p>
          </div>

          <div className="flex gap-2">
            <input type="checkbox" />{" "}
            <p className="text-lg text-gray-600">{"Chicken Chup"}</p>
          </div>

          <div className="flex gap-2">
            <input type="checkbox" />{" "}
            <p className="text-lg text-gray-600">{"Drink"}</p>
          </div>

          <div className="flex gap-2">
            <input type="checkbox" />{" "}
            <p className="text-lg text-gray-600">{"Pizza"}</p>
          </div>

          <div className="flex gap-2">
            <input type="checkbox" />{" "}
            <p className="text-lg text-gray-600">{"Thi"}</p>
          </div>

          <div className="flex gap-2">
            <input type="checkbox" />{" "}
            <p className="text-lg text-gray-600">{"Non Veg"}</p>
          </div>

          <div className="flex gap-2">
            <input type="checkbox" />{" "}
            <p className="text-lg text-gray-600">{"Uncategorized"}</p>
          </div>

          <div className="h-[286] w-[248] ">
            <Image
              src={banner}
              alt="image"
              className="mt-3 ml-3 relative z-40"
            />
          </div>

          <div className="h-[87] w-[248]">
            <p className="font-bold text-xl text-gray-700 mt-3 mb-4">
              {"Filter By Price"}
            </p>

            <div className="h-[2px] w-[248] bg-orange-500 "></div>
            <div className="flex gap-3">
              <p className="text-gray-600">{"$0 to $8000"}</p>
              <p className="text-gray-600">{"Filter"}</p>
            </div>
          </div>

          <div className="h-[368] w-[252] ">
            <p className="text-xl font-bold mb-3">{"Latest Products"}</p>
            <div className="h-[67] w-[252] flex gap-2 mb-3">
              <Image src={pizza} alt="image" height={65} width={72} />

              <div className="h-[auto] w-[auto]">
                <p className="text-gray-500 mt-2 mb-2">{"Pizza"}</p>
                <p className="text-gray-600 mt-1">{"$35.00"}</p>
              </div>
            </div>

            <div className="h-[67] w-[252] flex gap-2 mb-3">
              <Image src={pizza} alt="image" height={65} width={72} />

              <div className="h-[auto] w-[auto]">
                <p className="text-gray-500 mt-2 mb-2">{"Cupchake"}</p>
                <p className="text-gray-600 mt-1">{"$35.00"}</p>
              </div>
            </div>

            <div className="h-[67] w-[252] flex gap-2 mb-3">
              <Image src={pizza} alt="image" height={65} width={72} />

              <div className="h-[auto] w-[auto]">
                <p className="text-gray-500 mt-2 mb-2">{"Cookies"}</p>
                <p className="text-gray-600 mt-1">{"$35.00"}</p>
              </div>
            </div>

            <div className="h-[67] w-[252] flex gap-2 ">
              <Image src={pizza} alt="image" height={65} width={72} />

              <div className="h-[auto] w-[auto]">
                <p className="text-gray-500 mt-2 mb-2">{"Burger"}</p>
                <p className="text-gray-600 mt-1">{"$35.00"}</p>
              </div>
            </div>

            <div className="h-[162] w-[225] mt-6">
              <p className="text-xl text-gray-700 font-bold mb-6">
                {"Product Tags"}
              </p>

              <div className="h-[auto] w-[auto] flex gap-2">
                <p className=" text-gray-600">{"Services"}</p>
                <p className=" text-gray-600">{"Our Menu"}</p>
                <p className=" text-gray-600">{"Pizza"}</p>
              </div>

              <div className="h-[auto] w-[auto] mt-2 flex gap-2">
                <p className=" text-gray-600">{"Cupcake"}</p>
                <p className=" text-orange-500">{"Burger"}</p>
                <p className=" text-gray-600">{"Cookies"}</p>
              </div>

              <div className="h-[auto] mt-2 w-[auto] flex gap-2">
                <p className=" text-gray-600">{"Our shop"}</p>
                <p className=" text-gray-600">{"Tandoori"}</p>
                <p className=" text-gray-600">{"Cicken"}</p>
              </div>
            </div>
          </div>
        </div>
 </div>
</div>
<div className='flex justify-center mb-5'>
<Image
    src="/Shop3.png"
    alt='shop'
    height={700}
    width={700}
    className=''/>
</div>

    </div>
  )
}
