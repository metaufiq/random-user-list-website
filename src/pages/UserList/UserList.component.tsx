import React from "react";

import Button from "../../components/Button";
import PaginationBar from "../../components/PaginationBar";
import SelectInput from "../../components/SelectInput";
import { Option } from "../../components/SelectInput/SelectInput.component.types";
import TextInput from "../../components/TextInput";
import UserTable from "../../components/UserTable";
import useUserQuery from "../../hooks/useUserQuery/useUserQuery.hooks";
import { SetGender, SetSearchInput } from "../../hooks/useUserQuery/useUserQuery.hooks.types";

const OPTIONS_FILTER:Option[] = [
  {label:'All', value: ''},
  {label:'Female', value: 'female'},
  {label:'Male', value: 'male'},
]

const _onSearchChange=(setSearchInput: SetSearchInput)=>(event: React.ChangeEvent<HTMLInputElement>)=>{
  setSearchInput(event.target.value)
}

const _onGenderChange = (setGender: SetGender)=>(event: React.ChangeEvent<HTMLSelectElement>)=>{
  setGender(event.target.value)
}

const _onGenderReset = (setGender: SetGender)=>()=>{
  setGender('')
}

const UserList = () =>{
  const {users, setSearchInput, setGender, gender} = useUserQuery();

  return (
    <div>
      <TextInput id='search-user-input' placeholder="Search.." type={'search'} onChange={_onSearchChange(setSearchInput)}/>
      <Button label="Search"/>
      <Button label="Reset Filter" onClick={_onGenderReset(setGender)}/>
      <SelectInput options={OPTIONS_FILTER} label='Gender' onChange={_onGenderChange(setGender)} value={gender}/>
      <UserTable users={users}/>
      <PaginationBar currentIndex={1} totalPages={3}/>
    </div>
  );
}

export default UserList;