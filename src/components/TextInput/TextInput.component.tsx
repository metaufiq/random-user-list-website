import { NextComponentType, NextPageContext } from "next";

import { Props } from "./TextInput.component.types";

const TextInput:NextComponentType<NextPageContext, {}, Props> = (props)=>{
  return(
    <input 
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
      id={props.id}
      type={props.type}
      placeholder={props.placeholder}
    />
  )
}

export default TextInput;