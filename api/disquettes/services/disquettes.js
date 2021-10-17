'use strict';

module.exports = {

    async random () {

        const results = await strapi.query('disquettes').find({ confirmed: true });
        return results[Math.floor(Math.random() * results.length)];
    }
};
