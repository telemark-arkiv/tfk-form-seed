'use strict';

var config = {
  formId: 'tkf-karakterklage',
  formName: 'Klage på karakter',
  initialState: {
    personnummer: '',
    navn: '',
    adresse: '',
    klagegrunnlag: '',
    fagkode: '',
    fag: '',
    dato: '',
    skolenavn: '',
    skoleadresse: '',
    skoletelefon: '',
    skolemail: ''
  },
  SERVER_PORT: 3000
};

module.exports = config;