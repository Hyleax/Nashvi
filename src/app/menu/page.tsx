import React from 'react'
import { l_spartan } from '@/utils/fonts'
import { FaUsers } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { MenuBtn } from './MenuBtn';
import { FaUserNinja } from "react-icons/fa";



const menuPage = () => {
  return (
    <main className={`flex flex-col flex-1 items-center justify-center ${l_spartan.className} gap-[50px]`}>
        <h2 className='md:text-5xl text-4xl font-semibold'>Training Modes</h2>
        <div className="flex md:flex-row flex-col items-center gap-10 md:mb-0 mb-2">
            
            <MenuBtn route='/singleplayer-casual' bntText='Singleplayer casual' icon={<FaUser size={50}/>}/>

            <MenuBtn route='/singleplayer-competitive' bntText='Singleplayer competitive' icon={<FaUserNinja size={50}/>}/>

            <MenuBtn route='/multiplayer' bntText='Multiplayer' icon={<FaUsers size={50}/>}/>

        </div>
    </main>
  )
}

export default menuPage