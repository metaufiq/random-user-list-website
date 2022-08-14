import { useEffect, useState } from "react";
import api from "../../api";
import { User } from "../../index.types";
import { Params, User as UserFromAPI } from "../../api/randomUser/randomUser.api.types";
import { SetUsers } from "./useUserQuery.hooks.types";
import { TOTAL_PAGES } from "../../constants";

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

const useQuery = (searchInput: string, gender: string, page: number, setUsers: SetUsers)=>{
  useEffect(()=>{
    const params = {
      keyword: searchInput || undefined,
      gender: gender || undefined,
      page,
      pageSize: TOTAL_PAGES
    }
    _setUsersState(setUsers, params)
  }, [searchInput, gender, page, setUsers]);
}

const useUserQuery = () =>{
  const [users, setUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchInput, setSearchInput] = useState('');
  const [gender, setGender] = useState('');


  useQuery(searchInput, gender, currentPage, setUsers)

  return {
    users,
    gender,
    currentPage,
    setGender,
    setSearchInput,
    setCurrentPage
  }
}

export default useUserQuery