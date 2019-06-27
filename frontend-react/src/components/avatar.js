import { makeStyles } from '@material-ui/core/styles';
import pic from './static/images/profilepic.jpg';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import React from 'react';

// style for avatar image
const useStyles = makeStyles({
  bigAvatar: {
    margin: 10,
    width: 300,
    height: 300,
    marginBottom: 30
  }
});

export default function ImageAvatars () {
  const classes = useStyles();
  return (
    // Avater image of me
    <Grid container justify='center' alignItems='center'>
      <Avatar alt='Heindrick Cheung' src={pic} className={classes.bigAvatar} />
    </Grid>
  );
}
