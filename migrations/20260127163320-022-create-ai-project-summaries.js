"use strict";

module.exports = {
  async up(queryInterface) {
    await queryInterface.sequelize.query(`
      CREATE TABLE IF NOT EXISTS ai_project_summaries (
        id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
        project_id uuid NOT NULL,
        summary_type varchar(50) NOT NULL,
        summary text NOT NULL,
        created_by uuid NOT NULL,
        created_at timestamp NOT NULL DEFAULT now(),

        CONSTRAINT fk_ai_project_sum_project FOREIGN KEY (project_id)
          REFERENCES projects(id) ON DELETE CASCADE,

        CONSTRAINT fk_ai_project_sum_user FOREIGN KEY (created_by)
          REFERENCES users(id) ON DELETE CASCADE
      );
    `);

    await queryInterface.sequelize.query(`CREATE INDEX idx_ai_project_sum_project ON ai_project_summaries(project_id);`);
  },

  async down(queryInterface) {
    await queryInterface.sequelize.query(`DROP TABLE IF EXISTS ai_project_summaries;`);
  },
};
