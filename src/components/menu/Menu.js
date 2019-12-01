import React from 'react';
import { ListItem, ListItemText } from '@material-ui/core';
import { goToView } from '../../router';

class Menu extends React.Component {
  handleListClick(event, item) {
    goToView(item);
  }

  render() {
    return (
      <>
        <ListItem button onClick={event => this.handleListClick(event, 'home')}>
          <ListItemText primary={'Home'} />
        </ListItem>
        <ListItem button onClick={event => this.handleListClick(event, 'demo')}>
          <ListItemText primary={'Demo'} />
        </ListItem>
      </>
    );
  }
}

export default Menu;
