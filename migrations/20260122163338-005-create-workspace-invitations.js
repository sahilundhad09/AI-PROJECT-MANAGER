"use strict";

module.exports = {
  async up(queryInterface) {
    await queryInterface.sequelize.query(`
      CREATE TABLE IF NOT EXISTS workspace_invitations (
        id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
        workspace_id uuid NOT NULL,
        invited_by uuid NOT NULL,
        email varchar(150) NOT NULL,
        role varchar(20) NOT NULL,
        token text NOT NULL UNIQUE,
        status varchar(20) NOT NULL DEFAULT 'pending',
        expires_at timestamp NOT NULL,
        accepted_at timestamp NULL,
        created_at timestamp NOT NULL DEFAULT now(),

        CONSTRAINT fk_workspace_inv_workspace
          FOREIGN KEY (workspace_id)
          REFERENCES workspaces(id)
          ON DELETE CASCADE
          ON UPDATE CASCADE,

        CONSTRAINT fk_workspace_inv_invited_by
          FOREIGN KEY (invited_by)
          REFERENCES users(id)
          ON DELETE CASCADE
          ON UPDATE CASCADE
      );
    `);

    await queryInterface.sequelize.query(`
      CREATE INDEX IF NOT EXISTS idx_workspace_inv_workspace_id ON workspace_invitations(workspace_id);
    `);

    await queryInterface.sequelize.query(`
      CREATE INDEX IF NOT EXISTS idx_workspace_inv_email ON workspace_invitations(email);
    `);
  },

  async down(queryInterface) {
    await queryInterface.sequelize.query(`
      DROP TABLE IF EXISTS workspace_invitations;
    `);
  },
};
