import React from 'react'
import {
  Container, Card, TextField, Button,
} from '@material-ui/core'

import useStyles from './style'
import useLoginController from './controller'

const Login = () => {
  const classes = useStyles()
  const { onSubmit, onChange } = useLoginController()
  return (
    <Container className={ classes.loginContainer }>
      <Card className={ classes.loginCard }>
        <h1> LOGIN </h1>
        <form className={ classes.form }>
          <TextField
            onChange={ (e) => onChange('username', e) }
            fullWidth
            className={ classes.formFields }
            placeholder='Username'
          />
          <TextField
            onChange={ (e) => onChange('password', e) }
            fullWidth
            className={ classes.formFields }
            placeholder='Password'
          />
          <Button onClick={ onSubmit }> Log In</Button>
        </form>
      </Card>
    </Container>
  )
}
export default Login
