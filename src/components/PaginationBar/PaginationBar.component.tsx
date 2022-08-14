import { Props } from "./PaginationBar.component.types";

const _renderActiveButton = (props:Props, index: number) => (
  <li key={index}>
    <button 
      onClick={props.onChange(index)} 
      aria-current="page" 
      className="py-2 px-3 text-blue-600 bg-blue-50 border border-gray-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
      >
        {index}
    </button>
  </li>
)

const _renderInActiveButton = (props:Props, index: number) => (
  <li key={index}>
    <button 
      onClick={props.onChange(index)} 
      className={`py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
      >
        {index}
    </button>
  </li>
)

const _renderPreviousButton = (props: Props) => {
  return (
    <li>
      <button 
        onClick={props.onChange(props.currentIndex-1)} 
        className="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        Previous
      </button>
    </li>
  )
}

const _renderNextButton = (props: Props) => (
  <li>
    <button 
      onClick={props.onChange(props.currentIndex+1)} 
      className="py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
    >
      Next
    </button>
  </li>
)

const PaginationBar= (props: Props) => {
  const pageIndexes = new Array(props.totalPages).fill(0);
  
  return (
    <nav aria-label="Page navigation example">
      <ul className="inline-flex -space-x-px">
        {props.currentIndex !== 0 && _renderPreviousButton(props)}
        {
          pageIndexes.map((data,index)=>index === props.currentIndex - 1 ? _renderActiveButton(props, index+1) : _renderInActiveButton(props, index+1))
        }
        {props.currentIndex !== props.totalPages-1 && _renderNextButton(props)}
      </ul>
    </nav>
  )
}

export default PaginationBar;