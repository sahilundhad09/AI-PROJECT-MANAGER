"use strict";

module.exports = {
  async up(queryInterface) {
    await queryInterface.sequelize.query(`
      CREATE TABLE IF NOT EXISTS task_tags (
        id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
        project_id uuid NOT NULL,
        name varchar(50) NOT NULL,

        CONSTRAINT fk_task_tags_project FOREIGN KEY (project_id)
          REFERENCES projects(id) ON DELETE CASCADE
      );
    `);

    await queryInterface.sequelize.query(`
      CREATE UNIQUE INDEX uq_task_tags_project_name ON task_tags(project_id, name);
    `);
  },

  async down(queryInterface) {
    await queryInterface.sequelize.query(`DROP TABLE IF EXISTS task_tags;`);
  },
};
