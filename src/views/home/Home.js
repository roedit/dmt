import React from 'react';
import { injectIntl, FormattedMessage } from 'react-intl';
import { withStyles } from '@material-ui/core/styles';
import { observer, inject } from 'mobx-react';
import { Typography } from '@material-ui/core';
import { styles } from './Home.jss';

@inject('exampleStore')
@observer
class Home extends React.Component {
  render() {
    const { classes } = this.props;
    const { name } = this.props.exampleStore;

    return (
      <div className={classes.container}>
        <Typography variant={'h2'} align="center">
          <FormattedMessage id="Home.Typography.Title" />
        </Typography>
        {name}
      </div>
    );
  }
}

export default withStyles(styles)(injectIntl(Home));
