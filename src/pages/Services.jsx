import React from 'react'
import { Link } from 'react-router-dom'
import serviceJson from "../json/services.json"

const Services = () => {
  return (
    <div className="w-full flex flex-col items-center bg-white">
        <div className="text-center font-bold text-3xl">All Services</div>
        {serviceJson.map((v,i)=>
            <div id={v.id} className="flex flex-col gap-y-[15px]" key={i}>
            {v.types.map((t,ind)=>
                <div className="flex flex-col w-full items-start gap-y-[15px]" key={ind}>
                    <div className="instagram font-bold underline text-2xl w-full px-[20px] bg-slate-200 py-[15px] rounded-t-xl">{t.name}</div>
                    <div className="grid grid-cols-4 gap-x-[15px]">
                    {t.obj.map((s,ind)=>
                        <div className="flex flex-col gap-y-[10px] w-[300px] items-start border border-[#0a1743] p-[5px] rounded-lg" key={s.key}>
                            <div className="w-full bg-slate-50">
                                <img src={s.svg} className='w-[80%] h-[200px]' />
                            </div>
                            <Link className="bg-green-700 px-[10px] py-[5px] rounded text-white" target='_blank'>See Tutorial</Link>
                            <Link className="bg-[#0a1743] px-[10px] py-[5px] rounded text-white" target="_blank">Go for Download</Link>
                        </div>
                    )}
                    </div>
                </div>
            )}
            </div>
        )}
    </div>
  )
}

export default Services