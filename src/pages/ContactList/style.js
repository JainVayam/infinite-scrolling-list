import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  contactImage: {
    maxWidth: '50px',
  },
  container: {
    height: '90vh',
    overflowY: 'scroll',
    width: '30%',
    margin: 'auto',
  },
  list: {
    width: '90%',
    margin: 'auto',
  },
  listText: {
    textAlign: 'center',
  },
}))

export default useStyles
