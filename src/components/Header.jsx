import React from 'react'
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom'

const Header = () => {
    const navlinks = [
        {
            key:1,
            label: 'Its ME!',
            link:'/'
        },
        {
            key:2,
            label: 'All Services',
            link:'/'
        },
        {
            key:3,
            label: 'Any query?',
            link:'/'
        },
    ]
  return (
    <div className="flex justify-between w-full h-[100px] shadow-[0px_-1px_5px_2px_#ccc] bg-white px-[20px]">
        <img src={logo} className='w-[200px] object-cover '/>
        <div className="flex items-center gap-x-[5px]">
            {navlinks.map((v,i)=>
                <Link className="p-[5px] font-bold text-color text-xl italic" key={i}>{v.label}</Link>
            )}
        </div>
    </div>
  )
}

export default Header