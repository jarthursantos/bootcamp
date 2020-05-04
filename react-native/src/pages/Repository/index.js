import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import {WebView} from 'react-native-webview';

export default function Repository({navigation}) {
  const [repo, setRepo] = useState(null);

  useEffect(() => {
    setRepo(navigation.getParam('repo'));
  }, []);

  return repo ? (
    <WebView source={{uri: repo.html_url}} style={{flex: 1}} />
  ) : (
    <View />
  );
}

export function navigationOptions({navigation}) {
  return {
    title: navigation.getParam('repo').name,
  };
}

Repository.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
  }),
};

Repository.defaultProps = {
  navigation: null,
};
