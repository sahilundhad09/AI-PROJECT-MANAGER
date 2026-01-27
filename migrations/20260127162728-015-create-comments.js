"use strict";

module.exports = {
  async up(queryInterface) {
    await queryInterface.sequelize.query(`
      CREATE TABLE IF NOT EXISTS comments (
        id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
        task_id uuid NOT NULL,
        user_id uuid NOT NULL,
        message text NOT NULL,
        parent_comment_id uuid NULL,
        created_at timestamp NOT NULL DEFAULT now(),

        CONSTRAINT fk_comments_task FOREIGN KEY (task_id)
          REFERENCES tasks(id) ON DELETE CASCADE,

        CONSTRAINT fk_comments_user FOREIGN KEY (user_id)
          REFERENCES users(id) ON DELETE CASCADE,

        CONSTRAINT fk_comments_parent FOREIGN KEY (parent_comment_id)
          REFERENCES comments(id) ON DELETE CASCADE
      );
    `);

    await queryInterface.sequelize.query(`CREATE INDEX idx_comments_task_id ON comments(task_id);`);
    await queryInterface.sequelize.query(`CREATE INDEX idx_comments_user_id ON comments(user_id);`);
  },

  async down(queryInterface) {
    await queryInterface.sequelize.query(`DROP TABLE IF EXISTS comments;`);
  },
};
