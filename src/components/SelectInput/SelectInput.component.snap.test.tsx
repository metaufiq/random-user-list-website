import { assertSnapshots } from "../../../test";
import SelectInput from ".";
import { Props } from "./SelectInput.component.types";

describe('TextInputSnapshot', () => {
  const mockProps:Props = {
    onChange:()=>{},
    label: 'label',
    options: [{
      label: 'label',
      value: 'value'
    }]
  };

  const mockPropsWithOptionalProps: Props = {
    ...mockProps,
    htmlFor: 'htmlFor',
    id: 'id',
    value: 'value'
  }

  const configs = [
    {
      props: mockProps,
      desc: 'should render normal SelectInput'
    },
    {
      props: mockPropsWithOptionalProps,
      desc: 'should render normal SelectInput with optional props'
    }
  ];

  assertSnapshots(SelectInput, configs);
});
