import React from "react";

import Button from "../../components/Button";
import PaginationBar from "../../components/PaginationBar";
import SelectInput from "../../components/SelectInput";
import { Option } from "../../components/SelectInput/SelectInput.component.types";
import TextInput from "../../components/TextInput";
import UserTable from "../../components/UserTable";
import useUserQuery from "../../hooks/useUserQuery/useUserQuery.hooks";
import { SetSearchInput } from "../../hooks/useUserQuery/useUserQuery.hooks.types";

const OPTIONS_FILTER:Option[] = [
  {label:'All', value: undefined},
  {label:'Female', value: 'female'},
  {label:'Male', value: 'male'},
]

const _onSearchChange=(setSearchInput: SetSearchInput)=>(event: React.ChangeEvent<HTMLInputElement>)=>{
  setSearchInput(event.target.value)
}

const _onGenderChange = (event: React.ChangeEvent<HTMLSelectElement>)=>{

}

const UserList = () =>{
  const {users, setSearchInput} = useUserQuery();

  return (
    <div>
      <TextInput id='search-user-input' placeholder="Search.." type={'search'} onChange={_onSearchChange(setSearchInput)}/>
      <Button label="Search"/>
      <Button label="Reset Filter"/>
      <SelectInput options={OPTIONS_FILTER} label='Gender' onChange={_onGenderChange}/>
      <UserTable users={users}/>
      <PaginationBar currentIndex={1} totalPages={3}/>
    </div>
  );
}

export default UserList;