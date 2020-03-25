'use strict';

/**
 * Servicepage.js controller
 *
 * @description: A set of functions called "actions" for managing `Servicepage`.
 */

module.exports = {

  /**
   * Retrieve servicepage records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.servicepage.search(ctx.query);
    } else {
      return strapi.services.servicepage.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a servicepage record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.servicepage.fetch(ctx.params);
  },

  /**
   * Count servicepage records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.servicepage.count(ctx.query, populate);
  },

  /**
   * Create a/an servicepage record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.servicepage.add(ctx.request.body);
  },

  /**
   * Update a/an servicepage record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.servicepage.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an servicepage record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.servicepage.remove(ctx.params);
  }
};
