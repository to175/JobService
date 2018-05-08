import { Navigation } from 'react-native-navigation';

import HomeScreen from './home';
import LeftDrawer from './drawer/leftdrawer';

import MissionsListScreen from './pages/missionslist';
import ApplicationsScreen from './pages/applications';

import AdminScreen from './pages/admin';
import EnterprisesScreen from './pages/enterprises';
import CandidatesScreen from './pages/candidates';
import AdminMissionsScreen from './pages/adminmissions';
import MembersListScreen from './pages/memberslist';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('src.HomeScreen', () => HomeScreen);
  Navigation.registerComponent('src.LeftDrawer', () => LeftDrawer);

  Navigation.registerComponent('src.MissionsListScreen', () => MissionsListScreen);
  Navigation.registerComponent('src.ApplicationsScreen', () => ApplicationsScreen);

  Navigation.registerComponent('src.AdminScreen', () => AdminScreen);
  Navigation.registerComponent('src.EnterprisesScreen', () => EnterprisesScreen);
  Navigation.registerComponent('src.CandidatesScreen', () => CandidatesScreen);
  Navigation.registerComponent('src.AdminMissionsScreen', () => AdminMissionsScreen);
  Navigation.registerComponent('src.MembersListScreen', () => MembersListScreen);
}
