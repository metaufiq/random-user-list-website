import { SortIcon, SortIconAsc, SortIconDesc } from "../Icons";
import { Props } from "./UserTable.component.types";

const UserTable = ({users}: Props)=>{
  return(
  <div className="overflow-x-auto relative">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                  <th scope="col" className="py-3 px-6">
                      Username <SortIcon size={12}/>
                  </th>
                  <th scope="col" className="py-3 px-6">
                      Name  <SortIconDesc size={13}/>
                  </th>
                  <th scope="col" className="py-3 px-6">
                      Email <SortIconAsc size={13}/>
                  </th>
                  <th scope="col" className="py-3 px-6">
                      Gender <SortIcon size={12}/>
                  </th>
                  <th scope="col" className="py-3 px-6">
                      Registered Date <SortIcon size={12}/>
                  </th>
              </tr>
          </thead>
          <tbody>
              {users.map(user=>(
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {user.username}
                  </th>
                  <td className="py-4 px-6">
                      {user.name}
                  </td>
                  <td className="py-4 px-6">
                      {user.email}
                  </td>
                  <td className="py-4 px-6">
                      {user.gender}
                  </td>
                  <td className="py-4 px-6">
                      {user.regisDate}
                  </td>
                </tr>

              ))}

          </tbody>
      </table>
  </div>
  )
}

export default UserTable;