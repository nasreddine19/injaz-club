import React from 'react'
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram ,  FaTiktok } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
const SocialMediaLinks = () => {
    const socialLinks = [
        {
            platform: 'Facebook',
            link: 'https://www.facebook.com/injazclub17',
            icon: <FaFacebookF className='text-blue-600'/>
        },
        {
            platform: 'Instagram',
            link: 'https://www.instagram.com/injazclub_17/',
            icon: <FaInstagram className='text-pink-500'/>
        },
        {
            platform: 'Tiktok',
            link: 'https://www.tiktok.com/@injazclub17',
            icon: <FaTiktok/>
        },
        {
            platform: 'About Us',
            link: '/about',
            icon: <FcAbout/>
        }
    ]
  return (
    <div className='m-4 w-full p-6'>
        {socialLinks.map(({platform, link, icon}) => (
        <Link 
        key={platform}
        to={link}
        className="flex items-center justify-center gap-2 p-3 my-2 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition-colors">
        {icon} <span>{platform}</span>
        </Link>
        ))}
    </div>
  )
}

export default SocialMediaLinks