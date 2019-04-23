import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import { withStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CodeIcon from '@material-ui/icons/Code';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from "react-router-dom";
import LibzyConfig from '../../../libzy.config';
import { Tooltip } from '@material-ui/core';

const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
});

class LibzyAppBar extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar variant="dense">
            {this.props.showMenuButton &&
              <IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer" onClick={this.props.onMenuButtonClick}>
                <MenuIcon />
              </IconButton>
            }
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
              <Typography className={classes.title} variant="h6" noWrap style={{ color: 'white' }}>
                {LibzyConfig.title}
              </Typography>
            </Link>

            <div className={classes.grow} />
            {LibzyConfig.options.search &&
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                />
              </div>
            }
            <div className={classes.sectionDesktop}>
              <Tooltip title="Github Repository">
                <IconButton color="inherit" href={LibzyConfig.github}>
                  <i className="fab fa-github" />
                </IconButton>
              </Tooltip>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

LibzyAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LibzyAppBar);