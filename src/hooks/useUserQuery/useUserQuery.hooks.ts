import { useEffect, useState } from "react";
import api from "../../api";
import { User } from "../../index.types";
import { Params, User as UserFromAPI } from "../../api/randomUser/randomUser.api.types";
import { SetParams, SetUsers } from "./useUserQuery.hooks.types";

const _convertUserToUserState = (user: UserFromAPI):User => ({
  email: user.email,
  gender: user.gender,
  name: `${user.name.first} ${user.name.last}`,
  username: user.login.username,
  regisDate: user.registered.date
})

const _getListUser = async (params: Params):Promise<User[]> => {
  const {results} = await api.randomUser.getListUser(params)

  const users = results.map(_convertUserToUserState)
  return users;
}

const _setUsersState = async (setUsers: SetUsers, params: Params)=>{
  const users = await _getListUser(params);
  
  setUsers(users)
}

const useQuery = (params: Params, setUsers: SetUsers)=>{
  useEffect(()=>{
    _setUsersState(setUsers, params)
  }, [params, setUsers]);
}

/**
 * useDynamicParams
 * @param {string} searchInput - search input
 * @param {SetParams} setParams - setter for params query
 * @returns {void} set params query
 */
const useDynamicParams = (searchInput:string, setParams: SetParams, gender:string): void=>{
  useEffect(()=>{
    setParams((params)=>({...params,keyword: searchInput || undefined, gender: gender || undefined}))
  }, [searchInput, gender, setParams]);
}

const useUserQuery = () =>{
  const [users, setUsers] = useState<User[]>([]);
  const [searchInput, setSearchInput] = useState('');
  const [gender, setGender] = useState('');
  const [params, setParams] = useState({})

  useQuery(params, setUsers)
  useDynamicParams(searchInput, setParams, gender)

  return {
    users,
    setGender,
    setSearchInput
  }
}

export default useUserQuery