import { Props } from "./Button.component.types";

const Button = (props: Props)=>{
  return(
    <button 
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
      type="button"
      onClick={props.onClick}>
      {props.label}
    </button>
  )
}

export default Button;