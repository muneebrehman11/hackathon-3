import React from 'react'
import Image from 'next/image'
import { Heart, ShoppingCart, Eye, ChevronRight, } from 'lucide-react'

const cientsLogos = [
  {
    image: "/assets/clien1.png",
    alt: "clients"
  },
  {
    image: "/assets/clien2.png",
    alt: "clients"
  },
  {
    image: "/assets/clien3.png",
    alt: "clients"
  },
  {
    image: "/assets/clien4.png",
    alt: "clients"
  },
  {
    image: "/assets/clien5.png",
    alt: "clients"
  },
  {
    image: "/assets/clien6.png",
    alt: "clients"
  },
]
export default function Product() {
  return (
    <div >

      <div className="space-x-2 flex justify-start py-4 px-6 sm:px-10 ">
        <button className="font-bold">Home</button>
        <p>{">"}</p>
        <button className="font-bold text-slate-500">Shop</button>
      </div>

      <div className='flex flex-col lg:flex-row justify-center items-center md:py-4 md:px-6 sm:px-10 gap-28'>
        {/* left content */}
        <div className=''>
          <Image src='/assets/product-main.jpg' alt='product' width={506} height={540} className='hover:opacity-90 bg-black ' />
          <div className='flex py-5 gap-5'>

            <Image src='/assets/single-product-1-cover-1.jpg' alt='product' width={100} height={75} />
            <Image src='/assets/product-inner.png' alt='product' width={100} height={75} />
          </div>

        </div>

        {/* right content  */}
        <div className='flex-1  space-y-5 '>
          <h3 className='text-xl text-slate-600'>Floating Phone</h3>
          <div className='flex items-center'>
            <Image src='/assets/Four-Star.png' alt='four stars' width={130.07} height={22} />
            <p className='text-slate-600 font-semibold'>10 reviews</p>
          </div>
          <p className='font-bold text-2xl'>$1,149.90</p>
          <p className='text-slate-600 font-semibold '>Availability : <span className='text-blue-400 font-bold cursor-pointer'>In Stock</span></p>
          <p className='text-gray-400 '>Met minim Mollie non desert Alamo est sit cliquey dolor
            do met sent. RELIT official consequent door ENIM RELIT Mollie.
            Excitation venial consequent sent nostrum met.
          </p>
          <hr />
          <div className='flex gap-1'>
            <div className='w-[30px] h-[30px] rounded-full bg-blue-400 cursor-pointer'> </div>
            <div className='w-[30px] h-[30px] rounded-full bg-green-400 cursor-pointer'> </div>
            <div className='w-[30px] h-[30px] rounded-full bg-orange-400 cursor-pointer'> </div>
            <div className='w-[30px] h-[30px] rounded-full bg-black cursor-pointer'> </div>
          </div>
          <div className='flex gap-2 items-center'>
            <button className="px-6 md:px-8 py-2 md:py-3 bg-blue-400 text-white font-medium rounded-lg hover:bg-blue-600 transition">
              Select Options
            </button>
            <div className=' border-2 rounded-full p-2 hover:bg-slate-200 cursor-pointer'>
              <Heart />
            </div>
            <div className=' border-2 rounded-full p-2 hover:bg-slate-200 cursor-pointer'>
              <ShoppingCart />
            </div>
            <div className=' border-2 rounded-full p-2 hover:bg-slate-200 cursor-pointer'>
              <Eye />
            </div>
          </div>

        </div>

      </div>

      {/* <div className='py-4 px-6 sm:px-10 flex space-x-6 z-0 relative'>
          <div className='h-[572px] w-[80px] bg-pink-200 '></div>
          <div className='h-[572px] w-[80px] bg-pink-200 '></div>
          <div className='h-[572px] w-[80px] bg-pink-200 '></div>
          <div className='h-[572px] w-[80px] bg-pink-200 '></div>
          <div className='h-[572px] w-[80px] bg-pink-200 '></div>
          <div className='h-[572px] w-[80px] bg-pink-200 '></div>
          <div className='h-[572px] w-[80px] bg-pink-200 '></div>
          <div className='h-[572px] w-[80px] bg-pink-200 '></div>
          <div className='h-[572px] w-[80px] bg-pink-200 '></div>
          <div className='h-[572px] w-[80px] bg-pink-200 '></div>
          <div className='h-[572px] w-[80px] bg-pink-200 '></div>
          <div className='h-[572px] w-[80px] bg-pink-200 '></div>
          <div className='h-[572px] w-[80px] bg-pink-200 '></div>
          <div className='h-[572px] w-[80px] bg-pink-200 '></div>  
      </div> */}
      <div className='my-10'>
        <ul className='flex 
         justify-center gap-x-16'>
          <li>Description</li>
          <li>Addition Information</li>
          <li>Reviews(0)</li>
        </ul>
        <hr />
      </div>
      <div className='flex flex-col place-items-center md:flex-row justify-center lg:gap-x-10'>
        <div className=''>
          <Image src='/assets/card-item(1).png' alt='img' width={332} height={392} className='' />
        </div>
        <div className='w-[332px] '>
          <h1 className='font-bold'>the quick fox jumps over </h1>
          <br />
          <p className='text-sm text-gray-400'>
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
            <br />
            <br />
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
            <br />
            <br />
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
          </p>
        </div>
        <div className='w-[332px] leading-7 place-items-center'>
          <h1 className='font-bold'>the quick fox jumps over </h1>
          <div className='flex'>
            <ChevronRight /><p className='text-gray-700 '>the quick fox jumps over </p>
          </div>
          <div className='flex'>
            <ChevronRight /><p className='text-gray-700 '>the quick fox jumps over </p>
          </div>
          <div className='flex'>
            <ChevronRight /><p className='text-gray-700 '>the quick fox jumps over </p>
          </div>
          <div className='flex'>
            <ChevronRight /><p className='text-gray-700 '>the quick fox jumps over </p>
          </div>
          <br />
          <h1 className='font-bold'>the quick fox jumps over </h1>
          <div className='flex'>
            <ChevronRight /><p className='text-gray-700 '>the quick fox jumps over </p>
          </div>
          <div className='flex'>
            <ChevronRight /><p className='text-gray-700 '>the quick fox jumps over </p>
          </div>
          <div className='flex'>
            <ChevronRight /><p className='text-gray-700 '>the quick fox jumps over </p>
          </div>
        </div>
      </div>

      <div className='bg-[#fafafa] flex flex-col gap-8 py-10'>
        <h1 className='text-2xl font-bold text-center'>
          BESTSELLER PRODUCTS
        </h1>
        <div className='grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4  place-content-center px-24 place-items-center gap-5'>
          <div className='bg-white w-[239px] hover:shadow-md hover:border'>
            <Image src='/assets/crockery1.png' alt='crokery' width={239} height={280} />
            <div className='ml-4 py-6 leading-9'>
              <h3 className='font-semibold'>Graphic Design</h3>
              <p className='text-slate-600 font-semibold text-sm'>English department</p>
              <p className='text-slate-400 font-semibold'>$12.10 <span className='text-green-600'>$8.32</span></p>
            </div>
          </div>
          <div className='bg-white w-[239px] hover:shadow-md hover:border'>
            <Image src='/assets/crockery2.png' alt='crokery' width={239} height={280} />
            <div className='ml-4 py-6 leading-9'>
              <h3 className='font-semibold'>Graphic Design</h3>
              <p className='text-slate-600 font-semibold text-sm'>English department</p>
              <p className='text-slate-400 font-semibold'>$12.10 <span className='text-green-600'>$8.32</span></p>
            </div>
          </div>
          <div className='bg-white w-[239px] hover:shadow-md hover:border'>
            <Image src='/assets/crockery3.png' alt='crokery' width={239} height={280} />
            <div className='ml-4 py-6 leading-9'>
              <h3 className='font-semibold'>Graphic Design</h3>
              <p className='text-slate-600 font-semibold text-sm'>English department</p>
              <p className='text-slate-400 font-semibold'>$12.10 <span className='text-green-600'>$8.32</span></p>
            </div>
          </div>
          <div className='bg-white w-[239px] hover:shadow-md hover:border'>
            <Image src='/assets/crockery4.png' alt='crokery' width={239} height={280} />
            <div className='ml-4 py-6 leading-9'>
              <h3 className='font-semibold'>Graphic Design</h3>
              <p className='text-slate-600 font-semibold text-sm'>English department</p>
              <p className='text-slate-400 font-semibold'>$12.10 <span className='text-green-600'>$8.32</span></p>
            </div>
          </div>
        </div>

        <div className='grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4  place-content-center px-24 place-items-center gap-5'>
          <div className='bg-white w-[239px] hover:shadow-md hover:border'>
            <Image src='/assets/crockery5.png' alt='crokery' width={239} height={280} />
            <div className='ml-4 py-6 leading-9'>
              <h3 className='font-semibold'>Graphic Design</h3>
              <p className='text-slate-600 font-semibold text-sm'>English department</p>
              <p className='text-slate-400 font-semibold'>$12.10 <span className='text-green-600'>$8.32</span></p>
            </div>
          </div>
          <div className='bg-white w-[239px] hover:shadow-md hover:border'>
            <Image src='/assets/crockery1.png' alt='crokery' width={239} height={280} />
            <div className='ml-4 py-6 leading-9'>
              <h3 className='font-semibold'>Graphic Design</h3>
              <p className='text-slate-600 font-semibold text-sm'>English department</p>
              <p className='text-slate-400 font-semibold'>$12.10 <span className='text-green-600'>$8.32</span></p>
            </div>
          </div>
          <div className='bg-white w-[239px] hover:shadow-md hover:border'>
            <Image src='/assets/crockery6.png' alt='crokery' width={239} height={280} />
            <div className='ml-4 py-6 leading-9'>
              <h3 className='font-semibold'>Graphic Design</h3>
              <p className='text-slate-600 font-semibold text-sm'>English department</p>
              <p className='text-slate-400 font-semibold'>$12.10 <span className='text-green-600'>$8.32</span></p>
            </div>
          </div>
          <div className='bg-white w-[239px] hover:shadow-md hover:border'>
            <Image src='/assets/crockery3.png' alt='crokery' width={239} height={280} />
            <div className='ml-4 py-6 leading-9'>
              <h3 className='font-semibold'>Graphic Design</h3>
              <p className='text-slate-600 font-semibold text-sm'>English department</p>
              <p className='text-slate-400 font-semibold'>$12.10 <span className='text-green-600'>$8.32</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* clients images */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-14 my-10">
        {
          cientsLogos.map((cimages, i) => (
            <div key={i} >
              <Image src={cimages.image} alt={cimages.alt} width={100} height={50} />
            </div>
          ))
        }
      </div>
    </div>
  )
}
