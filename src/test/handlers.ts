import {rest} from 'msw';

export const handlers = [
  rest.get('https://www.boardgamegeek.com/xmlapi2/search', (req, res, ctx) => {
    const xml =
      '<?xml version="1.0" encoding="utf-8"?>' +
      '<items total="67" termsofuse="https://boardgamegeek.com/xmlapi/termsofuse">' +
      '<item type="boardgame" id="A"><name type="primary" value="Board Game A"/><yearpublished value="2017" /></item>' +
      '<item type="boardgame" id="B"><name type="primary" value="Board Game B"/><yearpublished value="2020" /></item>' +
      '<item type="boardgame" id="C"><name type="primary" value="Board Game C"/><yearpublished value="2016" /></item>' +
      '</items>';
    return res(ctx.xml(xml));
  }),
];
