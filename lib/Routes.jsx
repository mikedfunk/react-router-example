// get react and router stuff
var React = require("react");
var Router = require("react-router");
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

// get our application react components
var App = require('./RouterApp.jsx!');
var Dashboard = require('./Dashboard.jsx!');
var Inbox = require('./Inbox.jsx!');
var Settings = require('./Settings.jsx!');

// set up our route names, paths, hierarchy, and react component handlers all
// at once. The hierarchy is cool because if you have one way deep it will
// also render all of its parents.
module.exports = (
  <Route name="app" path="/" handler={App}>
    <Route name="inbox" handler={Inbox}/>
    <Route name="dashboard" handler={Dashboard}/>
    <Route name="settings" handler={Settings}/>
    <DefaultRoute handler={Dashboard}/>
  </Route>
);
