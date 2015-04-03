'use strict';

var React = require('react');

var App = React.createClass({
  render: function(){
    return (
      <div>
      <h1>Klage på karakter</h1>
        <form>
          <fieldset>
            <legend>Personalia</legend>
          <label htmlFor="personnummer">Personnummer (11 siffer)</label>
          <input type="text" name="personnummer" placeholder="18119169298" id="personnummer" />
            <label htmlFor="navn">Navn</label>
            <input type="text" name="navn" placeholder="Fornavn, mellomnavn og etternavn" id="navn" />
            <label htmlFor="adresse">Adresse</label>
            <input type="text" name="adresse" placeholder="Gateadresse, postnummer og poststed" id="adresse" />
          </fieldset>
          <fieldset>
            <legend>Klagen gjelder</legend>
            <select name="klagegrunnlag">
              <option value="Eksamenskarakter skriftlig">Eksamenskarakter skriftlig</option>
              <option value="Muntlig eksamen">Muntlig eksamen</option>
              <option value="Standpunktkarakter">Standpunktkarakter</option>
              <option value="Karakter ved lokalgitt eksamen">Karakter ved lokalgitt eksamen</option>
            </select>
          </fieldset>
          <fieldset>
            <legend>Faginformasjon</legend>
            <label htmlFor="fagkode">Fagkode</label>
            <input type="text" name="fagkode" placeholder="Fagkode" id="fagkode" />
            <label htmlFor="fag">Fag</label>
            <input type="text" name="fag" placeholder="Fag" id="fag" />
            <label htmlFor="fagkode">Fagkode</label>
            <input type="text" name="fagkode" placeholder="Fagkode" id="fagkode" />
            <label htmlFor="dato">Eksamensdato</label>
            <input type="date" name="dato" placeholder="Eksamensdato" id="dato" />
          </fieldset>
          <fieldset>
            <legend>Skoleinformasjon</legend>
            <label htmlFor="skolenavn">Skolens navn</label>
            <input type="text" name="skolenavn" placeholder="Skolens navn" id="skolenavn" />
            <label htmlFor="skoleadresse">Skolens adresse</label>
            <input type="text" name="skoleadresse" placeholder="Skolens adresse" id="skoleadresse" />
            <label htmlFor="skoletelefon">Skolens telefonnummer</label>
            <input type="text" name="skoletelefon" placeholder="Skolens telefonnummer" id="skoletelefon" />
            <label htmlFor="skolemail">Skolens e-postadresse</label>
            <input type="text" name="skolemail" placeholder="skolemail" id="skolemail" />
          </fieldset>
          <button className="btn">Send klage</button>
        </form>
      </div>
    );
  }
});

React.render(
  <App />,
  document.getElementById('app')
);