import { combineReducers } from 'redux';

import NavigationReducer from './Navigation/reducer_navigation';
import HamburgerReducer from './Hamburger/reducer_hamburger';
import FirebaseReducer from './Firebase/reducer_firebase'

const rootReducer = combineReducers({
  navigationLinks: NavigationReducer,
  navigationState: HamburgerReducer,
  worksList : FirebaseReducer,
});

export default rootReducer;
