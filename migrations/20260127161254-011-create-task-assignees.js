"use strict";

module.exports = {
  async up(queryInterface) {
    await queryInterface.sequelize.query(`
      CREATE TABLE IF NOT EXISTS task_assignees (
        id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
        task_id uuid NOT NULL,
        user_id uuid NOT NULL,
        assigned_by uuid NOT NULL,
        assigned_at timestamp NOT NULL DEFAULT now(),

        CONSTRAINT fk_task_assignees_task FOREIGN KEY (task_id)
          REFERENCES tasks(id) ON DELETE CASCADE,

        CONSTRAINT fk_task_assignees_user FOREIGN KEY (user_id)
          REFERENCES users(id) ON DELETE CASCADE,

        CONSTRAINT fk_task_assignees_assigned_by FOREIGN KEY (assigned_by)
          REFERENCES users(id) ON DELETE CASCADE
      );
    `);

    await queryInterface.sequelize.query(`
      CREATE UNIQUE INDEX uq_task_assignees_task_user ON task_assignees(task_id, user_id);
    `);
  },

  async down(queryInterface) {
    await queryInterface.sequelize.query(`DROP TABLE IF EXISTS task_assignees;`);
  },
};
