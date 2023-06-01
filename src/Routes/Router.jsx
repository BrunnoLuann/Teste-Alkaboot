import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserList from '../Pages/UserList/UserListPage';
import UserDetails from '../Pages/UserDetails/UserDetailsPage';
import PostList from '../Pages/PostList/PostListPage';
import PostComments from '../Pages/PostComments/PostCommentsPage';
import Header from '../Components/Header/Header';

function Routes() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={PostList} />
        <Route exact path="/posts/:id/comments" component={PostComments} />
        <Route exact path="/users" component={UserList} />
        <Route exact path="/users/:id" component={UserDetails} />
      </Switch>
    </Router>
  );
}

export default Routes;


