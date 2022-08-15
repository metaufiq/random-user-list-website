import { assertSnapshots } from "../../../test";
import TextInputWithButton from ".";
import { Props } from "./TextInputWithButton.component.types";

describe('TextInputWithButton Snapshot', () => {
  const mockProps:Props = {
    onChange:()=>{},
    label: 'label',
    buttonLabel: 'button label',
    onPress: ()=>{},
    placeholder: 'placeholder',
    type: 'password'
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
      desc: 'should render normal TextInputWithButton'
    },
    {
      props: mockPropsWithOptionalProps,
      desc: 'should render normal TextInputWithButton with optional props'
    }
  ];

  assertSnapshots(TextInputWithButton, configs);
});
