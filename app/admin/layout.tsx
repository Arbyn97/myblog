import Link from "next/link";


export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
      <div className=" min-h-screen flex bg-zinc-50 dark:bg-black p-4 gap-4 ">

          <div className="flex-1">
            <div className="flex flex-col w-40 gap-10 border-2 border-green-300 h-full px-4 py-3 items-center ">
                 <Link className="text-xl" href="/admin">صفحه اصلی</Link>
                 <Link className="text-xl" href="/admin/manageUsers">کاربران</Link>
                 <Link className="text-xl" href="/admin/manageProducts">محصولات</Link>
                 <div className="mt-auto">
                    darkMode
                 </div>
            </div>
          </div>
            
      
           
        <div className="flex-2 h-auto">
          {children}
        </div>
       
     
    </div>
  );
}
