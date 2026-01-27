"use strict";

module.exports = {
  async up(queryInterface) {
    await queryInterface.sequelize.query(`
      CREATE TABLE IF NOT EXISTS attachments (
        id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
        task_id uuid NOT NULL,
        uploaded_by uuid NOT NULL,
        file_url text NOT NULL,
        file_name varchar(255),
        file_size int,
        mime_type varchar(100),
        created_at timestamp NOT NULL DEFAULT now(),

        CONSTRAINT fk_attachments_task FOREIGN KEY (task_id)
          REFERENCES tasks(id) ON DELETE CASCADE,

        CONSTRAINT fk_attachments_user FOREIGN KEY (uploaded_by)
          REFERENCES users(id) ON DELETE CASCADE
      );
    `);

    await queryInterface.sequelize.query(`CREATE INDEX idx_attachments_task_id ON attachments(task_id);`);
  },

  async down(queryInterface) {
    await queryInterface.sequelize.query(`DROP TABLE IF EXISTS attachments;`);
  },
};
