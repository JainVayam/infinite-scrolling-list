import React from 'react'
import {
  Container, List, ListItem, ListItemIcon, ListItemText, Paper, Divider,
} from '@material-ui/core'

import { contacts } from '../../utils/constants/dummyData'
import useStyles from './style'

const ContactList = () => {
  const classes = useStyles()
  return (
    <Container className={ classes.container }>
      <List className={ classes.list }>
        {contacts.map(({ name, image }) => (
          <>
            <ListItem>
              <ListItemIcon>
                <img className={ classes.contactImage } alt='N/A' src={ image } />
              </ListItemIcon>
              <ListItemText className={ classes.listText } primary={ name } />
            </ListItem>
            <Divider />
          </>
        ))}
      </List>
    </Container>
  )
}

export default ContactList
