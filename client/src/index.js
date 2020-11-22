import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './reducers'
import './scss/custom.scss'
import App from './App'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)
