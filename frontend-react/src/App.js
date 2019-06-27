import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import ButtonAppBar from './components/main_components/header';
import StickyFooter from './components/main_components/footer';
import MyDocument from './components/main_components/resume';
import MainReason from './components/main_components/main_reason';
import TechStack from './components/techstack';
import Fade from '@material-ui/core/Fade';
import APIdoc from './components/API_doc';
import About from './components/about';
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render () {
    return (
      <div className='App' style={{ background: '#121212' }}>
        <header className='App-header'>
          {/* router for links to primary components in the left side NavBar */}
          <Router>
            <ButtonAppBar />
            <div>
              <Fade>
                <Switch>
                  <Redirect exact from='/' to='/home' />
                  <Route exact path='/home' component={About} />
                  <Route exact path='/resume' component={MyDocument} />
                  <Redirect from='/berkshirehathawayassessment' to='/berkshire/assessment' />
                  <Route
                    exact
                    path='/berkshire/assessment'
                    component={MainReason}
                  />
                  <Route exact path='/techstacks' component={TechStack} />
                  <Redirect from='/apidocumentation' to='api/documentation' />
                  <Route exact path='/api/documentation' component={APIdoc} />
                </Switch>
              </Fade>
            </div>
          </Router>
        </header>
        <footer className='App-footer'>
          <StickyFooter />
        </footer>
      </div>
    );
  }
}
export default App;
