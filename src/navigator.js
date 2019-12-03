import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import {AuthStack, AppTabs} from './navigation/rootNavigator';

export default createAppContainer(
  createSwitchNavigator({
    AuthStack,
    AppTabs,
  }),
);
