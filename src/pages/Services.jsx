import React, { useEffect, useState } from 'react'
import serviceJson from "../json/services.json"
import { Link } from 'react-router-dom';


const Services = () => {
    const [buttons, setButtons] = useState([])

    useEffect(()=>{
        if(window.location.hash){
            scrollToSection(window.location.hash.replace('#',''))
        }
    },[]);

    useEffect(()=>{
        if(serviceJson.length){
            let arr = serviceJson.map((v)=>{
                return v.id
            })
            setButtons(arr)
        }
    },[serviceJson]);

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            section.classList.add('border-red-500')
            section.classList.remove('border-transparent')

            setTimeout(()=>{            
                section.classList.remove('border-red-500')
                section.classList.add('border-transparent')
            },1000)
        }
    };

  return (
    <div className="w-full flex flex-col items-center bg-image h-[100vh] pt-[30px]">
        <div className="flex flex-col items-start gap-y-[30px] w-[80%] bg-white px-[10px] h-full">
            <div className="text-center font-bold text-3xl">All Services</div>
            {buttons.length
                ?   <div className="w-full flex gap-x-4 flex-wrap">
                        {buttons.map((v)=> <button smooth={true} duration={500} onClick={() => scrollToSection(v)} className='w-[150px] bg-transparent border-red-600 text-red-600 text-wrap text-sm capitalize'>{v.replaceAll('_',' ')}</button>)}
                    </div>
                :   <></>
            }
            {serviceJson.map((v,i)=>
                <div id={v.id} className="flex flex-col w-full gap-y-[40px] p-[10px] border-4 border-transparent" key={i}>
                {v.types.map((t,ind)=>
                    <div className="flex flex-col w-full items-start gap-y-[15px]" key={ind}>
                        <div className="instagram font-bold underline text-2xl w-full px-[20px] bg-slate-200 py-[15px] rounded-t-xl">{t.name}</div>
                        <div className="grid grid-cols-4 gap-x-[15px]">
                        {t.obj.map((s,ind)=>
                            <div className="flex flex-col gap-y-[10px] w-[150px] items-start border border-[#0a1743] p-[5px] rounded-lg" key={s.key}>
                                <div className="w-full bg-slate-50 h-[100px] flex justify-center items-center">
                                    <img src={s.svg} className='object-cover' />
                                </div>
                                <Link className="bg-green-700 px-[10px] py-[5px] rounded text-white text-sm" target='_blank'>See Tutorial</Link>
                                <Link className="bg-[#0a1743] px-[10px] py-[5px] rounded text-white text-sm" target="_blank">Go for Download</Link>
                            </div>
                        )}
                        </div>
                    </div>
                )}
                </div>
            )}
        </div>
    </div>
  )
}

export default Services