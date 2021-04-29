import Login from '../pages/Login'
import ContactList from '../pages/ContactList'

const routesList = [ {
  path: '/login',
  component: Login,
  isAuth: false,
}, {
  path: '/home',
  component: ContactList,
<<<<<<< 0caa6df5c8d654ee2891ccb1070f994980de3795
  isAuth: true,
=======
  isAuth: false,
>>>>>>> Feature/infinite list (#3)
} ]

export default routesList
