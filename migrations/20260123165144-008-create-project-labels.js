"use strict";

module.exports = {
  async up(queryInterface) {
    await queryInterface.sequelize.query(`
      CREATE TABLE IF NOT EXISTS project_labels (
        id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
        project_id uuid NOT NULL,
        name varchar(60) NOT NULL,
        color varchar(30) NULL,

        CONSTRAINT fk_project_labels_project
          FOREIGN KEY (project_id)
          REFERENCES projects(id)
          ON DELETE CASCADE
          ON UPDATE CASCADE
      );
    `);

    await queryInterface.sequelize.query(`
      CREATE INDEX IF NOT EXISTS idx_project_labels_project_id ON project_labels(project_id);
    `);

    await queryInterface.sequelize.query(`
      CREATE INDEX IF NOT EXISTS idx_project_labels_name ON project_labels(name);
    `);
  },

  async down(queryInterface) {
    await queryInterface.sequelize.query(`
      DROP TABLE IF EXISTS project_labels;
    `);
  },
};
