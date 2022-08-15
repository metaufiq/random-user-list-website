import { useReducer } from "react";

import { SortIcon, SortIconAsc, SortIconDesc } from "../Icons";
import reducer, { initialState } from "./UserTable.component.reducer";
import { DataWithLabel, Props, ReducerDispatcher, ReducerState, SortBy, SortCondition } from "./UserTable.component.types";

const DATA_WITH_LABEL: DataWithLabel = {
  username: 'Username',
  name: 'Name',
  email: 'Email',
  gender: 'Gender',
  regisDate: 'Registered Date'
}

const DATA_WITH_LABEL_OBJECT = Object.keys(DATA_WITH_LABEL).map(key=>key)

const _getIconByReducerState = ({using, condition}: ReducerState, key: string)=>{
  if (using !== key) return SortIcon
  switch (condition) {
    case 'ASCEND':
      return SortIconAsc
    
    case 'DESCEND':
      return SortIconDesc
    default:
      return SortIcon
  }
}

const _renderIcon = (reducerState: ReducerState, key: SortBy)=>{
  const Icon = _getIconByReducerState(reducerState, key)

  return (<Icon size={12}/>)
}

const _getNextSortConditionByReducerState = ({using, condition}: ReducerState, key: string):SortCondition=>{
  if (using !== key) return 'ASCEND'
  switch (condition) {
    case 'ASCEND':
      return "DESCEND"
    
    case 'DESCEND':
      return undefined
    default:
      return undefined
  }
}

const _getNextSortUsingReducerState = ({using, condition}: ReducerState, key: SortBy):SortBy|undefined=>{
  if (condition === 'DESCEND') return undefined

  return key
}

const _onClickHeader = (reducerState: ReducerState, key: SortBy, dispatch: ReducerDispatcher)=>()=>{
  dispatch({payload:_getNextSortUsingReducerState(reducerState, key), type:_getNextSortConditionByReducerState(reducerState, key)})
}

const _renderHeader = (reducerState: ReducerState, dispatch: ReducerDispatcher)=>((key:SortBy)=>(
  <th scope="col" className="py-3 px-6" key={key}>
    <div onClick={_onClickHeader(reducerState, key, dispatch)}>{DATA_WITH_LABEL[key]} {_renderIcon(reducerState, key)}</div>
  </th>
))

const UserTable = ({users}: Props)=>{
  const [state, dispatch] = useReducer(reducer, initialState)
  
  return(
  <div className="overflow-x-auto relative">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                {DATA_WITH_LABEL_OBJECT.map((value: string)=>_renderHeader(state, dispatch)(value as SortBy))}
              </tr>
          </thead>
          <tbody>
              {users.map(user=>(
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={user.email}>
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