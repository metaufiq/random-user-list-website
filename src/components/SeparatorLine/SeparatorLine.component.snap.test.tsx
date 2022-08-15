import { assertSnapshots } from "../../../test";
import SeparatorLine from ".";

describe('SeparatorLineSnapshot', () => {

  const configs = [
    {
      desc: 'should render normal SeparatorLine'
    }
  ];

  assertSnapshots(SeparatorLine, configs);
});
