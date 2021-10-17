'use strict';
const { sanitizeEntity } = require('strapi-utils');

module.exports = {

    async random (ctx) {

        const randomDisquette = await strapi.services.disquettes.random();
        return sanitizeEntity(randomDisquette, { model: strapi.models.disquettes });
    }
    
};
