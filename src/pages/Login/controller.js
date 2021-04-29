import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { loginCredentils } from '../../utils/constants/dummyData'

const useLoginController = () => {
  const history = useHistory()
  const [ username, setUsername ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ error, setError ] = useState(null)

  const onChange = (field, { currentTarget: { value } }) => {
    if (field === 'username') setUsername(value)
    else setPassword(value)
  }

  const onSubmit = () => {
    if (loginCredentils[ username ] && loginCredentils[ username ].password === password) {
      history.push('/home')
    } else setError('Wrong Credentials')
  }

  return ({
    onChange, onSubmit, error, username, password,
  })
}

export default useLoginController
