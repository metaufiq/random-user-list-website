import { assertSnapshots } from "../test";
import App from "./App";

jest
  .mock('./pages/UserList', () => 'UserList')

describe('AppSnapshot', () => {

  const configs = [
    {
      desc: 'should render normal App'
    }
  ];

  assertSnapshots(App, configs);
});
