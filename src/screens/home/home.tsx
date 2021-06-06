import {useNavigation} from '@react-navigation/core';
import {StackNavigationOptions} from '@react-navigation/stack';
import {useTheme} from '@shopify/restyle';
import {Theme} from '@themes';
import {IconButton, Screen, Text, View} from '@ui';
import React from 'react';

const Component = () => {
  const {navigate} = useNavigation();
  const {colors} = useTheme<Theme>();

  const onAddGame = () => {
    navigate('BoardGameSearch');
  };

  return (
    <Screen testID="HomeScreen">
      <View padding="s" paddingBottom="none">
        <Text variant="sectionTitle">Game Collections</Text>
      </View>

      <View flexDirection="row" padding="s">
        <IconButton
          accessibilityLabel="Add Game Button"
          variant="outlined"
          onPress={onAddGame}
          icon="plus"
          height={72}
          width={48}
          borderRadius={8}
          margin="none"
          marginRight="s"
          color={colors.primary}
        />
        {/* <FastImage
          style={{
            width: 96,
            height: 72,
            marginHorizontal: 8,
            borderRadius: 8,
          }}
          source={{
            uri: 'https://cf.geekdo-images.com/7k_nOxpO9OGIjhLq2BUZdA__thumb/img/eQ69OEDdjYjfKg6q5Navee87skU=/fit-in/200x150/filters:strip_icc()/pic3163924.jpg',
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.cover}
        /> */}
      </View>
    </Screen>
  );
};

const options: StackNavigationOptions = {
  headerShown: false,
};

export const HomeScreen = {Component, options};
