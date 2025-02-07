'use client'

import Link from 'next/link'
import Image from "next/image"
import { Search, User, ShoppingBag, Award, Calendar, Pizza, Users } from 'lucide-react'
interface MenuItem {
    name: string
    description: string
    calories: string
    price: string
  }
  
  interface MenuSection {
    title: string
    items: MenuItem[]
    image: string
  }
  
  interface StatItem {
    icon: React.ReactNode
    value: string
    label: string
  }

export default function Menu() {
    const menuSections: MenuSection[] = [
        {
          title: "Starter Menu",
          image: "/menu-1.png",
          items: [
            {
              name: "Alder Grilled Chinook Salmon",
              description: "Toasted French bread topped with romesco, cheddar",
              calories: "560 Cal.",
              price: "$32",
            },
            {
              name: "Berries and creme tart",
              description: "Gorgonzola, ricotta, mozzarella, brioche",
              calories: "760 Cal.",
              price: "$43",
            },
            {
              name: "Tormentoso Bush Pizza Pintoage",
              description: "Ground lamb, avocados, roasted red salad",
              calories: "1020 Cal.",
              price: "$14",
            },
            {
              name: "Spicy Vegan Potato Curry",
              description: "Spectacular cream cheese, crumbled blue cheese",
              calories: "560 Cal.",
              price: "$35",
            },
          ],
        },
        {
          title: "Main Course",
          image: "/menu-2.png",
          items: [
            {
              name: "Optic Big Breakfast Combo Menu",
              description: "Toasted French bread topped with romesco, cheddar",
              calories: "960 Cal.",
              price: "$32",
            },
            {
              name: "Cashew Chicken With Stir-Fry",
              description: "Gorgonzola, ricotta, mozzarella, brioche",
              calories: "700 Cal.",
              price: "$43",
            },
            {
              name: "Vegetables & Green Salad",
              description: "Ground lamb, avocados, roasted red salad",
              calories: "1050 Cal.",
              price: "$14",
            },
            {
              name: "Spicy Vegan Potato Curry",
              description: "Spectacular cream cheese, crumbled blue cheese",
              calories: "460 Cal.",
              price: "$35",
            },
          ],
        },
        {
          title: "Dessert",
          image: "/menu-3.png",
          items: [
            {
              name: "Fig and lemon cake",
              description: "Toasted French bread topped with romesco, cheddar",
              calories: "560 Cal.",
              price: "$32",
            },
            {
              name: "Creamy mascarpone cake",
              description: "Gorgonzola, ricotta, mozzarella, brioche",
              calories: "700 Cal.",
              price: "$43",
            },
            {
              name: "Pastry, blueberries, lemon juice",
              description: "Ground lamb, avocados, roasted and salad",
              calories: "1000 Cal.",
              price: "$14",
            },
            {
              name: "Pain au chocolat",
              description: "Spectacular cream cheese, crumbled blue cheese",
              calories: "560 Cal.",
              price: "$35",
            },
          ],
        },
        {
          title: "Drinks",
          image: "/menu-4.png",
          items: [
            {
              name: "Caffé macchiato",
              description: "Toasted French bread topped with syrups, cheddar",
              calories: "560 Cal.",
              price: "$32",
            },
            {
              name: "Aperol Spritz Capacianno",
              description: "Gorgonzola, ricotta, mozzarella, brioche",
              calories: "700 Cal.",
              price: "$43",
            },
            {
              name: "Caffe Latte Campuri",
              description: "Ground lamb, avocados, roasted and salad",
              calories: "1000 Cal.",
              price: "$14",
            },
            {
              name: "Tormentoso BushTea Pintoage",
              description: "Spectacular cream cheese, crumbled blue cheese",
              calories: "560 Cal.",
              price: "$35",
            },
          ],
        },
      ]
    
      const stats: StatItem[] = [
        {
          icon: <Award className="h-6 w-6" />,
          value: "420",
          label: "Restaurant rating",
        },
        {
          icon: <Calendar className="h-6 w-6" />,
          value: "320",
          label: "Years of Food",
        },
        {
          icon: <Pizza className="h-6 w-6" />,
          value: "30+",
          label: "Years of Experience",
        },
        {
          icon: <Users className="h-6 w-6" />,
          value: "220",
          label: "Happy Customers",
        },
      ]




  return (
    
    <div className='min-h-screen'>
        {/* navbar */}
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
            <Link href="/menu" className="text-orange-500">
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
            <Link href="/shop" className="text-white hover:text-orange-500">
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
          <h1 className="mb-4 text-5xl font-bold text-white">Our Menu</h1>
          <div className="flex items-center gap-2 text-lg">
            <Link href="/" className="text-white hover:text-orange-500">
              Home
            </Link>
            <span className="text-white">&gt;</span>
            <span className="text-orange-500">Menu</span>
          </div>
        </div>
      </div>
    </header>
    {/* navbar end */}



{/* card */}
<div className="container mx-auto px-4 py-8">
      {menuSections.map((section, index) => (
        <div key={index} className="mb-16">
          <div className={`grid md:grid-cols-2 gap-8 items-start ${index % 2 === 0 ? '' : 'md:grid-flow-col-dense'}`}>
            {index % 2 === 0 ? (
              <>
                <div className="relative h-[400px] rounded-lg overflow-hidden mx-auto">
                  <Image
                    src={section.image}
                    alt={section.title}
                    width={300}
                    height={300}
                    className='object-cover'
                    
                  />
                </div>
                <div className="space-y-6 mx-auto">
                  <h2 className="text-2xl font-bold">{section.title}</h2>
                  <div className="space-y-4">
                    {section.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="flex justify-between items-start border-b border-gray-200 pb-4"
                      >
                        <div className="space-y-1">
                          <h3 className="font-medium">{item.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            {item.description}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {item.calories}
                          </p>
                        </div>
                        <div className="text-orange-400 font-medium">{item.price}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="space-y-6 mx-auto">
                  <h2 className="text-2xl font-bold">{section.title}</h2>
                  <div className="space-y-4">
                    {section.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="flex justify-between items-start border-b border-gray-200 pb-4"
                      >
                        <div className="space-y-1">
                          <h3 className="font-medium">{item.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            {item.description}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {item.calories}
                          </p>
                        </div>
                        <div className="text-orange-400 font-medium">{item.price}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative h-[300px] rounded-lg overflow-hidden mx-auto">
                  <Image
                    src={section.image}
                    alt={section.title}
                    width={300}
                    height={300}
                    className="object-cover"
                  />
                </div>
              </>
            )}
          </div>

          {/* Stats Section */}
          {index === 1 && (
            <div className="bg-black text-white py-8 px-4 rounded-lg my-16">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, statIndex) => (
                  <div
                    key={statIndex}
                    className="flex flex-col items-center text-center space-y-2"
                  >
                    {stat.icon}
                    <span className="text-2xl font-bold">{stat.value}</span>
                    <span className="text-sm text-gray-400">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>

      <div className='text-center text-3xl'>
        <p>Partners & Clients</p>
        <h1 className='font-bold'>We work with the best people</h1>
      </div>
    <div className=' mb-14 lg:flex lg:justify-center p-8 lg:space-x-3 space-y-8'>
        <Image
        src="/menu-5.1.png"
        alt='menu-5'
        height={1000}
        width={1000}
        className=''
        />
          <Image
        src="/menu-5.2.png"
        alt='menu-5'
        height={1000}
        width={1000}
        className=''
        />
    </div>

    </div>
  )
}

