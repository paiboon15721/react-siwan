function wiki(state = [], action) {
  switch (action.type) {
    case 'fetchWiki':
      return action.payload
    default:
      return state
  }
}

export default wiki
