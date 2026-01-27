"use strict";

module.exports = {
  async up(queryInterface) {
    await queryInterface.sequelize.query(`
      CREATE TABLE IF NOT EXISTS notifications (
        id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
        user_id uuid NOT NULL,
        type varchar(50) NOT NULL,
        title varchar(150) NOT NULL,
        message text,
        meta jsonb,
        is_read boolean DEFAULT false,
        created_at timestamp NOT NULL DEFAULT now(),

        CONSTRAINT fk_notifications_user FOREIGN KEY (user_id)
          REFERENCES users(id) ON DELETE CASCADE
      );
    `);

    await queryInterface.sequelize.query(`CREATE INDEX idx_notifications_user_id ON notifications(user_id);`);
    await queryInterface.sequelize.query(`CREATE INDEX idx_notifications_is_read ON notifications(is_read);`);
  },

  async down(queryInterface) {
    await queryInterface.sequelize.query(`DROP TABLE IF EXISTS notifications;`);
  },
};
