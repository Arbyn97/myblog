'use client'
import {useEffect,useState} from 'react';
function SortByName() {
  const [users,setUsers]=useState([{id:1,name:"sara"}])
  const [search,setSearch]=useState("")
    return (
        <>
     <div>
         <input onChange={(e)=>setSearch( e.target.value)}
            className='border-2 border-amber-700'/>

         <button className='border-red-300 border-2 bg-red-400'
            onClick={()=>setUsers([...users,{name:search,id:Date.now()}])}>
               Add and Sort
        </button>

         <div>
          <table>
             {[...users].sort((a,b)=>a.name.localeCompare(b.name)).map(user=>{
               return(
              <tr>
                <td >
                    {user.id}
                </td>
               <td >
                  {user.name}
               </td>
            </tr>

                     )
             })}
             </table>
         </div>
       <div>

      </div>
   </div>
        </>
      );
}

export default SortByName;
