import React from 'react';
import { MobxRouter } from 'mobx-router';
import { withStyles } from '@material-ui/styles';
import styles from './App.jss';
import Menu from './menu/Menu';

const App = props => {
  const { classes } = props;

  return (
    <div className={classes.app}>
      <header className={classes.header}>
        <Menu />
      </header>
      <MobxRouter />
    </div>
  );
};

export default withStyles(styles)(App);
