import React, {useState} from 'react';
import {Button, Overlay, Input, Icon} from '@rneui/themed';
import {View, Text, StyleSheet} from 'react-native';

const LoginForm = ({navigation, visible, toggleOverlay}) => {
  const [userID, setUserID] = useState('');
  console.log(userID);
  return (
    <View>
      <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
        <Text style={styles.textPrimary}>Bored?!</Text>
        <Text style={styles.textSecondary}>
          Sign in and find an activity near you!
        </Text>
        <View>
          <Input
            containerStyle={styles.inputBox}
            autoFocus="true"
            placeholder="Email Address"
            keyboardType="default"
            value={userID}
            onChangeText={value => setUserID(value)}
            leftIcon={{type: 'fontisto', name: 'email'}}
          />
          <Input
            autoFocus="true"
            keyboardType="default"
            leftIcon={{
              type: 'material-community',
              name: 'form-textbox-password',
            }}
            placeholder="Password"
          />
        </View>
        <Button
          styles={styles.button}
          icon={
            <Icon
              name="doubleright"
              type="antdesign"
              color="white"
              size={25}
              iconStyle={styles.buttonIcon}
            />
          }
          title="Log In"
          onPress={toggleOverlay}
        />
        <Button
          styles={styles.button}
          icon={
            <Icon
              name="cancel"
              type="material"
              color="white"
              size={25}
              iconStyle={styles.buttonIcon}
            />
          }
          title="Cancel"
          onPress={toggleOverlay}
        />
      </Overlay>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  button: {
    marginBottom: 10,
  },
  textPrimary: {
    marginVertical: 20,
    textAlign: 'center',
    fontSize: 20,
  },
  textSecondary: {
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 17,
  },
  buttonIcon: {
    marginRight: 10,
  },
  inputBox: {
    width: 350,
  },
});
