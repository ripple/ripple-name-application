var db            = require('./sequelize.js')
var Sequelize     = require('sequelize');

var AdminUsers = db.define('applications',
  {
    id:             { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },

    full_name:      { type: Sequelize.STRING,
                      validate: {
                        notNull: true,
                        notEmpty: true
                      }
                    },

    // not required
    organization:   { type: Sequelize.STRING, allowNull: true,
                      validate: {
                      }
                    },

    email:          { type: Sequelize.STRING,
                      validate: {
                        notNull: true,
                        notEmpty: true,
                        isEmail: true
                      }
                    },

    phone:          { type: Sequelize.STRING,
                      validate: {
                        notNull: true,
                        notEmpty: true,
                        isNumeric: true
                      }
                    },

    // not required
    website:        { type: Sequelize.STRING, allowNull: true,
                      validate: {
                        isUrl: true
                      }
                    },

    ripple_address: { type: Sequelize.STRING,
                      validate: {
                        notNull: true,
                        notEmpty: true
                      }
                    },

    ripple_name:    { type: Sequelize.STRING,
                      validate: {
                        notNull: true,
                        notEmpty: true,
                        len: 3
                      }
                    },

    justification:  { type: Sequelize.STRING,
                      validate: {
                        notNull: true,
                        notEmpty: true
                      }
                    },

    destination_tag: { type: Sequelize.STRING,
                      validate: {
                        notNull: true,
                        notEmpty: true,
                        isAlphanumeric: true
                      }
                    }

  });

module.exports = AdminUsers;