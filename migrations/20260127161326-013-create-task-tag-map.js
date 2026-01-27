"use strict";

module.exports = {
  async up(queryInterface) {
    await queryInterface.sequelize.query(`
      CREATE TABLE IF NOT EXISTS task_tag_map (
        id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
        task_id uuid NOT NULL,
        tag_id uuid NOT NULL,

        CONSTRAINT fk_task_tag_map_task FOREIGN KEY (task_id)
          REFERENCES tasks(id) ON DELETE CASCADE,

        CONSTRAINT fk_task_tag_map_tag FOREIGN KEY (tag_id)
          REFERENCES task_tags(id) ON DELETE CASCADE
      );
    `);

    await queryInterface.sequelize.query(`
      CREATE UNIQUE INDEX uq_task_tag_map ON task_tag_map(task_id, tag_id);
    `);
  },

  async down(queryInterface) {
    await queryInterface.sequelize.query(`DROP TABLE IF EXISTS task_tag_map;`);
  },
};
