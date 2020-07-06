const path = require('path');

module.exports = {
  resolve: {
    alias: {
      Sagas: path.resolve(__dirname, './js/sagas'),
      Store: path.resolve(__dirname, './js/store'),
      Services: path.resolve(__dirname, './js/services'),
    },
  },
};