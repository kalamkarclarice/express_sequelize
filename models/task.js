module.exports = function(sequelize, DataTypes) {
  var Task = sequelize.define('Task', {
    description: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Task.belongsTo(models.User)
      }
    }
  })
 
  return Task
}