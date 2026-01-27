"use strict";

module.exports = {
  async up(queryInterface) {
    await queryInterface.sequelize.query(`
      CREATE TABLE IF NOT EXISTS ai_chat_messages (
        id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
        session_id uuid NOT NULL,
        role varchar(20) NOT NULL,
        content text,
        tool_name varchar(80),
        tool_payload jsonb,
        created_at timestamp NOT NULL DEFAULT now(),

        CONSTRAINT fk_ai_chat_messages_session FOREIGN KEY (session_id)
          REFERENCES ai_chat_sessions(id) ON DELETE CASCADE
      );
    `);

    await queryInterface.sequelize.query(`CREATE INDEX idx_ai_chat_messages_session ON ai_chat_messages(session_id);`);
  },

  async down(queryInterface) {
    await queryInterface.sequelize.query(`DROP TABLE IF EXISTS ai_chat_messages;`);
  },
};
