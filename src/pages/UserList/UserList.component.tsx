import React from "react";
import Button from "../../components/Button";
import PaginationBar from "../../components/PaginationBar";
import TextInput from "../../components/TextInput";
import UserTable from "../../components/UserTable";

const UserList = () =>{
  return (
    <div>
      <TextInput id='search-user-input' placeholder="Search.." type={'search'}></TextInput>
      <Button label="Search"/>
      <Button label="Reset Filter"/>
      <UserTable data={[]}/>
      <PaginationBar currentIndex={1} totalPages={3}/>
    </div>
  );
}

export default UserList;