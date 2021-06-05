import {useNavigation} from '@react-navigation/core';
import {StackNavigationOptions} from '@react-navigation/stack';
import React from 'react';
import {SafeAreaView, ViewProps} from 'react-native';
import {Button} from 'react-native-paper';

const Component = () => {
  const {navigate} = useNavigation();
  const onAddGame = () => {
    navigate('BoardGameSearch');
  };

  return (
    <Screen testID="HomeScreen">
      <Button onPress={onAddGame}>Add Game</Button>
    </Screen>
  );
};

const options: StackNavigationOptions = {
  headerShown: false,
};

export const HomeScreen = {Component, options};

const Screen: React.FC<ViewProps> = ({children, ...props}) => {
  return <SafeAreaView {...props}>{children}</SafeAreaView>;
};
