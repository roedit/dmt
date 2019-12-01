import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { observer, inject } from 'mobx-react';
import Button from '@material-ui/core/Button';
import { styles } from './Dummy.jss';

@inject('exampleStore')
@observer
class Dummy extends React.Component {
  render() {
    const { classes } = this.props;
    const { name } = this.props.exampleStore;

    return <Button className={classes.root}>{name}</Button>;
  }
}

export default withStyles(styles)(Dummy);
