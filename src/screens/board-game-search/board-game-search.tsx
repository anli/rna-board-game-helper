import {gamesSlice} from '@games';
import {useSearchBoardGame} from '@hooks';
import {useNavigation} from '@react-navigation/core';
import {StackNavigationOptions} from '@react-navigation/stack';
import {useAppDispatch} from '@store';
import {Searchbar} from '@ui';
import React, {useState} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {List} from 'react-native-paper';

const SEARCH_TEXT_LENGTH = 3;

const Component = () => {
  const [searchText, setSearchText] = useState('');
  const {data} = useSearchBoardGame(searchText);
  const {canGoBack, goBack} = useNavigation();
  const dispatch = useAppDispatch();

  const onBack = () => {
    canGoBack() && goBack();
  };

  const onSelectItem = (item: {id: string; name: string}) => {
    dispatch(gamesSlice.actions.addOne(item));
    onBack();
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
          return (
            <List.Item title={item.name} onPress={() => onSelectItem(item)} />
          );
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
