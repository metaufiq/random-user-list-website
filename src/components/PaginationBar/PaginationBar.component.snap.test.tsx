import { assertSnapshots } from "../../../test";
import PaginationBar from ".";
import { Props } from "./PaginationBar.component.types";

describe('PaginationBarSnapshot', () => {
  const mockProps:Props = {
    currentIndex: 1,
    onChange: (index)=>()=>{},
    totalPages: 10
  };

  const configs = [
    {
      props: mockProps,
      desc: 'should render normal PaginationBar'
    }
  ];

  assertSnapshots(PaginationBar, configs);
});
