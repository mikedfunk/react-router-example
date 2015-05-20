var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;

// use the Link element to link to each route. Main element is the RouteHandler
// which will use the route nesting to display the relevant handler and parents
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
