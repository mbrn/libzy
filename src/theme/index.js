import { createMuiTheme } from '@material-ui/core/styles';
import LibzyConfig from '../../libzy.config';

const theme = createMuiTheme({
  palette: {
    primary: LibzyConfig.theme.palette.primary,
    secondary: LibzyConfig.theme.palette.secondary,
  },
  props: {
    MuiAppBar: {
      elevation: 0,
    },
    MuiCard: {
      elevation: 0
    },
    MuiPaper: {
      elevation: 0
    },
  },
});

export default theme