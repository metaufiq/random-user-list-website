import { Props } from "./PaginationBar.component.types";

const _renderActiveButton = (index: number) => (
  <li key={index}>
    <a 
      href="#" 
      aria-current="page" 
      className="py-2 px-3 text-blue-600 bg-blue-50 border border-gray-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
      >
        {index}
    </a>
  </li>
)

const _renderInActiveButton = (index: number) => (
  <li key={index}>
    <a 
      href="#" 
      className={`py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
      >
        {index}
    </a>
  </li>
)

const _renderPreviousButton = (props: Props) => {
  return (
    <li>
    <a href="#" className="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
    </li>
  )
}

const _renderNextButton = (props: Props) => (
  <li>
    <a href="#" className="py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
  </li>
)

const PaginationBar= (props: Props) => {
  const pageIndexes = new Array(props.totalPages).fill(0);
  
  return (
    <nav aria-label="Page navigation example">
      <ul className="inline-flex -space-x-px">
        {props.currentIndex != 0 && _renderPreviousButton(props)}
        {
          pageIndexes.map((data,index)=>index === props.currentIndex - 1 ? _renderActiveButton(index+1) : _renderInActiveButton(index+1))
        }
        {props.currentIndex !== props.totalPages-1 && _renderNextButton(props)}
      </ul>
    </nav>
  )
}

export default PaginationBar;