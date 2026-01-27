"use strict";

module.exports = {
  async up(queryInterface) {
    await queryInterface.sequelize.query(`
      CREATE TABLE IF NOT EXISTS ai_task_generations (
        id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
        project_id uuid NOT NULL,
        prompt text NOT NULL,
        output jsonb NOT NULL,
        created_by uuid NOT NULL,
        created_at timestamp NOT NULL DEFAULT now(),

        CONSTRAINT fk_ai_task_gen_project FOREIGN KEY (project_id)
          REFERENCES projects(id) ON DELETE CASCADE,

        CONSTRAINT fk_ai_task_gen_user FOREIGN KEY (created_by)
          REFERENCES users(id) ON DELETE CASCADE
      );
    `);

    await queryInterface.sequelize.query(`CREATE INDEX idx_ai_task_gen_project ON ai_task_generations(project_id);`);
  },

  async down(queryInterface) {
    await queryInterface.sequelize.query(`DROP TABLE IF EXISTS ai_task_generations;`);
  },
};
