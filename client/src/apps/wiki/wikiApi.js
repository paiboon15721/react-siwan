import axios from 'axios'

const baseUrl = 'https://en.wikipedia.org/w/api.php'

const wikiApi = async (term) => {
  const { data } = await axios.get(baseUrl, {
    params: {
      action: 'query',
      list: 'search',
      format: 'json',
      origin: '*',
      srsearch: term,
    },
  })
  return data.query.search
}

export default wikiApi
