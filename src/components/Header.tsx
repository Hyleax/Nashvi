import Image from 'next/image'
import React from 'react'
import logo from '../../public/nashvi2.png'
import Link from 'next/link'
import { l_spartan } from '@/utils/fonts'

const Header = () => {
  return (
    <header className=' from-indigo-800 via-indigo-900 to-indigo-950
        h-20 flex text-white justify-center shadow-lg mb-4 '>
        <div className="container flex justify-between items-center">
            <Link href={'/'}>
                <Image src={ logo } alt='logo' width={140} height={140} className=' mt-3 '/>
            </Link>

            <Link href={'/training'}>
              <button className={`bg-red-400 md:px-6 px-3 py-2 mr-6 rounded-full text-white font-semibold
                ${l_spartan.className} md:text-xl text-sm hover:bg-red-500 shadow-md tracking-wide`}>
                  Time to Train
              </button>
            </Link>
        </div>
    </header>
    )
}

export default Header