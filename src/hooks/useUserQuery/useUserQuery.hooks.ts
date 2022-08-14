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
  }, [params]);
}

const useSearch = (searchInput:string, setParams: SetParams)=>{
  useEffect(()=>{
    setParams((params)=>({...params,keyword: searchInput || undefined}))
  }, [searchInput]);
}

const useUserQuery = () =>{
  const [users, setUsers] = useState<User[]>([]);
  const [searchInput, setSearchInput] = useState('');
  const [params, setParams] = useState({})

  useQuery(params, setUsers)
  useSearch(searchInput, setParams)

  return {
    users,
    setSearchInput
  }
}

export default useUserQuery