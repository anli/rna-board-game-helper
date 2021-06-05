import {useSearchBoardGame} from '@hooks';
import {useNavigation} from '@react-navigation/core';
import {StackNavigationOptions} from '@react-navigation/stack';
import {Searchbar} from '@ui';
import React, {useState} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {List} from 'react-native-paper';

const SEARCH_TEXT_LENGTH = 3;

const Component = () => {
  const [searchText, setSearchText] = useState('');
  const {data} = useSearchBoardGame(searchText);
  const {canGoBack, goBack} = useNavigation();

  const onBack = () => {
    canGoBack() && goBack();
  };

  return (
    <Screen>
      <Searchbar
        testID="Searchbar"
        placeholder="Search"
        onDebounceChangeText={setSearchText}
        icon="arrow-left"
        onIconPress={onBack}
        searchTextLength={SEARCH_TEXT_LENGTH}
      />
      <FlatList
        data={data}
        keyExtractor={({id}) => id}
        renderItem={({item}) => {
          return <List.Item title={item.name} />;
        }}
      />
    </Screen>
  );
};

const options: StackNavigationOptions = {
  headerShown: false,
};

export const BoardGameSearchScreen = {Component, options};

const Screen = ({children}: any) => {
  return <SafeAreaView>{children}</SafeAreaView>;
};
