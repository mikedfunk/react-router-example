var React = require("react");
var Router = require("react-router");
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var Dashboard = require('./Dashboard.jsx!');
var Inbox = require('./Inbox.jsx!');
var App = require('./RouterApp.jsx!');
var Settings = require('./Settings.jsx!');

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="inbox" handler={Inbox}/>
    <Route name="dashboard" handler={Dashboard}/>
    <Route name="settings" handler={Settings}/>
    <DefaultRoute handler={Dashboard}/>
  </Route>
);

module.exports = routes;
