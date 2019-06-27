import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import PaperSheet from './paper';
import React, { Component } from 'react';

// styles
const styles = {
  title: {
    color: '#3F51B5',
    margin: '15px',
    textAlign: 'center'
  },
  body: {
    color: '#3F51B5',
    backgroundColor: '#292929',
    height: '100vh'
  },
  theme: {
    background: 'black'
  }
};

class APIdoc extends Component {
  render () {
    return (
      <React.Fragment>
        <Container maxWidth='md'>
          <Typography variant='h3' component='h2' style={styles.title}>
            API Documentation
          </Typography>
          <Typography variant='h6' style={styles.title}>
            Interacts directly to MySQL database for data persistence
          </Typography>
          <CssBaseline />
          <PaperSheet />
        </Container >
      </React.Fragment>
    );
  }
}
export default APIdoc;
