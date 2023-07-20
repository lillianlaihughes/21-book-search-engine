import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import Navbar from './components/Navbar';

// FROM CLASS ACTIVITY... Construct our main GraphQL API endpoint {need to add createHttpLink to line 3 import if used}
// const httpLink = createHttpLink({
//   uri: '/graphql',
// });

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    // wrap inside apollo provider
    <ApolloProvider client={client}>
      <Router>
        {/* <div className="flex-column justify-center align-center min-100-vh bg-primary"> */}

        <Navbar />
        <Switch>
          <Route exact path='/' component={SearchBooks} />
          <Route exact path='/saved' component={SavedBooks} />
          <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
        </Switch>

        {/* </div> */}
      </Router>
    </ApolloProvider>
  );
}

export default App;
