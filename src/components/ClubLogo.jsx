import React from 'react'
import injazLogo from '../assets/injaz.png'
import {FaCheckCircle  } from 'react-icons/fa'
import SocialMediaLinks from "../components/SocialMediaLinks";

const ClubLogo = () => {
  const clubInfos = [ {Name: '@InjazClub', Bio: `لن_نبرح_حتى_نبلغ#`} ]
  const clubName = clubInfos[0].Name
  const clubBio = clubInfos[0].Bio

  return (
    
    <div className='flex flex-col items-center my-8'>
        <img src={injazLogo} alt={`${clubName} Logo`} className='w-40 h-40 rounded-full border-2 border-gray-300'/>

        <div className='flex items-center'>
            <h1 className='mt-4 text-3xl font-bold text-gray-300' >{clubName}</h1>
            <FaCheckCircle   className='text-gray-300 mt-5 ml-1 w-5 h-5'  />
        </div>
            <h4 className='mt-2 font-bold text-md text-gray-300'>{clubBio}</h4>
            < SocialMediaLinks />
            
    </div>
  )
}

export default ClubLogo