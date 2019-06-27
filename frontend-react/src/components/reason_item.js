import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DeleteIcon from '@material-ui/icons/Delete';
import { ListItem } from '@material-ui/core';

// style of each card
const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 400,
    background: '#292929',
    color: '#3F51B5'
  },
  // open card when down arrow is clicken
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  // expand card if my reason becomes too big
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  avatar: {
    backgroundColor: red[500]
  },
  textColor: {
    color: '#3F51B5'
  }
}));

// this function is for each list item rendering my reasons
function ReasonItem (props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick () {
    setExpanded(!expanded);
  }
  return (
    <ListItem key={props.info.id}>
      <Card className={classes.card}>
        <CardHeader
          action={
            <IconButton
              onClick={props.handleDelete.bind(this, props.info.id)}
            >
              <DeleteIcon className={classes.textColor} />
            </IconButton>
          }
          title={props.info.name}
        />
        <CardContent>
          <Typography variant='body2' color='inherit' component='p'>
            {props.info.created_at}
          </Typography>
          <Typography variant='body2' color='inherit' component='p'>
            {'POST ID# - ' + props.info.id}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label='Show more'
            color='inherit'
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout='auto' unmountOnExit>
          <CardContent>
            <Typography color='inherit' paragraph>
              {'Reason: ' + props.info.reason}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </ListItem>
  );
}

export default ReasonItem;
