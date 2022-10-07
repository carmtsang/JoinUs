import {Button} from '@rneui/base';
import React from 'react';
import {ScrollView, StyleSheet, StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Herobanner from './Herobanner';
import HowTo from './HowTo';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView styles={styles.sectionContainer}>
      <StatusBar />
      <ScrollView styles={styles.scrollView}>
        <Herobanner />
        <HowTo />
        <Button
          title="Go to Profile"
          onPress={() => navigation.navigate('User', {name: 'Carmen'})}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 50,
    paddingHorizontal: 24,
    backgroundColor: 'white',
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});

export default HomeScreen;
