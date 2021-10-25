'use strict';
const { sanitizeEntity, parseMultipartData } = require('strapi-utils');
module.exports = {

    async random (ctx) {
        const randomDisquette = await strapi.services.disquettes.random();
        return sanitizeEntity(randomDisquette, { model: strapi.models.disquettes });
    },
    async create(ctx) {
        let entity;
        if (ctx.is('multipart')) {
          const { data, files } = parseMultipartData(ctx);
          data.creator = ctx.state.user.id;
          entity = await strapi.services.disquettes.create(data, { files });
        } else {
          ctx.request.body.creator = ctx.state.user.id;
          entity = await strapi.services.disquettes.create(ctx.request.body);
        }
        return sanitizeEntity(entity, { model: strapi.models.disquettes });
      },
};
