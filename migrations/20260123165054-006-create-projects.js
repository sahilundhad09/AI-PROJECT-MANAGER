"use strict";

module.exports = {
  async up(queryInterface) {
    await queryInterface.sequelize.query(`
      CREATE TABLE IF NOT EXISTS projects (
        id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
        workspace_id uuid NOT NULL,
        name varchar(180) NOT NULL,
        description text NULL,
        status varchar(20) NOT NULL DEFAULT 'active',
        priority varchar(10) NOT NULL DEFAULT 'medium',
        start_date date NULL,
        due_date date NULL,
        created_by uuid NOT NULL,
        archived_at timestamp NULL,
        created_at timestamp NOT NULL DEFAULT now(),
        updated_at timestamp NULL,

        CONSTRAINT fk_projects_workspace
          FOREIGN KEY (workspace_id)
          REFERENCES workspaces(id)
          ON DELETE CASCADE
          ON UPDATE CASCADE,

        CONSTRAINT fk_projects_created_by
          FOREIGN KEY (created_by)
          REFERENCES users(id)
          ON DELETE RESTRICT
          ON UPDATE CASCADE
      );
    `);

    await queryInterface.sequelize.query(`
      CREATE INDEX IF NOT EXISTS idx_projects_workspace_id ON projects(workspace_id);
    `);

    await queryInterface.sequelize.query(`
      CREATE INDEX IF NOT EXISTS idx_projects_created_by ON projects(created_by);
    `);

    await queryInterface.sequelize.query(`
      CREATE INDEX IF NOT EXISTS idx_projects_status ON projects(status);
    `);
  },

  async down(queryInterface) {
    await queryInterface.sequelize.query(`
      DROP TABLE IF EXISTS projects;
    `);
  },
};
