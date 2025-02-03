import React, { useState } from 'react'
import loginBg from "../assets/login-background.jpg"

const AdminLogin = () => {

    const [input, setInput] = useState({});

    const inputChange = ({name,value}) => {
        let obj = {...input}
        obj[name] = value
        setInput(obj)
    };

  return (
    <div className="h-[100vh] w-full relative flex justify-center items-center overflow-y-hidden">
        <img src={loginBg} className='w-full h-full' />
        <div className="absolute w-full h-full flex top-0 left-0 justify-center items-center">
            <div className="w-[300px] flex flex-col items-center p-[10px] rounded gap-y-[10px] login-bg">
                <div className="flex flex-col items-start w-full">
                    <div className="text-xl font-bold">Email</div>
                    <input type="email" placeholder="Email" value={input.email} onChange={()=>inputChange(e.target)} className='w-full h-[50px] px-[5px] rounded' name="email" />
                </div>
                <div className="flex flex-col items-start w-full">
                    <div className="text-xl font-bold">Password</div>
                    <input type="password" placeholder="Password" value={input.password} onChange={()=>inputChange(e.target)} className='w-full h-[50px] px-[5px] rounded' name="password" />
                </div>
                <div className="flex w-full justify-center">
                    <button className="bg-green-700 text-white rounded">Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AdminLogin