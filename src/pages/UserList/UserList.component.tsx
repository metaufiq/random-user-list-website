import React from "react";

import Button from "../../components/Button";
import PaginationBar from "../../components/PaginationBar";
import SelectInput from "../../components/SelectInput";
import { Option } from "../../components/SelectInput/SelectInput.component.types";
import TextInput from "../../components/TextInput";
import UserTable from "../../components/UserTable";
import { TOTAL_PAGES } from "../../constants";
import useUserQuery from "../../hooks/useUserQuery/useUserQuery.hooks";
import { SetCurrentPage, SetGender, SetSearchInput } from "../../hooks/useUserQuery/useUserQuery.hooks.types";

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

const _onMovePage = (setCurrentPage: SetCurrentPage)=>(index: number)=>()=>{
  setCurrentPage(index)
}

const UserList = () =>{
  const {users, gender, currentPage, setSearchInput, setGender, setCurrentPage} = useUserQuery();

  return (
    <div>
      <TextInput id='search-user-input' placeholder="Search.." type={'search'} onChange={_onSearchChange(setSearchInput)}/>
      <Button label="Search"/>
      <Button label="Reset Filter" onClick={_onGenderReset(setGender)}/>
      <SelectInput options={OPTIONS_FILTER} label='Gender' onChange={_onGenderChange(setGender)} value={gender}/>
      <UserTable users={users}/>
      <PaginationBar currentIndex={currentPage} totalPages={TOTAL_PAGES} onChange={_onMovePage(setCurrentPage)}/>
    </div>
  );
}

export default UserList;