import renderer from 'react-test-renderer';

import { Configs, Props } from "./index.types"

export const assertSnapshots = (Component:(props:Props) => JSX.Element, configs: Configs)=>{

  configs.forEach(config => {
    const {desc, props} = config
    test(desc, () => {
      jest.useFakeTimers()
      const tree = renderer.create(Component(props)).toJSON();
    
      expect(tree).toMatchSnapshot()
    })
  })
}