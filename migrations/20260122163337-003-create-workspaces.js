"use strict";

module.exports = {
  async up(queryInterface) {
    await queryInterface.sequelize.query(`
      CREATE TABLE IF NOT EXISTS workspaces (
        id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
        name varchar(160) NOT NULL,
        slug varchar(120) NOT NULL UNIQUE,
        owner_id uuid NOT NULL,
        plan varchar(50) NOT NULL DEFAULT 'free',
        logo_url text NULL,
        settings jsonb NOT NULL DEFAULT '{}'::jsonb,
        created_at timestamp NOT NULL DEFAULT now(),
        updated_at timestamp NULL,

        CONSTRAINT fk_workspaces_owner
          FOREIGN KEY (owner_id)
          REFERENCES users(id)
          ON DELETE RESTRICT
          ON UPDATE CASCADE
      );
    `);

    await queryInterface.sequelize.query(`
      CREATE INDEX IF NOT EXISTS idx_workspaces_owner_id ON workspaces(owner_id);
    `);
  },

  async down(queryInterface) {
    await queryInterface.sequelize.query(`
      DROP TABLE IF EXISTS workspaces;
    `);
  },
};
