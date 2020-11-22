import wikiApi from './apps/wiki/wikiApi'

export const increment = () => ({ type: 'INCREMENT' })

export const fetchWiki = (term) => async (dispatch) => {
  const results = await wikiApi(term)
  dispatch({ type: 'fetchWiki', payload: results })
}
