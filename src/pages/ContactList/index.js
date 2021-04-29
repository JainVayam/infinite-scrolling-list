import React from 'react'
import {
  Container, List, ListItem, ListItemIcon, ListItemText, Paper,
} from '@material-ui/core'

import { contacts } from '../../utils/constants/dummyData'

const ContactList = () => (
  <Container>
    <Paper>
      <List>
        {contacts.map(({ name, image }) => (
          <ListItem>
            <ListItemIcon>
              <img alt='N/A' src={ image } />
            </ListItemIcon>
            <ListItemText primary={ name } />
          </ListItem>
        ))}
      </List>
    </Paper>
  </Container>
)

export default ContactList
