import { useEffect, useState } from "react";
import api from "../../api";
import { User } from "../../index.types";
import { User as UserFromAPI, Params as APIParams } from "../../api/randomUser/randomUser.api.types";
import { USER_QUERY_PAGES, USER_QUERY_RESULTS } from "../../constants";
import { Params, SetUsers } from "./useUserQuery.hooks.types";

const _convertUserToUserState = (user: UserFromAPI):User => ({
  email: user.email,
  gender: user.gender,
  name: `${user.name.first} ${user.name.last}`,
  username: user.login.username,
  regisDate: user.registered.date
})

const _getListUser = async (params: APIParams):Promise<User[]> => {
  const {results} = await api.randomUser.getListUser(params)

  const users = results.map(_convertUserToUserState)
  return users;
}

const _setUsersState = async (setUsers: SetUsers, params: APIParams)=>{
  const users = await _getListUser(params);
  
  setUsers(users)
}

const useQuery = ({gender, page, searchInput, sortCategory, sortCondition}: Params, setUsers: SetUsers)=>{
  useEffect(()=>{
    const params = {
      keyword: searchInput || undefined,
      gender: gender || undefined,
      page,
      pageSize: USER_QUERY_PAGES,
      results: USER_QUERY_RESULTS,
      sortBy: sortCategory,
      sortOrder: sortCondition?.toLowerCase()
    }
    _setUsersState(setUsers, params)
  }, [searchInput, gender, page, sortCategory, sortCondition, setUsers]);
}

const useUserQuery = (params: Params) =>{
  const [users, setUsers] = useState<User[]>([]);


  useQuery(params, setUsers)

  return { users }
}

export default useUserQuery