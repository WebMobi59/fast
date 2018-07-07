/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Image } from 'react-native';

import {
  Scene,
  Router,
  Drawer
} from 'react-native-router-flux';


import SignUp from './src/screens/signUp/index';
import LogIn from './src/screens/logIn/index';
import ForgotPassword from './src/screens/forgot/index';
import Verify from './src/screens/verify/index';
import QuickStart from './src/screens/quickStart/index';
import Home from './src/screens/home/index';
import SideMenu from './src/screens/sidemenu/index';
import Queue from './src/screens/queue/index';
import Scan from './src/screens/scan/index';
import Bill from './src/screens/bill/index';
import NearBy from './src/screens/nearby/index';
import Profile from './src/screens/profile/index';

import images from './src/Lib/Images';

const { TabIcons } = images;

class TabIcon extends Component {
  render() {
    var icon = TabIcons.HomeIcon
    switch (this.props.iconName) {
      case 'home':
        icon = this.props.focused ? TabIcons.HomeSelectedIcon : TabIcons.HomeIcon
        break
      case 'scan':
        icon = this.props.focused ? TabIcons.ScanSelectedIcon : TabIcons.ScanIcon
        break
      case 'queue':
        icon = this.props.focused ? TabIcons.QueueSelectedIcon : TabIcons.QueueIcon
        break
      case 'bill':
        icon = this.props.focused ? TabIcons.BillSelectedIcon : TabIcons.BillIcon
        break
      default:
        icon = this.props.focused ? TabIcons.NearBySelectedIcon : TabIcons.NearByIcon
    }

    return (
      <Image source={icon}/>
    )
  }
  
}

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene initial key="login" hideNavBar component={LogIn}/>
          <Scene key="signup" hideNavBar component={SignUp}/>
          <Scene key="forgot" hideNavBar component={ForgotPassword}/>
          <Scene key="verify" hideNavBar component={Verify}/>
          <Scene key="quickstart" hideNavBar component={QuickStart}/>
          <Drawer 
            key="menu" 
            hideNavBar 
            drawerImage={require('./src/assets/images/menu_icon_blue.png')} 
            contentComponent={SideMenu} 
          >
            <Scene key="tabs" tabs={true} tabBarPosition='bottom' activeTintColor="#1F81CE">
              <Scene key="home" title="Home" hideNavBar component={Home} icon={TabIcon} iconName="home"/>
              <Scene key="scan" title="Scan" hideNavBar component={Scan} icon={TabIcon} iconName="scan"/>
              <Scene key="queue" title="Queue" hideNavBar component={Queue} icon={TabIcon} iconName="queue"/>
              <Scene key="bill" title="Bill" hideNavBar component={Bill} icon={TabIcon} iconName="bill"/>
              <Scene key="nearby" title="NearBy" hideNavBar component={NearBy} icon={TabIcon} iconName="nearby"/>
            </Scene>

            <Scene key="profile" title="Profile" hideNavBar component={Profile} />
          </Drawer>
        </Scene>
      </Router>
    );
  }
}