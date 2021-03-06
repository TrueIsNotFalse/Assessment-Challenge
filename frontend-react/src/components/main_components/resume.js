import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
import samplePDF from '../static/contents/resume.pdf';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

// styles
const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  leftIcon: {
    marginRight: theme.spacing(1),
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
  iconSmall: {
    fontSize: 20,
  },
}));

// This method will provide local href link to my resume for download and icon save action
function DownloadButton() {
  const classes = useStyles();
  return (
    <div>
      <Button download href='./resume.pdf' variant="contained" size="small" className={classes.button}>
        <SaveIcon className={clsx(classes.leftIcon, classes.iconSmall)} />
        Save
      </Button>
    </div>
  )
}

export default class MyDocument extends Component {
  state = {
    pageNumber: 1,
  }
  render() {
    const { pageNumber } = this.state;
    return (
      // using samplePDF node package, benefit of rendering documents in react components
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm" style={{marginTop: '50px'}}>
          <Document
            file={samplePDF}
          >
            <Page pageNumber={pageNumber} />
          </Document>
          <DownloadButton/>
        </Container>
      </React.Fragment>
    );
  }
}

