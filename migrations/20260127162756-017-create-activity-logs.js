"use strict";

module.exports = {
  async up(queryInterface) {
    await queryInterface.sequelize.query(`
      CREATE TABLE IF NOT EXISTS activity_logs (
        id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
        workspace_id uuid NOT NULL,
        project_id uuid NULL,
        task_id uuid NULL,
        actor_id uuid NOT NULL,
        action varchar(100) NOT NULL,
        meta jsonb NULL,
        created_at timestamp NOT NULL DEFAULT now(),

        CONSTRAINT fk_activity_workspace FOREIGN KEY (workspace_id)
          REFERENCES workspaces(id) ON DELETE CASCADE,

        CONSTRAINT fk_activity_project FOREIGN KEY (project_id)
          REFERENCES projects(id) ON DELETE CASCADE,

        CONSTRAINT fk_activity_task FOREIGN KEY (task_id)
          REFERENCES tasks(id) ON DELETE CASCADE,

        CONSTRAINT fk_activity_actor FOREIGN KEY (actor_id)
          REFERENCES users(id) ON DELETE CASCADE
      );
    `);

    await queryInterface.sequelize.query(`CREATE INDEX idx_activity_workspace_id ON activity_logs(workspace_id);`);
    await queryInterface.sequelize.query(`CREATE INDEX idx_activity_project_id ON activity_logs(project_id);`);
    await queryInterface.sequelize.query(`CREATE INDEX idx_activity_task_id ON activity_logs(task_id);`);
  },

  async down(queryInterface) {
    await queryInterface.sequelize.query(`DROP TABLE IF EXISTS activity_logs;`);
  },
};
