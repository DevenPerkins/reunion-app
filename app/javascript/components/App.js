import React from 'react';
import PropTypes from 'prop-types';
import AboutUs from './pages/AboutUs';
import EventEdit from './pages/EventEdit';
import EventIndex from './pages/EventIndex';
import EventNew from './pages/EventNew';
import EventShow from './pages/EventShow';
import ItemConfirmation from './pages/ItemConfirmation';
import ItemNew from './pages/ItemNew';
import LoggedInHome from './pages/LoggedInHome';
import LoggedOutHome from './pages/LoggedOutHome';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends React.Component {
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route,
    } = this.props;
    return (
      <Router>
        <Header />
        <h1>Hello Reunion!</h1>
        <Switch>
          {!logged_in && <Route path='/' component={LoggedOutHome} />}
          {logged_in && <Route exact path='/' component={LoggedInHome} />}
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
