import Table from '../pages/Table'
import WikiApp from '../apps/wiki/App'
import CommentsApp from '../apps/comments/App'
import ControlledForm from '../pages/ControlledForm'
import UncontrolledForm from '../pages/UncontrolledForm'
import HookForm from '../pages/HookForm'
import AppContext from '../pages/AppContext'
import App from '../apps/wiki/App'

const menus = [
  {
    path: '/table',
    name: 'My Table',
    component: Table,
  },
  {
    path: '/wiki',
    name: 'Wiki App',
    component: WikiApp,
  },
  {
    path: '/comments',
    name: 'Comments App',
    component: CommentsApp,
  },
  {
    path: '/controlled-form',
    name: 'Controlled Form',
    component: ControlledForm,
  },
  {
    path: '/Uncontrolled-form',
    name: 'Uncontrolled Form',
    component: UncontrolledForm,
  },
  {
    path: '/hook-form',
    name: 'Hook Form',
    component: HookForm,
  },
  {
    path: '/app-context',
    name: 'App Context',
    component: AppContext,
  },
]

export default menus
