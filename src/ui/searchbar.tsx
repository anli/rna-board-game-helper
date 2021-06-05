import {debounce} from 'lodash';
import React, {useCallback, useMemo, useState} from 'react';
import {Searchbar as SearchbarNative} from 'react-native-paper';

const DEBOUNCE_MS = 1000;

type Props = {
  testID: string;
  onIconPress: () => void;
  icon: string;
  placeholder: string;
  onDebounceChangeText: (text: string) => void;
  searchTextLength: number;
};

export const Searchbar = ({
  testID,
  icon,
  placeholder,
  onDebounceChangeText,
  onIconPress,
  searchTextLength,
}: Props) => {
  const [value, setValue] = useState('');

  const debouncedSearch = useMemo(
    () => debounce((text: string) => onDebounceChangeText(text), DEBOUNCE_MS),
    [onDebounceChangeText],
  );

  const onChangeText = useCallback(
    (text: string) => {
      setValue(text);
      text.length >= searchTextLength && debouncedSearch(text);
    },
    [debouncedSearch, searchTextLength],
  );

  return (
    <SearchbarNative
      testID={testID}
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
      icon={icon}
      onIconPress={onIconPress}
    />
  );
};
