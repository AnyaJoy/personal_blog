import React, { useContext } from 'react';

import Link from 'next/link';

const pages = [{ name: "Contact", slug: "/contact" }, { name: "About", slug: "/about" }];

function Navbar() {
  return (
    <div className='container mx-auto px-10 mb-5 navbar'>
        <div className='border-b w-full inline-block border-lightBrown py-6'>
            <div className='md:float-left block'>
                <Link href="/">
                    <span className='cursor-pointer font-bolf text-brown font-fairy-tale italic text-4xl font-light'>Live with Joy</span>
                </Link>
            </div>
            <div className='hidden md:contents'>
                {pages.map((page, index) => (
                    <Link href={page.slug} key={page.name}>
                        <span className='md:float-right text-brown ml-4 cursor-pointer mt-4 hover:text-pastelPink transition duration-700'>
                            {page.name}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Navbar