import { assertSnapshots } from "../test";
import App from "./App";

describe('AppSnapshot', () => {

  const configs = [
    {
      desc: 'should render normal App'
    }
  ];

  assertSnapshots(App, configs);
});
