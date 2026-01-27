"use strict";

module.exports = {
  async up(queryInterface) {
    await queryInterface.sequelize.query(`
      CREATE TABLE IF NOT EXISTS task_statuses (
        id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
        project_id uuid NOT NULL,
        name varchar(50) NOT NULL,
        order_no int NOT NULL,
        is_default boolean NOT NULL DEFAULT false,
        created_at timestamp NOT NULL DEFAULT now(),

        CONSTRAINT fk_task_statuses_project
          FOREIGN KEY (project_id)
          REFERENCES projects(id)
          ON DELETE CASCADE
          ON UPDATE CASCADE
      );
    `);

    await queryInterface.sequelize.query(`
      CREATE UNIQUE INDEX uq_task_statuses_project_name ON task_statuses(project_id, name);
    `);
  },

  async down(queryInterface) {
    await queryInterface.sequelize.query(`DROP TABLE IF EXISTS task_statuses;`);
  },
};
