'use strict';

var React = require('react');

var App = React.createClass({
  render: function(){
    return (
      <div>
      <h1>Klage på eksamensresultat</h1>
        <form>
          <fieldset>
          <label htmlFor="personnummer">Personnummer (11 siffer)</label>
          <input type="text" name="personnummer" placeholder="18119169298" id="personnummer" />
          </fieldset>
        </form>
      </div>
    );
  }
});

React.render(
  <App />,
  document.getElementById('app')
)