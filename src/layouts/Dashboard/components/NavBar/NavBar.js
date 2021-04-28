import React, { Fragment, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import {
  Drawer,
  Divider,
  Paper,
  Avatar,
  Typography,
  Button,
  Hidden
} from '@material-ui/core';
import useRouter from 'utils/useRouter';
import { Navigation } from 'components';
import navigationConfig from './navigationConfig';
import { ExitToApp } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    color: '#fff !important',
    backgroundColor: '#686868',
    overflowY: 'auto'
  },
  content: {
    padding: theme.spacing(2)
  },
  profile: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: 'fit-content'
  },
  avatar: {
    border: '1px solid #fff',
    width: 60,
    height: 60
  },
  name: {
    color: '#fff',
    marginTop: theme.spacing(1)
  },
  divider: {
    marginTop: theme.spacing(2)
  },
  icon: {
    marginLeft: 5
  },
  bio: {
    color: '#fff'
  },
  logoutBtn: {
    marginTop: 10,
    width: '100%'
  },
  navigation: {
    marginTop: theme.spacing(2)
  }
}));

const NavBar = props => {
  const { openMobile, onMobileClose, className, ...rest } = props;

  const classes = useStyles();
  const router = useRouter();
  const session = useSelector(state => state.session);

  useEffect(() => {
    if (openMobile) {
      onMobileClose && onMobileClose();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.location.pathname]);

  const navbarContent = (
    <div className={classes.content}>
      <div className={classes.profile}>
        <Avatar
          alt="Person"
          className={classes.avatar}
          component={RouterLink}
          src={session.user.avatar}
          to="/profile/1/timeline"
        />
        <Typography className={classes.name} variant="h4">
          {session.user.first_name} {session.user.last_name}
        </Typography>
        <Typography variant="body2" className={classes.bio}>
          {session.user.bio}
        </Typography>
      </div>
      <Button
        variant="contained"
        color="secondary"
        className={classes.logoutBtn}>
        Logout <ExitToApp className={classes.icon} />
      </Button>
      <Divider className={classes.divider} />
      <nav className={classes.navigation}>
        {navigationConfig.map(list => (
          <Navigation
            component="div"
            key={list.title}
            pages={list.pages}
            title={list.title}
          />
        ))}
      </nav>
    </div>
  );

  return (
    <Fragment>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary">
          <div {...rest} className={clsx(classes.root, className)}>
            {navbarContent}
          </div>
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Paper
          {...rest}
          className={clsx(classes.root, className)}
          elevation={1}
          square>
          {navbarContent}
        </Paper>
      </Hidden>
    </Fragment>
  );
};

NavBar.propTypes = {
  className: PropTypes.string,
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

export default NavBar;
