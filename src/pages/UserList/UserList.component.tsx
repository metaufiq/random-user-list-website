import React, { ChangeEventHandler, useEffect, useState } from "react";

import api from "../../api";
import { User as UserFromAPI } from "../../api/randomUser/randomUser.api.types";
import Button from "../../components/Button";
import PaginationBar from "../../components/PaginationBar";
import SelectInput from "../../components/SelectInput";
import { Option } from "../../components/SelectInput/SelectInput.component.types";
import TextInput from "../../components/TextInput";
import UserTable from "../../components/UserTable";
import { User } from "../../index.types";
import { SetSearchInput, SetUsers } from "./UserList.component.types";

const OPTIONS_FILTER:Option[] = [
  {label:'Female', value: 'female'},
  {label:'Male', value: 'Male'},
]

const _convertUserToUserState = (user: UserFromAPI):User => ({
  email: user.email,
  gender: user.gender,
  name: `${user.name.first} ${user.name.last}`,
  username: user.login.username,
  regisDate: user.registered.date
})

const _getListUser = async (params: any):Promise<User[]> => {
  const {results} = await api.randomUser.getListUser(params)

  const users = results.map(_convertUserToUserState)
  return users;
}

const _setUsersState = async (setUsers: SetUsers, params: any)=>{
  const users = await _getListUser(params);
  
  setUsers(users)
}

const useInnit = (setUsers: SetUsers)=>{
  useEffect(()=>{
    _setUsersState(setUsers, {})
  }, []);
}

const useSearch = (searchInput:string, setUsers: SetUsers)=>{
  useEffect(()=>{
    _setUsersState(setUsers, {keyword: searchInput})
  }, [searchInput]);
}

const _onSearchChange=(setSearchInput: SetSearchInput)=>(event: React.ChangeEvent<HTMLInputElement>)=>{
  setSearchInput(event.target.value)
}

const UserList = () =>{
  const [users, setUsers] = useState<User[]>([]);
  const [searchInput, setSearchInput] = useState('');

  useInnit(setUsers)
  useSearch(searchInput, setUsers)
  return (
    <div>
      <TextInput id='search-user-input' placeholder="Search.." type={'search'} onChange={_onSearchChange(setSearchInput)}/>
      <Button label="Search"/>
      <Button label="Reset Filter"/>
      <SelectInput options={OPTIONS_FILTER} label='Gender'/>
      <UserTable users={users}/>
      <PaginationBar currentIndex={1} totalPages={3}/>
    </div>
  );
}

export default UserList;