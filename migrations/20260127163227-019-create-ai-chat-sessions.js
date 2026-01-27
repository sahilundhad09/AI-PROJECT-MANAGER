"use strict";

module.exports = {
  async up(queryInterface) {
    await queryInterface.sequelize.query(`
      CREATE TABLE IF NOT EXISTS ai_chat_sessions (
        id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
        workspace_id uuid NOT NULL,
        project_id uuid NULL,
        created_by uuid NOT NULL,
        title varchar(150),
        created_at timestamp NOT NULL DEFAULT now(),

        CONSTRAINT fk_ai_chat_sessions_workspace FOREIGN KEY (workspace_id)
          REFERENCES workspaces(id) ON DELETE CASCADE,

        CONSTRAINT fk_ai_chat_sessions_project FOREIGN KEY (project_id)
          REFERENCES projects(id) ON DELETE CASCADE,

        CONSTRAINT fk_ai_chat_sessions_user FOREIGN KEY (created_by)
          REFERENCES users(id) ON DELETE CASCADE
      );
    `);

    await queryInterface.sequelize.query(`CREATE INDEX idx_ai_chat_sessions_workspace ON ai_chat_sessions(workspace_id);`);
  },

  async down(queryInterface) {
    await queryInterface.sequelize.query(`DROP TABLE IF EXISTS ai_chat_sessions;`);
  },
};
