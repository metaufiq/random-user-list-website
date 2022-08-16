let timeout: NodeJS.Timeout;
export const doDebounce = (func: VoidFunction, millisecond: number)=>{
  clearTimeout(timeout)

  timeout = setTimeout(func, millisecond)
}