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
import MockItems from './MockItems';
import MockParties from './MockParties';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parties: MockParties,
      items: MockItems,
    };
  }

  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route,
    } = this.props;
    // console.log(this.state.parties);
    // console.log(this.state.items);
    // console.log(current_user);
    return (
      <Router>
        <Header
          logged_in={logged_in}
          current_user={current_user}
          sign_in_route={sign_in_route}
          sign_out_route={sign_out_route}
          new_user_route={new_user_route}
        />
        <Switch>
          <Route path='/aboutus' component={AboutUs} />
          {!logged_in && <Route exact path='/' component={LoggedOutHome} />}
          {logged_in && (
            <>
              <Route exact path='/' component={LoggedInHome} />
              <Route
                path='/eventindex'
                render={() => <EventIndex parties={this.state.parties} />}
              />
              <Route path='/eventnew' render={() => <EventNew />} />
              <Route path='/eventshow/:id' render={ (props) => {
                const id = +props.match.params.id
                debugger
                const singleEvent = this.state.parties.find(party => party.id === id)
                return <EventShow party={ singleEvent } current_user={ current_user }/>}
              }/>
            </>
          )}
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
