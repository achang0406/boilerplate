const path = require('path');

module.exports = {
  resolve: {
    alias: {
      Sagas: path.resolve(process.cwd(), './client/js/sagas'),
      Store: path.resolve(process.cwd(), './client/js/store'),
      Services: path.resolve(process.cwd(), './client/js/services'),
    },
  },
};