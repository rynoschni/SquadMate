import React from "react";
import LoginButton from "../Home/LoginButton";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
//import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const HomeHeader = (props) => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            SquadMate
          </Typography>
          <LoginButton />
            
        </Toolbar>
      </AppBar>
    </>
  );
};

export default HomeHeader;