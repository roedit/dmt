import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { orange, pink } from '@material-ui/core/colors';

let theme = createMuiTheme({
  palette: {
    primary: pink
  },
  status: {
    danger: orange[500]
  }
});

theme = responsiveFontSizes(theme);

export default theme;
