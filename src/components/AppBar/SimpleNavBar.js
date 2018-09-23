import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import SearchBooks from '../SearchBooks';

const styles = {
  root: {
    flexGrow: 1,
  },
};

function SimpleNavBar(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" >
      <Toolbar>
      <Link to="/" style={{ textDecoration: 'none' , color: 'white', display: 'inline' }} ><i style={{'padding':' 24px 24px 24px 0'}} className="material-icons">arrow_back</i></Link>
      <Typography variant="title" color="inherit" className={classes.grow}>
        MyReads
      </Typography>
      </Toolbar>
        <SearchBooks />
      </AppBar>
    </div>
  );
}

SimpleNavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleNavBar);