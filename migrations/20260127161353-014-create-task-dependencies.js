"use strict";

module.exports = {
  async up(queryInterface) {
    await queryInterface.sequelize.query(`
      CREATE TABLE IF NOT EXISTS task_dependencies (
        id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
        task_id uuid NOT NULL,
        depends_on_task_id uuid NOT NULL,
        created_at timestamp NOT NULL DEFAULT now(),

        CONSTRAINT fk_task_dep_task FOREIGN KEY (task_id)
          REFERENCES tasks(id) ON DELETE CASCADE,

        CONSTRAINT fk_task_dep_depends_on FOREIGN KEY (depends_on_task_id)
          REFERENCES tasks(id) ON DELETE CASCADE
      );
    `);

    await queryInterface.sequelize.query(`
      CREATE UNIQUE INDEX uq_task_dependencies ON task_dependencies(task_id, depends_on_task_id);
    `);
  },

  async down(queryInterface) {
    await queryInterface.sequelize.query(`DROP TABLE IF EXISTS task_dependencies;`);
  },
};
