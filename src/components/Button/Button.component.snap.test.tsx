import { assertSnapshots } from "../../../test";
import Button from ".";
import { Props } from "./Button.component.types";

describe('ButtonSnapshot', () => {
  const mockProps:Props = {
    children: 'children'
  };

  const configs = [
    {
      props: {...mockProps, onClick: ()=>{}},
      desc: 'should render normal Button'
    },
    {
      props: mockProps,
      desc: 'should render Button without onClick'
    }
  ];

  assertSnapshots(Button, configs);
});
