


module.exports = (sequelize, DataTypes) => {
  const Application = sequelize.define('Application', {
      id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey:true,
        allowNull: false,
      },
      Application: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      Feature: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Module: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdby: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createddate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
  },{
    freezeTableName: true,
    timestamps: false,
    hooks: {
      beforeCreate: (app,options) => {
        app.createddate = (new Date())
        
      },
      beforeUpdate:(app)=>{
        app.createddate = (new Date())
      }
    }
  });

  return Application;
};
