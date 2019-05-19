const Sequelize = require('sequelize');

const applicationModel = require('../models/application')

const db = {};

let sequelize;

function init(config){
      sequelize = new Sequelize(config.db.connectionString, {
      dialect: config.db.type,
      //operatorsAliases: false,
      logging: config.db.logging,
      freezeTableName: true,
    });

    sequelize.authenticate().then(()=>{
      console.log("DB Connection establised")
    }).catch(err=>{
        console.error(err);
    })

    const model = applicationModel(sequelize,Sequelize)
    db[model.name] = model;


    db.sequelize = sequelize;
    db.Sequelize = Sequelize;
}




module.exports = {db,init};