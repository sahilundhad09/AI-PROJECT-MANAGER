"use strict";

module.exports = {
  async up(queryInterface) {
    await queryInterface.sequelize.query(`
      CREATE TABLE IF NOT EXISTS ai_tool_logs (
        id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
        session_id uuid NOT NULL,
        tool_name varchar(100) NOT NULL,
        input jsonb,
        output jsonb,
        success boolean DEFAULT true,
        created_at timestamp NOT NULL DEFAULT now(),

        CONSTRAINT fk_ai_tool_logs_session FOREIGN KEY (session_id)
          REFERENCES ai_chat_sessions(id) ON DELETE CASCADE
      );
    `);

    await queryInterface.sequelize.query(`CREATE INDEX idx_ai_tool_logs_session ON ai_tool_logs(session_id);`);
  },

  async down(queryInterface) {
    await queryInterface.sequelize.query(`DROP TABLE IF EXISTS ai_tool_logs;`);
  },
};
