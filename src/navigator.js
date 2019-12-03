import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import {AuthStack} from './navigation/rootNavigator';

export default createAppContainer(
  createSwitchNavigator({
    AuthStack,
  }),
);
