import React from 'react';
import { View } from '../View';
import { injectIntl, FormattedMessage } from 'react-intl';
import { withStyles } from '@material-ui/core/styles';
import { observer, inject } from 'mobx-react';
import { styles } from './Demo.jss';
import { Typography } from '@material-ui/core';

@inject('exampleStore')
@observer
class Demo extends View {
  render() {
    const { classes } = this.props;
    const { name } = this.props.exampleStore;

    return (
      <div className={classes.container}>
        <Typography variant={'h2'} align="center">
          <FormattedMessage id="Demo.Typography.Title" />
        </Typography>
        {name}
      </div>
    );
  }
}

export default withStyles(styles)(injectIntl(Demo));
