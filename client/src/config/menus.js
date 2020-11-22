import Table from '../pages/Table'
import WikiApp from '../apps/wiki/App'
import CommentsApp from '../apps/comments/App'
import ControlledForm from '../pages/ControlledForm'

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
]

export default menus
