import Image from 'next/image';
import React from 'react'
import avatar from '../public/me.png';

export default function Contact() {
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
            Want to chat? Find me here - {' '}
            <a className='underline' href="mailto:best.anya.ever@gmail.com?subject=Hi, Anya">best.anya.ever@gmail.com</a>
          </div>
        </div>
      </div>
    </div>
  )
}
