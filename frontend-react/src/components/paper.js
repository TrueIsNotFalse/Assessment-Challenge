import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

// style
const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    margin: '5%',
    background: '#292929',
    color: '#3F51B5'
  },
  font: {
    color: 'white',
    padding: '5px'
  }
}));

// This method is to display all API requests in the API documentation route
export default function PaperSheet () {
  const classes = useStyles();
  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant='h5' component='h3' className={classes.font}>
          <b>GET  /api/myinfo</b>
        </Typography>
        <Typography component='p'>
          <em>Retrieve my information in JSON format</em>
        </Typography>
      </Paper>
      <Paper className={classes.root}>
        <Typography variant='h5' component='h3' className={classes.font}>
          <b>GET /api/reasons</b>
        </Typography>
        <Typography component='p'>
          <em>Retrieve list of reasons</em>
        </Typography>
      </Paper>
      <Paper className={classes.root}>
        <Typography variant='h5' component='h3' className={classes.font}>
          <b>POST /api/reasons</b>
        </Typography>
        <Typography component='p'>
          <em>Create a new reason request in JSON with attribute including: name, reason</em>
        </Typography>
      </Paper>
      <Paper className={classes.root}>
        <Typography variant='h5' component='h3' className={classes.font}>
          <b>GET /api/reasons/id</b>
        </Typography>
        <Typography component='p'>
          <em>Retrieve existing reason by id</em>
        </Typography>
      </Paper>
      <Paper className={classes.root}>
        <Typography variant='h5' component='h3' className={classes.font}>
          <b>PUT /api/reasons/id</b>
        </Typography>
        <Typography component='p'>
          <em>Update existing reason by id</em>
        </Typography>
      </Paper>
      <Paper className={classes.root}>
        <Typography variant='h5' component='h3' className={classes.font}>
          <b>DELETE /api/reasons/id</b>
        </Typography>
        <Typography component='p'>
          <em>Remove reason by id</em>
        </Typography>
      </Paper>
    </div>
  );
}
