import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import ScrollAnimation from 'react-animate-on-scroll';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import React from 'react';

// add styles to this component
const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
    textAlign: 'center'
  },
  paper: {
    padding: theme.spacing(3, 2),
    marginTop: '2%',
    color: '#3F51B5',
    backgroundColor: '#292929'
  }
}));

//
function About () {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <ScrollAnimation duration={4} animateIn='fadeIn'>
        <Container className={classes.root} maxWidth='md'>
          <Box>
            <Paper className={classes.paper}>
              <Typography variant='h4' component='h3'>
                Information
              </Typography>
              <Typography align='left' component='p'>
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hello Berkshire Hathaway.
                I am candidate Heindrick Cheung, a software engineer who recently completed
                a formal education of projects based Full Stack curriculum at Holberton
                School in San Francisco. After completion, I continued learning by building
                interesting and meaningful projects. My passion in programming includes building
                web applications with responsive UIs and RESTful APIs with CRUD operations. I enjoy
                gathering data from third party APIs or implementing webscrapers for static sites.
                My future plan is to become a Data Engineer, Data Scientist, or AI engineer!
                <br />
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Please explore the different pages here, especially
                the API documentation page! Hopefully this simple full-stack web app will showcase all
                3 logical layers of requirements: Presentation | Services | Persistence
              </Typography>
            </Paper>
            <Paper className={classes.paper}>
              <Typography variant='h4' component='h3'>
                Languages for this challenge
              </Typography>
              <Typography component='p'>
                <br />
                Javascript | JSX | Python3 | HTML | CSS | SQL
              </Typography>
            </Paper>
            <Paper className={classes.paper}>
              <Typography variant='h4' component='h3'>
                Tools and technologies for this challenge
              </Typography>
              <Typography component='p'>
                <br />
                React.js | Material-UI | NPM | Font-awesome | Devicons | SVG | Google Fonts
                <br />
                <br />
                Flask | SQLAlchemy | MySQL | REST API | POSTMAN | VS CODE | Linux | Git
              </Typography>
            </Paper>
          </Box>
        </Container>
      </ScrollAnimation>
    </React.Fragment>
  );
}
export default About;
