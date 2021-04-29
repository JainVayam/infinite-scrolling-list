import React from 'react'
import {
  Container, Card, TextField, Button,
} from '@material-ui/core'

import useStyles from './style'

const Login = () => {
  const classes = useStyles()
  return (
    <Container className={ classes.loginContainer }>
      <Card className={ classes.loginCard }>
        <h1> LOGIN </h1>
        <form className={ classes.form }>
          <TextField fullWidth className={ classes.formFields } placeholder='Username' />
          <TextField fullWidth className={ classes.formFields } placeholder='Password' />
          <Button> Log In</Button>
        </form>
      </Card>
    </Container>
  )
}
export default Login
