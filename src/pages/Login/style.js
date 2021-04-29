import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  loginContainer: {
    maxWidth: '50%',
    [ theme.breakpoints.down('sm') ]: {
      maxWidth: '100%',
    },
  },
  loginCard: {
    maxWidth: '50%',
    margin: 'auto',
    textAlign: 'center',
  },
  form: {
    maxWidth: '80%',
    margin: 'auto',
    padding: '30px 0px',
  },
  formFields: {
    marginBottom: '30px',
  },
  formBtn: {

  },
}))

export default useStyles
