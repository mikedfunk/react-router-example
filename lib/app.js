var React = require("react");
var Router = require("react-router");
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var RouteHandler = Router.RouteHandler;
var routes = require('./Routes.jsx!');

Router.run(routes, function (Handler) {
  React.render(React.createElement(Handler), document.getElementById("app"));
});
