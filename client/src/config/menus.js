import Table from '../pages/Table'
import WikiApp from '../apps/wiki/App'
import CommentsApp from '../apps/comments/App'
import ControlledForm from '../pages/ControlledForm'
import UncontrolledForm from '../pages/UncontrolledForm'
import HookForm from '../pages/HookForm'
import AppContext from '../pages/AppContext'
import UseReducer from '../pages/UseReducer'
import TryRedux from '../pages/TryRedux'

const menus = [
  {
    path: '/table',
    name: 'My Table',
    component: Table,
    allowRoles: ['guest', 'manager'],
  },
  {
    path: '/wiki',
    name: 'Wiki App',
    component: WikiApp,
    allowRoles: ['manager'],
  },
  {
    path: '/comments',
    name: 'Comments App',
    component: CommentsApp,
    allowRoles: ['manager'],
  },
  {
    path: '/controlled-form',
    name: 'Controlled Form',
    component: ControlledForm,
    allowRoles: ['guest', 'manager'],
  },
  {
    path: '/Uncontrolled-form',
    name: 'Uncontrolled Form',
    component: UncontrolledForm,
    allowRoles: ['guest', 'manager'],
  },
  {
    path: '/hook-form',
    name: 'Hook Form',
    component: HookForm,
    allowRoles: ['guest', 'manager'],
  },
  {
    path: '/app-context',
    name: 'App Context',
    component: AppContext,
    allowRoles: ['guest', 'manager'],
  },
  {
    path: '/use-reducer',
    name: 'Use Reducer',
    component: UseReducer,
    allowRoles: ['guest', 'manager'],
  },
  {
    path: '/try-redux',
    name: 'Try Redux',
    component: TryRedux,
    allowRoles: ['guest', 'manager'],
  },
]

export default menus
