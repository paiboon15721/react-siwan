import { useEffect, useState } from 'react'
import wikiApi from '../wikiApi'

const useWikiApi = (term) => {
  const [results, setResults] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      if (term) {
        const results = await wikiApi(term)
        setResults(results)
      }
    }
    fetchData()
  }, [term])

  return results
}

export default useWikiApi
