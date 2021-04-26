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
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
// import MockItems from './MockItems';
// import MockParties from './MockParties';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      party_id: undefined,
      parties: [],
      items: [],
    };
  }

  componentDidMount() {
    this.eventsIndex();
    this.itemsIndex();
  }

  eventsIndex = () => {
    fetch('/parties')
      .then((response) => {
        console.log('eventIndex response', response);
        return response.json();
      })
      .then((partiesArray) => {
        console.log(partiesArray);
        this.setState({ parties: partiesArray });
      })
      .catch((errors) => {
        console.error('index errors:', errors);
      });
  };

  itemsIndex = () => {
    fetch('/items')
      .then((response) => {
        return response.json();
      })
      .then((itemsArray) => {
        this.setState({ items: itemsArray });
      })
      .catch((errors) => {
        console.log('index errors:', errors);
      });
  };

  createNewEvent = (newEvent) => {
    fetch('/parties', {
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
        this.setState({ party_id: response.id });
      })
      .then((payload) => {
        this.eventsIndex();
      })
      .catch((errors) => {
        console.log('create errors:', errors);
      });
  };

  eventShow = (showEvent, id) => {
    fetch(`/parties/${id}`, {
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
    fetch('/items', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ item: newItem }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response);
      })
      .then((payload) => {
        this.itemsIndex();
      })
      .catch((errors) => {
        console.log('create errors:', errors);
      });
  };

  updateItem = (updatedItem, id) => {
    return fetch(`/items/${id}`, {
      body: JSON.stringify(updatedItem),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'PATCH',
    })
      .then((response) => {
        if (response.status === 422) {
          alert('Something is wrong with the edit');
        } else {
          return response.json();
        }
      })
      .then((payload) => {
        this.itemsIndex();
      })
      .catch((errors) => {
        console.log('update errors', errors);
      });
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
    // console.log('app.js',current_user);
    // console.log(this.props.match.params);

    return (
      <Router>
        <Header
          logged_in={logged_in}
          current_user={current_user}
          sign_in_route={sign_in_route}
          sign_out_route={sign_out_route}
          new_user_route={new_user_route}
        />

        {!logged_in && (
          <Switch>
            <Route exact path='/' component={LoggedOutHome} />
            <Route path='/aboutus' component={AboutUs} />
            <Route component={NotFound} />
          </Switch>
        )}
        {logged_in && (
          <Switch>
            <Route
              exact
              path='/'
              render={() => <LoggedInHome current_user={current_user} />}
            />
            <Route path='/aboutus' component={AboutUs} />
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

                return (
                  <EventShow
                    party={singleEvent}
                    id={id}
                    current_user={current_user}
                  />
                );
              }}
            />
            <Route
              path='/itemconfirmation/:id'
              render={(props) => {
                const id = +props.match.params.id;
                const partyItems = this.state.items.filter(
                  (item) => item.party_id === id
                );
                return (
                  <ItemConfirmation
                    items={partyItems}
                    party_id={id}
                    updateItem={this.updateItem}
                    current_user={current_user}
                  />
                );
              }}
            />
            <Route component={NotFound} />
          </Switch>
        )}

        {/* <Redirect to='/notfound'/> */}
        <Footer />
      </Router>
    );
  }
}

export default App;
