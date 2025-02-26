import React, { useEffect, useState } from 'react';
import header from '../assets/header.jpeg';
import instagram from "../assets/instagram.png";
import videoConverter from "../assets/videoConverter.png"
import aiImage from "../assets/aiImage.png"
import removeBg from "../assets/removeBG.png"
import { Link } from 'react-router-dom';
import { getCollections } from '../services/collections';

const HomePage = () => {
    const [data, setData] = useState([]);

    useEffect(()=>{
        getCollections()
        .then((res) => {
            console.log(res);
            if (res.status === 200 && res.data) {
                setData(res.data.data);
            }
        })
        .catch((err) => {
            console.log(err);
        });
    },[])
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
                <Link className="bg-[#0a1743] text-whiter px-[15px] py-[7px] text-white rounded" to="/allServices">More {'>>'}</Link>
            </div>
            <div className="w-[80%] flex justify-center gap-[30px] flex-wrap">
                {data.length ? data.map((v,i)=>
                    <div className="flex flex-col w-[300px] border border-[#0a1743] gap-y-[15px] pb-[10px]" key={i}>
                        <img src={v.collectionPhoto} className='w-full h-[150px] object-cover' />
                        <div className="font-semibold text-xl text-center px-[5px]">{v.collectionName}</div>
                        <div className="flex w-full justify-center"><Link className='w-auto bg-[#0a1743] text-white px-[10px] py-[5px] rounded' to={`/allServices/${v.collectionName.toLowerCase()}`}>View</Link></div>
                    </div>
                ) : <></>}
                                 
            </div>
        </div>
    </div>
  )
}

export default HomePage