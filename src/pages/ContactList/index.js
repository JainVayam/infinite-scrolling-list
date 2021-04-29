import React from 'react'
import {
  Container, List, ListItem, ListItemIcon, ListItemText, Divider,
} from '@material-ui/core'

import useContactListController from './controller'
import useStyles from './style'

const ContactList = () => {
  const classes = useStyles()
  const { onScroll, contactList, ref } = useContactListController()

  return (
    <Container ref={ ref } onScroll={ onScroll } className={ classes.container }>
      <List className={ classes.list }>
        {contactList.map(({ name, image, id }) => (
          <div key={ id }>
            <ListItem>
              <ListItemIcon>
                <img className={ classes.contactImage } alt='N/A' src={ image } />
              </ListItemIcon>
              <ListItemText className={ classes.listText } primary={ name } />
            </ListItem>
            <Divider />
          </div>
        ))}
      </List>
    </Container>
  )
}

export default ContactList
