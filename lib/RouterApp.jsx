var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;

var RouterApp = React.createClass({
  render: function () {
    return(
      <div>
        <ul>
          <li><Link to="dashboard">Dashboard</Link></li>
          <li><Link to="inbox">Inbox</Link></li>
          <li><Link to="settings">Settings</Link></li>
        </ul>
        <RouteHandler/>
      </div>
    );
  }
});

module.exports = RouterApp;
