import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/styles';

// CSS styles
const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    background: '#292929',
    justifyContent: 'center',
    margin: '5%',
    borderRadius: '5px',
    padding: '2%'
  },
  textField: {
    color: '#3F51B5',
    margin: '2%'
  }
});

// Form inputs
class ReasonForm extends Component {
  constructor (props) {
    super(props);
    // keyboard click events will be recorded and updated in state for every key action
    this.state = {
      name: '',
      reason: '',
      id: ''
    };
    // submit and change method is binded to this component only
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // this method is to set state variables when a key press event is recorded
  handlePost (event) {
    this.setState({
      [event.target.name]: event
    });
  }

  // this method is to update state variables for every key action
  handleChange (event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  // this method will listen for submit button when press will send POST request to backend
  handleSubmit (event) {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });

    // POST method to database, but will first check if both inputs is filled. If id exist, go to next condition checker
    if (this.state.reason && !this.state.id) {
      delete this.state.id;
      fetch('/reasons', {
        method: 'POST',
        body: JSON.stringify(this.state),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(results => {
        return results.json();
      }).then(data => {
        this.props.getInfo();
      });
      // Update method if id exist to update reasons of why I want to work for Berkshire!
    } else if (this.state.id && (this.state.name || this.state.reason)) {
      fetch('/reasons/' + this.state.id, {
        method: 'PUT',
        body: JSON.stringify(this.state),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(results => {
        return results.json();
      }).then(data => {
        this.props.getInfo();
      });
    }
  }
  render () {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <form className={classes.container} onSubmit={this.handleSubmit}>
          <TextField
            label='name'
            onChange={e => this.setState({ name: e.target.value })}
            margin='normal'
            variant='outlined'
            className={classes.textField}
          />
          <TextField
            label='reason'
            onChange={e => this.setState({ reason: e.target.value })}
            margin='normal'
            variant='outlined'
            className={classes.textField}
          />
          <TextField
            label='id'
            onChange={e => this.setState({ id: e.target.value })}
            margin='normal'
            variant='outlined'
            className={classes.textField}
          />
          <Button
            variant='outlined'
            component='span'
            style={{ margin: 'spacing(1)' }}
            size='large'
            onClick={this.handleSubmit}
            className={classes.textField}
          >
          Upload my reason!!
          </Button>
        </form>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(ReasonForm);
