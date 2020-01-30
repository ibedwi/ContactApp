import { createAppContainer } from 'react-navigation'
import { 
  createStackNavigator,
} from 'react-navigation-stack';

import Contact from '../pages/Contact';
import AddContact from '../pages/AddContact';
import EditContact from '../pages/EditContact';

const stackNavigator = createStackNavigator({
  stack_contact: {
    screen: Contact,
    navigationOptions: {
      header: null
    }
  },
  stack_add_contact: {
    screen: AddContact,
    navigationOptions: {
      header: null
    }
  },
  stack_edit_contact: {
    screen: EditContact,
    navigationOptions: {
      header: null
    }
  }
}, {
  initialRouteName: 'stack_contact',
  headerMode: 'none'
})

const Router = createAppContainer(stackNavigator);
export default Router;