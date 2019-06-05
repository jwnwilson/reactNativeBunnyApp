import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  Button,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

const images = {
  home: require('../assets/images/home_bunny.gif'),
  happy: require('../assets/images/happy_bunny.gif'),
  grrr: require('../assets/images/grrr_bunny.gif'),
  silly: require('../assets/images/silly_bunny.gif'),
  hungry: require('../assets/images/hungry_bunny.gif'),
  sleepy: require('../assets/images/sleepy_bunny.gif'),
};

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: 'home'
    };
  }

  static navigationOptions = {
    header: null,
  };

  generateBunny = (feeling) => {
    this.setState({ image : feeling })
  }

  render() {
    const feelings = ['happy', 'grrr', 'silly', 'hungry', 'sleepy'];
    const buttons = feelings.map(feeling => {
      return (
          <View key={feeling} style={styles.container}>
            <Button
              title={feeling}
              onPress={() => this.generateBunny(feeling)}>
            </Button>
          </View>
      );
    });
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Text style={styles.getStartedText}>
              Welcome to the bunny app
            </Text>
            <Image
              source={
                images[this.state.image]
              }
              style={styles.welcomeImage}
            />
            <Text style={styles.getStartedText}>
              how are you feeling?
            </Text>
            {buttons}
          </View>
          
        </ScrollView>
      </View>
    );
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
  bunnyButton: {
    width: '50%',
    margin: 5
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
    height: '100%'
  },
  welcomeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
    marginHorizontal: 50,
    height: '100%'
  },
  welcomeImage: {
    height: 200,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 30,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
    padding: 5,
    marginTop: 5
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
