import React, { useEffect, useState, useRef } from 'react'
import { useMediaQuery } from '@material-ui/core'

import { contacts } from '../../utils/constants/dummyData'

const limit = 15

const useContactListController = () => {
  const [ contactList, setContacts ] = useState(contacts.slice(0, limit - 1))
  const [ page, setPage ] = useState(1)
  const ref = useRef()

  useEffect(() => {
    if (page !== 1) setContacts([ ...contactList, ...contacts.slice((page - 1) * limit, page * limit) ])
  }, [ page ])

  const onScroll = () => {
    const { current: { scrollTop, clientHeight, scrollHeight } } = ref
    if (scrollTop + clientHeight === scrollHeight) setPage(page + 1)
  }
  return ({
    onScroll, contactList, ref,
  })
}

export default useContactListController
