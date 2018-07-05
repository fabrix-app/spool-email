const Model = require('@fabrix/fabrix/dist/common').FabrixModel
/**
 * @module Email
 * @description Email
 */
module.exports = class Email extends Model {

  static config (app, Datastore) {
    return {
      options: {
        underscored: true
      }
    }
  }

  static schema (app, Datastore) {
    return {
      // The type of the email
      type: {
        type: Datastore.STRING
      },
      // The template to use for the email
      template: {
        type: Datastore.TEXT
      },
      // The language the template is in
      lang: {
        type: Datastore.STRING,
        defaultValue: 'EN'
      }
    }
  }

  /**
   * Associate the Model (Used for Sequelize)
   * @param models
   */
  // associate(models) {
  //
  // }
}
