import React, { useState } from "react";

import Button from "../../components/Button";
import PaginationBar from "../../components/PaginationBar";
import SelectInput from "../../components/SelectInput";
import { Option } from "../../components/SelectInput/SelectInput.component.types";
import TextInput from "../../components/TextInput";
import UserTable from "../../components/UserTable";
import { SortBy, SortCondition } from "../../components/UserTable/UserTable.component.types";
import { USER_QUERY_PAGES } from "../../constants";
import useUserQuery from "../../hooks/useUserQuery/useUserQuery.hooks";
import { Params as UseQueryParams, SetCurrentPage, SetGender, SetSearchInput } from "../../hooks/useUserQuery/useUserQuery.hooks.types";
import { SetSortCategory, SetSortCondition } from "./UserList.component.types";

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

const _onSort = (setSortCategory:SetSortCategory, setSortCondition: SetSortCondition) => (sortBy?: SortBy, sortCondition?: SortCondition) => {

  setSortCategory(sortBy)
  setSortCondition(sortCondition)
}

const UserList = () =>{
  const [sortCategory, setSortCategory] = useState<SortBy>();
  const [sortCondition, setSortCondition] = useState<SortCondition>();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchInput, setSearchInput] = useState('');
  const [gender, setGender] = useState('');

  const useQueryParams:UseQueryParams = {
    sortCategory, 
    sortCondition,
    gender,
    page: currentPage,
    searchInput
  }
  const {users} = useUserQuery(useQueryParams);

  return (
    <div>
      <TextInput id='search-user-input' placeholder="Search.." type={'search'} onChange={_onSearchChange(setSearchInput)}/>
      <Button label="Search"/>
      <Button label="Reset Filter" onClick={_onGenderReset(setGender)}/>
      <SelectInput options={OPTIONS_FILTER} label='Gender' onChange={_onGenderChange(setGender)} value={gender}/>
      <UserTable users={users} onSort={_onSort(setSortCategory, setSortCondition)}/>
      <PaginationBar currentIndex={currentPage} totalPages={USER_QUERY_PAGES} onChange={_onMovePage(setCurrentPage)}/>
    </div>
  );
}

export default UserList;