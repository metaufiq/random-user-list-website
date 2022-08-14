import React, { useEffect, useState } from "react";

import api from "../../api";
import { User as UserFromAPI } from "../../api/randomUser/randomUser.api.types";
import Button from "../../components/Button";
import PaginationBar from "../../components/PaginationBar";
import SelectInput from "../../components/SelectInput";
import { Option } from "../../components/SelectInput/SelectInput.component.types";
import TextInput from "../../components/TextInput";
import UserTable from "../../components/UserTable";
import { User } from "../../index.types";
import { SetUsers } from "./UserList.component.types";

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

const _getListUser = async ():Promise<User[]> => {
  const {results} = await api.randomUser.getListUser({})

  const users = results.map(_convertUserToUserState)
  return users;
}

const _asyncInnit = async (setUsers: SetUsers)=>{
  const users = await _getListUser();
  
  setUsers(users)
}

const useInnit = (setUsers: SetUsers)=>{
  useEffect(()=>{
    _asyncInnit(setUsers)
  }, []);
}

const UserList = () =>{
  const [users, setUsers] = useState<User[]>([]);

  useInnit(setUsers)
  return (
    <div>
      <TextInput id='search-user-input' placeholder="Search.." type={'search'}/>
      <Button label="Search"/>
      <Button label="Reset Filter"/>
      <SelectInput options={OPTIONS_FILTER}/>
      <UserTable users={users}/>
      <PaginationBar currentIndex={1} totalPages={3}/>
    </div>
  );
}

export default UserList;