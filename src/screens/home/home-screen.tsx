import {StackNavigationOptions} from '@react-navigation/stack';
import axios from 'axios';
import {parse} from 'fast-xml-parser';
import {debounce} from 'lodash';
import React, {useCallback, useMemo, useState} from 'react';
import {SafeAreaView} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {List, Searchbar} from 'react-native-paper';
import {useQuery, UseQueryOptions} from 'react-query';

const Component = () => {
  const [value, setValue] = useState('');
  const {data, refetch} = useGetSearchBoardGame(value, {enabled: false});

  const debouncedSearch = useMemo(() => debounce(refetch, 2000), [refetch]);

  const onChange = useCallback(
    (changeText: string) => {
      setValue(changeText);
      changeText.length >= 3 && debouncedSearch();
    },
    [debouncedSearch],
  );

  return (
    <Screen>
      <Searchbar placeholder="Search" onChangeText={onChange} value={value} />
      <FlatList
        data={data}
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

export const HomeScreen = {Component, options};

const Screen = ({children}: any) => {
  return <SafeAreaView>{children}</SafeAreaView>;
};

const url = 'http://www.boardgamegeek.com/xmlapi2';
const getSearchBoardGame = async (query: string) => {
  const {data} = await axios.get(`${url}/search`, {
    params: {query, type: 'boardgame'},
  });
  const parsedData = parse(data, {
    attributeNamePrefix: '',
    ignoreAttributes: false,
  }).items.item;
  const mappedData = parsedData.map((item: any) => ({
    id: item.id,
    name: item.name.value,
  }));

  return mappedData;
};

const useGetSearchBoardGame = (
  searchText: string,
  queryOptions?: UseQueryOptions<any, unknown, any, string[]>,
) => {
  return useQuery(
    ['getSearchBoardGame', searchText],
    () => getSearchBoardGame(searchText),
    queryOptions,
  );
};
