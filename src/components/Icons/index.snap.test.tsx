import { SearchIcon, SortIcon, SortIconAsc, SortIconDesc } from ".";
import { assertSnapshots } from "../../../test";
import { Props } from "./index.types";

describe('SortIconSnapshot', () => {
  const sizeOnlyProps:Props = {
    size: 2
  };

  const props:Props = {
    size: 2,
    color: 'red'
  }

  const configs = [
    {
      props,
      desc: 'should render normal icon'
    },
    {
      props: sizeOnlyProps,
      desc: 'should render icon with custom color'
    },

  ];

  assertSnapshots(SortIcon, configs);
});

describe('SortIconAscSnapshot', () => {
  const sizeOnlyProps:Props = {
    size: 2
  };

  const props:Props = {
    size: 2,
    color: 'red'
  }

  const configs = [
    {
      props,
      desc: 'should render normal icon'
    },
    {
      props: sizeOnlyProps,
      desc: 'should render icon with custom color'
    },

  ];

  assertSnapshots(SortIconAsc, configs);
});

describe('SortIconDescSnapshot', () => {
  const sizeOnlyProps:Props = {
    size: 2
  };

  const props:Props = {
    size: 2,
    color: 'red'
  }

  const configs = [
    {
      props,
      desc: 'should render normal icon'
    },
    {
      props: sizeOnlyProps,
      desc: 'should render icon with custom color'
    },

  ];

  assertSnapshots(SortIconDesc, configs);
});

describe('SearchIconSnapshot', () => {
  const sizeOnlyProps:Props = {
    size: 2
  };

  const props:Props = {
    size: 2,
    color: 'red'
  }

  const configs = [
    {
      props,
      desc: 'should render normal icon'
    },
    {
      props: sizeOnlyProps,
      desc: 'should render icon with custom color'
    },

  ];

  assertSnapshots(SearchIcon, configs);
});