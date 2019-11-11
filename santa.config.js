module.exports = {
  people: ['Mauri', 'Bea', 'Elvino', 'Sylvie', 'Irene', 'Matteo', 'Cédric', 'Tämi'],
  //meaning: no secret santa between Tämi <-> Cédric etc..
  blacklist: {
    'Mauri': 'Bea',
    'Irene': 'Matteo',
    'Elvino': 'Sylvie',
    'Tämi': 'Cédric'
  },
  baseUrl: 'https://wichteln.cederigo.now.sh/'
  // baseUrl: 'http://localhost:5000/'
};
