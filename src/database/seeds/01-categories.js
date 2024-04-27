const { toSlug } = require('../../helpers');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('categories').del();
  await knex('categories').insert([
    { name: 'Programming', slug: toSlug('Programming') },
    { name: 'Web Design', slug: toSlug('Web Design') },
    { name: 'Personal', slug: toSlug('Personal') },
  ]);
};
