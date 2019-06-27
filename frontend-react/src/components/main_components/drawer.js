import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import React from 'react';

// style
const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
  },
  side: {
    background: '#292929',
    color: 'white',
    height: '99.95vh'
  }
});

// method to manage click events to open and close drawer
function TemporaryDrawer () {
  // styles object
  const classes = useStyles();

  // left is boolean for navigation bar to open when hamburger icon is clicked
  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (side, open) => event => {
  // set side variable in state to true when click event is recorded
    setState({ ...state, [side]: open });
  };

  // name of links to route to different components
  const sideList = side => (
    <div
      className={classes.list}
      // listening for on click events and invokes toggleDrawer method
      onClick={toggleDrawer(side, false)}
    >
      <List className={classes.side}>
        {/* array of strings for the app drawer */}
        {/* uses ES6 higher order function .map */}
        {['Home', 'Resume', 'API documentation', 'Berkshire Hathaway Assessment', 'Tech Stacks'].map((text, index) => (
          // Lowercase all characters and join into one string to create endpoint for the above list so router can detect to render components
          <ListItem button key={index} component={Link} to={'/' + text.toLowerCase().replace(/ /g, '')}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );
  return (
    <div>
      {/* hamburger menu */}
      <IconButton onClick={toggleDrawer('left', true)} edge='start' className={classes.menuButton} color='inherit' aria-label='Menu'>
        <MenuIcon />
      </IconButton>

      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
    </div>
  );
}

export default TemporaryDrawer;
