'use client'
import { useState } from "react"
import { signIn } from "next-auth/react"
export default function register(){
  const [info,setInfo]=useState("")
  const [username,setusername]=useState("")


  const hndleSubmit=async(e:React.FormEvent)=>{
      e.preventDefault();
      await signIn("credentials", {
      identifier: info,
      user:username,
      redirect: true,
      callbackUrl: "/",
    });
     
      setInfo('')
      setusername('')
  }
    return(
      
        <>
       <div>
        <form onSubmit={(e)=>hndleSubmit(e)} className="flex flex-col gap-5 m-2 p-25 justify-center items-center border-2 border-green-300">
          <div className="flex items-center gap-3"> 
            <label  className="w-25 text-center text-gray-700 font-semibold">نام کاربری</label> 
           <input onChange={(e)=>setusername(e.target.value)} className="border-2 border-blue-300 px-3 py-2 rounded-md bg-white text-black"type="text"/>
           </div>
           <div className="flex items-center gap-3">
            <label  className="w-25 text-center text-gray-700 font-semibold"> ایمیل یا موبایل </label>
            <input onChange={(e)=>setInfo(e.target.value)}  className="border-2 border-blue-300 px-3 py-2 rounded-md bg-white text-black" type="text"/>
            </div>
            {/* <div className="flex items-center gap-3">
            <label  className="w-25 text-center text-gray-700 font-semibold">تلفن همراه</label>
            <input className="border-2 border-blue-300 px-3 py-2 rounded-md bg-white text-black" type="text"/>
            </div> */}
           <div className="flex gap-3 justify-end items-center w-34 my-3">
             <button className="font-bold rounded-xl p-3 bg-blue-500 
        text-gray-200 hover:cursor-pointer
         hover:bg-blue-50 hover:text-blue-500
          hover:border-blue-500 hover:border" type="submit" >تمام</button>
           </div>
        </form>
       </div>
        </>
    )
}