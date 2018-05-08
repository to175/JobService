/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import { Dimensions } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { registerScreens } from './src/screens';

registerScreens(); // this is where you register all of your app's screens

Navigation.startSingleScreenApp({
  screen: {
    screen: 'src.HomeScreen', // unique ID registered with Navigation.registerScreen
    title: 'Menu', // title of the screen as appears in the nav bar (optional)
    navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
    navigatorButtons: {
        leftButtons: [
          {
            icon: require('./src/images/menu.png'), // for a textual button, provide the button title (label)
            id: 'menu', // id for this button, given in onNavigatorEvent(event) to help understand which button was clicked
            disableIconTint: false, // optional, by default the image colors are overridden and tinted to navBarButtonColor, set to true to keep the original image colors
            showAsAction: 'ifRoom', // optional, Android only. Control how the button is displayed in the Toolbar. Accepted valued: 'ifRoom' (default) - Show this item as a button in an Action Bar if the system decides there is room for it. 'always' - Always show this item as a button in an Action Bar. 'withText' - When this item is in the action bar, always show it with a text label even if it also has an icon specified. 'never' - Never show this item as a button in an Action Bar.
            buttonColor: 'black', // Optional, iOS only. Set color for the button (can also be used in setButtons function to set different button style programatically)
            buttonFontSize: 12, // Set font size for the button (can also be used in setButtons function to set different button style programatically)
            buttonFontWeight: '400', // Set font weight for the button (can also be used in setButtons function to set different button style programatically)
          },
        ]
    }
  },
  drawer: {
    left: {
      screen: 'src.LeftDrawer',
    },
    // optional, add this if you want a side menu drawer in your app
    style: {
      // ( iOS only )
      drawerShadow: true, // optional, add this if you want a side menu drawer shadow
      contentOverlayColor: 'rgba(0,0,0,0.25)', // optional, add this if you want a overlay color when drawer is open
      leftDrawerWidth: 40, // optional, add this if you want a define left drawer width (50=percent)
      rightDrawerWidth: 0 // optional, add this if you want a define right drawer width (50=percent)
    },
    type: 'MMDrawer', // optional, iOS only, types: 'TheSideBar', 'MMDrawer' default: 'MMDrawer'
    animationType: 'door', //optional, iOS only, for MMDrawer: 'door', 'parallax', 'slide', 'slide-and-scale'
    // for TheSideBar: 'airbnb', 'facebook', 'luvocracy','wunder-list'
    disableOpenGesture: false // optional, can the drawer, both right and left, be opened with a swipe instead of button
  },
  passProps: {}, // simple serializable object that will pass as props to all top screens (optional)
  animationType: 'slide-down' // optional, add transition animation to root change: 'none', 'slide-down', 'fade'
});
