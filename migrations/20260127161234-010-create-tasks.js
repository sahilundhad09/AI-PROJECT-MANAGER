"use strict";

module.exports = {
  async up(queryInterface) {
    await queryInterface.sequelize.query(`
      CREATE TABLE IF NOT EXISTS tasks (
        id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
        project_id uuid NOT NULL,
        status_id uuid NOT NULL,
        title varchar(220) NOT NULL,
        description text NULL,
        priority varchar(10) NOT NULL DEFAULT 'medium',
        task_type varchar(20) NOT NULL DEFAULT 'task',
        due_date timestamp NULL,
        start_date timestamp NULL,
        estimated_hours numeric(6,2) NULL,
        actual_hours numeric(6,2) NULL,
        order_no int DEFAULT 0,
        parent_task_id uuid NULL,
        created_by uuid NOT NULL,
        is_archived boolean DEFAULT false,
        completed_at timestamp NULL,
        created_at timestamp NOT NULL DEFAULT now(),
        updated_at timestamp NULL,

        CONSTRAINT fk_tasks_project FOREIGN KEY (project_id)
          REFERENCES projects(id) ON DELETE CASCADE ON UPDATE CASCADE,

        CONSTRAINT fk_tasks_status FOREIGN KEY (status_id)
          REFERENCES task_statuses(id) ON DELETE RESTRICT ON UPDATE CASCADE,

        CONSTRAINT fk_tasks_parent FOREIGN KEY (parent_task_id)
          REFERENCES tasks(id) ON DELETE SET NULL ON UPDATE CASCADE,

        CONSTRAINT fk_tasks_creator FOREIGN KEY (created_by)
          REFERENCES users(id) ON DELETE RESTRICT ON UPDATE CASCADE
      );
    `);

    await queryInterface.sequelize.query(`CREATE INDEX idx_tasks_project_id ON tasks(project_id);`);
    await queryInterface.sequelize.query(`CREATE INDEX idx_tasks_status_id ON tasks(status_id);`);
    await queryInterface.sequelize.query(`CREATE INDEX idx_tasks_parent_task_id ON tasks(parent_task_id);`);
  },

  async down(queryInterface) {
    await queryInterface.sequelize.query(`DROP TABLE IF EXISTS tasks;`);
  },
};
