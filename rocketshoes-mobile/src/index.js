import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import NavigationService from './util/NavigationActions';
import Header from './components/Header';
import Routes from './routes';
import colors from './themes/colors';

export default function Main() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.headerColor}
      />
      <SafeAreaView style={{flex: 1}}>
        <Header />
        <Routes
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </SafeAreaView>
    </>
  );
}
