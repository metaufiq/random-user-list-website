import { Props } from "./index.types";

export const SortIcon = (props: Props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={props.size} 
    height={props.size} 
    viewBox="0 0 24 24"
    fill={props.color}>
      <path 
        d="M12 0l8 10h-16l8-10zm8 14h-16l8 10 8-10z"/>
  </svg>
)

export const SortIconDesc = (props: Props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={props.size} 
    height={props.size}
    viewBox="0 0 24 24"
    fill={props.color}>
      <path 
        d="M12 3.202l3.839 4.798h-7.678l3.839-4.798zm0-3.202l-8 10h16l-8-10zm8 14h-16l8 10 8-10z"
      />
  </svg>
)

export const SortIconAsc = (props: Props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={props.size} 
    height={props.size}
    viewBox="0 0 24 24"
    fill={props.color}>
      <path 
        d="M12 0l-8 10h16l-8-10zm3.839 16l-3.839 4.798-3.839-4.798h7.678zm4.161-2h-16l8 10 8-10z"
      />
  </svg>
)

export const SearchIcon = (props: Props) => (
  <svg 
    width={props.size}
    height={props.size}
    xmlns="http://www.w3.org/2000/svg"
    fill-rule="evenodd"
    clip-rule="evenodd"
    fill={props.color}>
      <path 
        d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z"/>
  </svg>
)