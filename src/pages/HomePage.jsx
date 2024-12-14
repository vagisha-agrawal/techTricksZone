import React from 'react';
import header from '../assets/header.jpeg';
import instagram from "../assets/instagram.png";
import videoConverter from "../assets/videoConverter.png"
import aiImage from "../assets/aiImage.png"
import removeBg from "../assets/removeBG.png"

const HomePage = () => {
  return (
    <div className="flex flex-col w-full gap-y-[30px] bg-white py-[10px]">
        <div className="flex justify-around w-full items-center">
            <div className="w-[320px] text-color text-2xl font-semibold">Hi, I'm Vagisha Agrawal, I am working as a website developer. And i am a tech person so i am making this website to help you with tutorial of where to download videos from social media. Get in touch at agrawalnidhi101@gmail.com if any query.</div>
            <img src={header} className='w-[300px] h-[400px] object-cover'/>
        </div>
        <div className="w-full flex justify-center"><div className="w-[60%] h-[1px] rounded-lg bg-slate-200"></div></div>
        <div className="flex flex-col w-full items-center gap-y-[15px]">
            <div className="text-4xl font-bold underline underline-offset-4">Services</div>
            <div className="w-[80%] flex justify-end">
                <button className="bg-[#0a1743] text-whiter px-[15px] py-[7px] text-white rounded">More {'>>'}</button>
            </div>
            <div className="w-full flex justify-center gap-[30px]">
                <div className="flex flex-col w-[300px] border border-[#0a1743] gap-y-[15px] pb-[10px]">
                    <img src={instagram} className='w-full' />
                    <div className="h-[60px] font-semibold text-xl text-center px-[5px]">Social Media video and audio download service</div>
                    <div className="flex w-full justify-center"><button className='w-auto bg-[#0a1743] text-white px-[10px] py-[5px] rounded'>View</button></div>
                </div>
                <div className="flex flex-col w-[300px] border border-[#0a1743] gap-y-[15px] pb-[10px]">
                    <img src={videoConverter} className='w-full' />
                    <div className="h-[60px] font-semibold text-xl text-center px-[5px]">Convert Local Video to Audio Online</div>
                    <div className="flex w-full justify-center"><button className='w-auto bg-[#0a1743] text-white px-[10px] py-[5px] rounded'>View</button></div>
                </div>
                <div className="flex flex-col w-[300px] border border-[#0a1743] gap-y-[15px] pb-[10px]">
                    <img src={aiImage} className='w-full' />
                    <div className="h-[60px] font-semibold text-xl text-center px-[5px]">Generate Image from AI</div>
                    <div className="flex w-full justify-center"><button className='w-auto bg-[#0a1743] text-white px-[10px] py-[5px] rounded'>View</button></div>
                </div>
                <div className="flex flex-col w-[300px] border border-[#0a1743] gap-y-[15px] pb-[10px]">
                    <img src={removeBg} className='w-full' />
                    <div className="h-[60px] font-semibold text-xl text-center px-[5px]">Remove background from image for free</div>
                    <div className="flex w-full justify-center"><button className='w-auto bg-[#0a1743] text-white px-[10px] py-[5px] rounded'>View</button></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomePage