import React, { Component } from 'react';
import ReasonForm from '../reason_form';
import Reasons from '../reasons';

// Primary component for the backend/API. This parent component will store the GET method, update its own state and pass as props to child components for render
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      isLoaded: false,
      items: []
    };
  }
  render() {
    return (
      <div>
        {/* child component #1 - for form inputs and POST to db, GET method is pass as a prop to child component but binded to this component */}
        <ReasonForm getInfo={this.getInfo.bind(this)} />
        {/* child component #2 - List of reasons, GET method and reason items is pass as a prop to child component */}
        <Reasons
          getInfo={this.getInfo.bind(this)}
          infos={this.state.items}
        />
      </div>

    );
  }
  // Call GET method after components is loaded to set state for list of reasons
  componentDidMount() {
    this.getInfo();
  }
  // GET method 
  getInfo = () => {
    fetch("/reasons")
      .then(response => response.json())
      .then(data =>
        this.setState({
          isLoaded: true,
          items: data
        })
      );
  }
}
export default App;
