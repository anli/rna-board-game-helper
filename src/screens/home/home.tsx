import {useNavigation} from '@react-navigation/core';
import {StackNavigationOptions} from '@react-navigation/stack';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {Button} from 'react-native-paper';

const Component = () => {
  const {navigate} = useNavigation();
  const onAddGame = () => {
    navigate('BoardGameSearch');
  };

  return (
    <Screen>
      <Button onPress={onAddGame}>Add Game</Button>
    </Screen>
  );
};

const options: StackNavigationOptions = {
  headerShown: false,
};

export const HomeScreen = {Component, options};

const Screen = ({children}: any) => {
  return <SafeAreaView>{children}</SafeAreaView>;
};
