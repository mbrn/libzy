import { createMuiTheme } from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#01579b',
    },
    secondary: {
      main: '#e65100',
    },
  },
  props: {
    MuiAppBar: {
      elevation: 0,
    },
  },
});

export default theme