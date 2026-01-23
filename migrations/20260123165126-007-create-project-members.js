"use strict";

module.exports = {
  async up(queryInterface) {
    await queryInterface.sequelize.query(`
      CREATE TABLE IF NOT EXISTS project_members (
        id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
        project_id uuid NOT NULL,
        workspace_member_id uuid NOT NULL,
        project_role varchar(20) NOT NULL DEFAULT 'member',
        added_at timestamp NOT NULL DEFAULT now(),

        CONSTRAINT fk_project_members_project
          FOREIGN KEY (project_id)
          REFERENCES projects(id)
          ON DELETE CASCADE
          ON UPDATE CASCADE,

        CONSTRAINT fk_project_members_workspace_member
          FOREIGN KEY (workspace_member_id)
          REFERENCES workspace_members(id)
          ON DELETE CASCADE
          ON UPDATE CASCADE
      );
    `);

    await queryInterface.sequelize.query(`
      ALTER TABLE project_members
      ADD CONSTRAINT uq_project_members_project_workspace_member
      UNIQUE (project_id, workspace_member_id);
    `);

    await queryInterface.sequelize.query(`
      CREATE INDEX IF NOT EXISTS idx_project_members_project_id ON project_members(project_id);
    `);

    await queryInterface.sequelize.query(`
      CREATE INDEX IF NOT EXISTS idx_project_members_workspace_member_id ON project_members(workspace_member_id);
    `);
  },

  async down(queryInterface) {
    await queryInterface.sequelize.query(`
      DROP TABLE IF EXISTS project_members;
    `);
  },
};
