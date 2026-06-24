import usersInfo from '../../lib/users.json'
function AllUsers() {
    return ( 
        <>
        <table>
            <thead className="border-2 rounded-lg border-green-400 p-3">
                <tr>
                    <th className='p-3'>UserName</th>
                <th className='p-3'>Password</th>
                <th className='p-3'>shopList</th>
                <th className='p-3'>Status</th>
                </tr>
            </thead>
          <tbody>

            {usersInfo.map(user=>{
                return(<tr key={user.id} className='border-2 border-green-700 '>
                    <td className='p-2'> {user.name}</td>
                    <td className='p-2'>{user.password}</td>
                    <td className='p-3'>{user.shoplist}</td>
                    <td className='p-2'>{user.status}</td>
                    </tr>)
            })}
            </tbody>
        </table>
        </>
     );
}

export default AllUsers;