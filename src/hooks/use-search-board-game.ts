import {getSearchBoardGame} from '@api';
import {useQuery} from 'react-query';

export const useSearchBoardGame = (query: string) => {
  return useQuery(
    ['getSearchBoardGame', {query}],
    () => getSearchBoardGame(query),
    {
      enabled: !!query,
    },
  );
};
