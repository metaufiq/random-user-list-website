import { assertSnapshots } from "../../../test";
import SelectInput from ".";
import { Props } from "./SelectInputWithButton.component.types";

describe('SelectInputWithButton Snapshot', () => {
  const mockProps:Props = {
    onChange:()=>{},
    label: 'label',
    resetButtonLabel: 'reset button label',
    options: [{
      label: 'label',
      value: 'value'
    }],
    onReset: ()=>{}
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
      desc: 'should render normal SelectInputWithButton'
    },
    {
      props: mockPropsWithOptionalProps,
      desc: 'should render normal SelectInputWithButton with optional props'
    }
  ];

  assertSnapshots(SelectInput, configs);
});
