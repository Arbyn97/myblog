import Link from "next/link";

export default function Login() {
  return (
    <>          
    {/* min-h-[70vh] */}
    <div className="min-h-[70vh] flex  mt-10 justify-center items-center bg-gray-100 p-4" >
    <div className="flex flex-col gap-5 m-2 p-25 justify-center items-center border-2 border-green-300">
    <div className="flex  gap-3 items-center ">
         <label className="w-15 text-center text-gray-700 font-semibold">نام کاربری</label>
        <input type="text" className="border-2 border-blue-300 px-3 py-2 rounded-md bg-white text-black"/>    
    </div>  
    <div className="flex items-center gap-3 ">
        <label className="w-15 text-center text-gray-700 font-semibold">پسورد</label>
        <input type="text" className="border-2 border-blue-300 px-3 py-2 rounded-md bg-white text-black"/>
        
    </div>
    
    <div className="flex gap-3 justify-end items-center w-40 my-3 ">
      <button className="font-bold rounded-xl p-3
       text-blue-500 bg-gray-200 
       hover:cursor-pointer hover:bg-blue-50
        hover:text-blue-500 hover:border-blue-500 
        hover:border">
          ورود</button>
           <Link href="/signIn">
       <button className="font-bold rounded-xl p-3 bg-blue-500
        text-gray-200 hover:cursor-pointer
         hover:bg-blue-50 hover:text-blue-500
          hover:border-blue-500 hover:border">
           ثبت نام
            
            </button>
           </Link>
    </div>
    <div className="flex justify-end w-full text-red-500 hover:cursor-pointer">
    <p >رمز ورود را فراموش کرده ام</p>
    </div>
    
    </div> 
    
    </div>
    
    </>
  )
}