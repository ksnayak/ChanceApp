import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, Animated} from 'react-native';

import Button from '../components/Button';
import {color} from '../constant/color';

const Login = () => {
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowLogo(showLogo => !showLogo);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const loginHandler = () => {
    console.log('Login button pressed');
  };

  const signupHandler = () => {
    console.log('Signup button pressed');
  };

  return (
    <View style={styles.container}>
      <View style={styles.backgroundImageContainer}>
        <Image
          style={styles.backgroundImage}
          source={require('../assets/bg.jpg')}
        />

        <View style={styles.logoContainer}>
          <Image
            style={[styles.img, {display: showLogo ? 'none' : 'flex'}]}
            source={require('../assets/1.png')}
          />
        </View>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>The personality first connecting app</Text>
        <Text style={styles.subtitle}>
          if you were a fruit, then you'd be a fine-apple
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <Button
            title="Login"
            textColor="white"
            color={color.lightBlue}
            onPress={loginHandler}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Sign Up"
            textColor={color.lightBlue}
            onPress={signupHandler}
          />
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  backgroundImageContainer: {
    flex: 4,
  },
  logoContainer: {
    position: 'absolute',
    top: '70%',
    left: '27%',
    alignItems: 'center',
  },
  img: {
    width: 220,
    height: 130,
  },
  titleContainer: {
    flex: 2.5,
    padding: 10,
  },
  title: {
    color: 'black',
    fontSize: 45,
    fontWeight: '600',
    margin: 10,
  },
  subtitle: {
    textAlign: 'center',
    color: 'black',
    fontSize: 17,
  },
  buttonsContainer: {
    flexDirection: 'row',
    // flex: 1
  },
  buttonContainer: {
    flex: 1,
  },
});
