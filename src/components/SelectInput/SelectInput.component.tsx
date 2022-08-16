import { Fragment } from "react";
import { Props } from "./SelectInput.component.types";

const SelectInput = ({options, label, htmlFor, id, onChange, value}: Props)=>{
  return(
    <Fragment>
      {label && 
        <label 
          htmlFor={htmlFor} 
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
        >
        {label}
        </label>}
      <select 
        id={id} 
        className="bg-white border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        value={value}
        onChange={onChange}>
        {options.map(option=><option value={option.value}>{option.label}</option>)}
      </select>
    </Fragment>
  )
}

export default SelectInput;