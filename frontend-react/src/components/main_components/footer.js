import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

function MadeWithLove () {
  return (
    <Typography variant='body2'>
      {'Built with love by '}
      <Link color='inherit' href='heindrickcheung.site' />
      {' team Heindrick.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '60vh'
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2)
  },
  footer: {
    padding: theme.spacing(2),
    marginTop: 'auto',
    color: 'white',
    background: '#292929'
  }
}));

// functional component for footer
export default function StickyFooter () {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component='main' className={classes.main} maxWidth='sm' />
      <footer className={classes.footer}>
        <Container maxWidth='sm'>
          <Typography variant='body1'>
            copyright 06-25-2019
          </Typography>
          <MadeWithLove />
        </Container>
      </footer>
    </div>
  );
}
