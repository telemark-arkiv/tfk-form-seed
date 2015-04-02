'use strict';

var React = require('react');

var App = React.createClass({
  render: function(){
    return (
      <h1>Klage på eksamensresultat</h1>
    );
  }
});

React.render(
  <App />,
  document.getElementById('app')
)