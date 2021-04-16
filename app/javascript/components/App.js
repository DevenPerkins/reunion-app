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
// import MockItems from './MockItems';
// import MockParties from './MockParties';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parties: '',
      items: '',
    };
  }

  componentDidMount() {
    this.eventsIndex();
    this.itemsIndex();
  }

  eventsIndex = () => {
    fetch('http://localhost:3000/parties')
      .then((response) => {
        return response.json();
      })
      .then((partiesArray) => {
        console.log(partiesArray);
        this.setState({ parties: partiesArray });
      })
      .catch((errors) => {
        console.log('index errors:', errors);
      });
  };

  itemsIndex = () => {
    fetch('http://localhost:3000/items')
      .then((response) => {
        return response.json();
      })
      .then((itemsArray) => {
        console.log(itemsArray);
        this.setState({ items: itemsArray });
      })
      .catch((errors) => {
        console.log('index errors:', errors);
      });
  };

  createNewEvent = (newEvent) => {
    fetch('http://localhost:3000/parties', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ party: newEvent }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response);
      })
      .then((payload) => {
        this.eventsIndex();
      })
      .catch((errors) => {
        console.log('create errors:', errors);
      });
  };

  eventShow = (showEvent, id) => {
    fetch(`http://localhost:3000/parties/${id}`, {
      body: JSON.stringify(showEvent),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((payload) => {
        this.eventsIndex();
      })
      .catch((errors) => {
        console.log('show errors:', errors);
      });
  };

  createNewItem = (newItem) => {
    console.log(newItem);
  };

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
              <Route
                path='/eventnew'
                render={() => (
                  <EventNew
                    createNewEvent={this.createNewEvent}
                    current_user={current_user}
                  />
                )}
              />
              <Route
                path='/itemnew'
                render={() => (
                  <ItemNew
                    items={this.state.items}
                    createNewItem={this.createNewItem}
                    party_id={this.state.party_id}
                  />
                )}
              />
              <Route
                path='/eventshow/:id'
                render={(props) => {
                  const id = +props.match.params.id;
                  const singleEvent = this.state.parties.find(
                    (party) => party.id === id
                  );
                  const partyItems = this.state.items.filter(
                    (items) => items.party_id === id
                  );
                  return (
                    <EventShow
                      party={singleEvent}
                      items={partyItems}
                      current_user={current_user}
                    />
                  );
                }}
              />
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
