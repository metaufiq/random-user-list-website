import { RoundedType } from "../../test/index.types";

let timeout: NodeJS.Timeout;
export const doDebounce = (func: VoidFunction, millisecond: number)=>{
  clearTimeout(timeout)

  timeout = setTimeout(func, millisecond)
}

export const getRoundedType = (roundedType?: RoundedType)=>{
  switch (roundedType) {
    case 'left-only':
      return 'rounded-l-sm'
    
    case 'right-only':
      return 'rounded-r-sm'
    default:
      return 'rounded-sm'
  }
}