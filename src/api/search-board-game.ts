import axios from 'axios';
import {parse} from 'fast-xml-parser';

const url = 'https://www.boardgamegeek.com/xmlapi2';

export const getSearchBoardGame = async (
  query: string,
): Promise<{id: string; name: string}[]> => {
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
