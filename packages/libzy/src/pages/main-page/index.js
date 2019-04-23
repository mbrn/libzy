import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Grid, Button, Typography, withStyles, Paper, Card, CardHeader, CardContent, CardActions } from '@material-ui/core';
import LibzyConfig from '../../../libzy.config';

class MainPageInner extends Component {
  render() {
    return (
      <div className={this.props.classes.root}>
        <div className={this.props.classes.topBar}>
          <div className={this.props.classes.topBarContent}>
            <Typography variant="h2" className="text" style={{ color: 'white' }}>{this.props.config.title}</Typography>
            <Typography variant="title" className="text" style={{ color: 'white' }}>{this.props.config.subTitle}</Typography>
            <Link to="/docs/get-started" style={{ textDecoration: 'none' }}>
              <Button className={this.props.classes.topBarButton}>Get Started</Button>
            </Link>
            <div style={{ padding: 20 }}>
              <a href={this.props.config.github} >
                <img alt="GitHub stars" src={"https://img.shields.io/github/stars/" + this.props.config.githubShort + ".svg?style=social"}></img>
              </a>
            </div>
          </div>
        </div>
        <div className={this.props.classes.features}>
          <Grid container spacing={0}>
            {this.props.data.features.map(feature => (
              <Grid item xs={12} sm={6} md={4} lg={6} className={this.props.classes.feature}>
                <Paper className={this.props.classes.featureContent}>
                  <Typography variant="h6" className="title">{feature.title}</Typography>
                  <Typography variant="subtitle2" className="text">{feature.text}</Typography>
                  {feature.button &&
                    <div className={this.props.classes.featureActions}>
                      <Link to={feature.button.path} style={{ textDecoration: 'none' }}>
                        <Button className={this.props.classes.featureButton}>{feature.button.text}</Button>
                      </Link>
                    </div>
                  }
                </Paper>
              </Grid>
            ))}

          </Grid>
        </div>
      </div>
    );
  }
}

const styles = theme => ({
  root: {
    width: '100%',
  },
  topBar: {
    display: 'table',
    width: '100%',
    height: 400,
    backgroundColor: theme.palette.primary.main,
  },
  topBarContent: {
    display: 'table-cell',
    verticalAlign: 'middle',
    textAlign: 'center',
    '& .text': {
      color: 'white',
      marginBottom: 10,
    }
  },
  topBarButton: {
    width: 150,
    color: '#FFFFFF99',
    textTransform: 'none',
    border: '1px solid #FFFFFF99',
    transition: 'all ease 300ms',
    '&:hover': {
      color: '#FFF',
      backgroundColor: '#DDDDDD22',
    },
  },
  features: {
    margin: 'auto',
    maxWidth: 960,
  },
  feature: {
    padding: '15px 5px',
  },
  featureContent: {
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
    height: '100%',
    backgroundColor: 'white',
    '& .title': {
      color: '#65819D',
      padding: 5,
    },
    '& .text': {
      color: '#65819D99',
      padding: '5px 5px 0',
      flex: 1,
    }
  },
  featureActions: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  featureButton: {
    textTransform: 'none',
    color: '#65819D',
  }
});

const MainPage = withStyles(styles, { withTheme: true })(MainPageInner);
export default MainPage;