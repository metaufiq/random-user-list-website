import { Props } from "./TextInput.component.types";

const TextInput = (props: Props)=>{
  return(
    <input 
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
      id={props.id}
      type={props.type}
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  )
}

export default TextInput;