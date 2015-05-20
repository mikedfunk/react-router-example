var React = require("react");
var Router = require("react-router");
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var RouteHandler = Router.RouteHandler;
var routes = require('./Routes.jsx!');

// wrap react.render() in router.run() so the root element is now the route 
// handler instead of the base app
Router.run(routes, function (Handler) {
  React.render(React.createElement(Handler), document.getElementById("app"));
});
