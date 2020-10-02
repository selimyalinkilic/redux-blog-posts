import React from "react";
import Header from "./components/Header/Header";
import Home from "./Pages/Home/Home";
import Posts from "./Pages/Posts/Posts";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import PostDetail from "./Pages/PostDetail/PostDetail";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/posts" component={Posts} />
          <Route path="/post/:id" component={PostDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
