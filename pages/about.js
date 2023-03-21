import Image from 'next/image';
import React from 'react'
import avatar from '../public/hike.png';


export default function About() {
  //todo implement carousel here
  return (
    <div className='container mx-auto px-10 mb-8'>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 py-12'>
        <div className='col-span-1 lg:col-span-5'>
          <div flex items-center mb-8 w-full justify-start >
            <Image 
              alt="authors_photo"
              className='align-middle rounded-lg shadow-lg'
              src={avatar}
            />
          </div>
        </div>
        <div className='col-span-1 lg:col-span-7'>
          <div className='bg-white shadow-lg rounded-lg lg:p-8 pb-12 leading-6 text-brown'>
            <p className='pb-3'>Hey, I'm Anya :)</p>
            <p className='pb-3'>
              Not sure what to say here, they just normally put the "About" page on the websites. I guess this whole thing - is my "About" page, or a story, or a book.
            </p>
            <p className='pb-3'>
              But for now.
              <br />
              I'm {Math.floor((new Date() - new Date("08-11-1997").getTime()) / 3.15576e+10)}. Born in Ukraine, raised in Russia and currently living my best life in Israel.
            </p>
            <p>
              I used to be an acrobat and a nursery teacher. And I'm clearly trying to live 20 lives in 1... Now programming, traveling and looking for a way to make a change.
            </p>
          </div> 
        </div>
      </div>
    </div>
  )
}
