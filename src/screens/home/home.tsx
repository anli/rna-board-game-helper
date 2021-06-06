import {allGames} from '@games';
import {useNavigation} from '@react-navigation/core';
import {StackNavigationOptions} from '@react-navigation/stack';
import {useTheme} from '@shopify/restyle';
import {useAppSelector} from '@store';
import {Theme} from '@themes';
import {IconButton, Screen, Text, View} from '@ui';
import React from 'react';
import {FlatList} from 'react-native';

const Component = () => {
  const {navigate} = useNavigation();
  const {colors} = useTheme<Theme>();
  const games = useAppSelector(allGames);

  const onAddGame = () => {
    navigate('BoardGameSearch');
  };

  return (
    <Screen testID="HomeScreen">
      <View padding="s" paddingBottom="none">
        <Text variant="sectionTitle">Game Collections</Text>
      </View>

      <View flexDirection="row" paddingHorizontal="none" paddingVertical="s">
        <FlatList
          showsHorizontalScrollIndicator={false}
          ListHeaderComponent={
            <IconButton
              accessibilityLabel="Add Game Button"
              variant="outlined"
              onPress={onAddGame}
              icon="plus"
              height={72}
              width={48}
              borderRadius={8}
              margin="none"
              marginLeft="s"
              marginRight="xs"
              color={colors.primary}
            />
          }
          horizontal
          data={games}
          keyExtractor={({id}) => id}
          renderItem={({item}) => {
            return (
              <View
                borderWidth={1}
                marginHorizontal="s"
                padding="s"
                borderRadius={8}>
                <Text>{item.name}</Text>
              </View>
            );
          }}
        />
      </View>
    </Screen>
  );
};

const options: StackNavigationOptions = {
  headerShown: false,
};

export const HomeScreen = {Component, options};
