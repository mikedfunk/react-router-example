# React router example
Very simple example using [react](https://facebook.github.io/react/), [react-router](https://github.com/rackt/react-router), and [jspm](http://jspm.io).

## Setup
1. `npm install`
2. `./node_modules/.bin/jspm install`

## Using this combination elsewhere
1. `npm install --save-dev jspm`
2. `./node_modules/.bin/jspm init`
3. `./node_modules/.bin/jspm install jsx=github:zcregan/plugin-babeljsx`. Very important. If you use the [other jsx loader plugin](https://github.com/floatdrop/plugin-jsx) you will run into [an issue with multiple instances of react](https://github.com/rackt/react-router/issues/1003#issuecomment-103960610). This plugin allows you to require react components with `require('./MyComponent.jsx!')`
4. `./node_modules/.bin/jspm install react react-router`
5. In your html file, add system.js and config.js in script tags. Then import your main file with System. [Example](https://github.com/mikedfunk/react-router-example/blob/master/index.html#L9-L13)
6. Create your react components and take note of the hierarchy
7. Instead of rendering components inside eachother, you define the entire hierarchy in your routes definition including urls and handlers. This allows urls to go to matching elements, even deep elements in the hierarchy. Deep elements will also render all of their parents. [Example](https://github.com/mikedfunk/react-router-example/blob/master/lib/Routes.jsx#L16-L23)
8. Wrap `React.render()` in `Router.run()` to send `Handler` as the main component of `React.render()`. This way the router can respond to url changes. [Example](https://github.com/mikedfunk/react-router-example/blob/master/lib/app.js#L10-L12)
9. When linking to routes, you can use the `Link` element to link to named routes. [Example](https://github.com/mikedfunk/react-router-example/blob/master/lib/RouterApp.jsx#L13-L15)
