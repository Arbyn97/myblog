import Products from "../../lib/data.json"
function AllProducts() {
    return ( 
        <>
        <table className="gap-3">
           <thead className="border-2 border-pink-400  gap-3">
            <tr>
                <th className="p-3">
                    نام کالا
                </th>
                <th className="p-3">
                    قیمت کالا
                </th>
                <th className="p-3">
                    تعداد موجود در انبار
                </th>
            </tr>
           </thead>
           <tbody className="border-2 border-blue-200 ">
            {Products.map(good=>{return(
                <tr key={good.id}>
                    <td className="p-3">{good.name}</td>
                    <td className="p-3">{good.price}</td>
                    <td className="p-3 bg-amber-300 ">{good.count}</td>
                </tr>
            )
                
            })}
           </tbody>
        </table>
        </>
     );
}

export default AllProducts;