const axios = require('axios')

const baseUrl = 'https://en.wikipedia.org/w/api.php'

const app = async () => {
  const { data } = await axios.get(baseUrl, {
    params: {
      action: 'query',
      list: 'search',
      format: 'json',
      origin: '*',
      srsearch: 'php',
    },
  })
  console.log(data.query.search)
}

app()
