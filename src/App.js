import React from 'react';
import './App.css';
import Post from './Component/Post/Post';
import Postdetail from './Component/Postdetail/Postdetail';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Nomatch from './Component/Nomatch/Nomatch';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/post">
            <Post></Post>
          </Route>
          <Route path="/postdetail/:postId">
            <Postdetail></Postdetail>
          </Route>
          <Route exact path="/">
              <Post></Post>
          </Route>
          <Route>
            <Nomatch></Nomatch>
          </Route>
        </Switch>
      
      
    </Router>
      
    </div>
  );
}

export default App;
