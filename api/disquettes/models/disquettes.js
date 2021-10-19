'use strict';
const { v4: uuidv4 } = require('uuid');
module.exports = {
    lifecycles: {
      beforeCreate(data) {
        data.uuid = uuidv4();
      },
      afterCreate(result) {},
    },
  };