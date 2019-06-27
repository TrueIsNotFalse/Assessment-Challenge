import React, { Component } from 'react';
import ReasonItem from './reason_item';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

// class component for all all reasons list
class Reasons extends Component {
  constructor (props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  // method to delete when user clicks the delete icon on any list item
  handleDelete (id) {
    fetch('/reasons/' + id, {
      method: 'DELETE'
    })
      .then(results => {
        return results.json();
      })
      .then(data => {
        this.props.getInfo();
      });
  }
  render () {
    return this.props.infos.map((info, index) => (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth='lg'>
          <List
            dense
          >
            <ReasonItem handleDelete={this.handleDelete} info={info} />
          </List>
        </Container>
      </React.Fragment>
    ));
  }
}

// PropTypes
Reasons.propTypes = {
  infos: PropTypes.array.isRequired
};
export default Reasons;
