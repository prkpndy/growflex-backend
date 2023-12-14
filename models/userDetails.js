module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "userDetails",
    {
      firstName: {
        type: DataTypes.STRING(128),
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING(128),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(128),
        unique: true,
        primaryKey: true,
        isEmail: true,
        allowNull: false,
      },
      gender: {
        type: DataTypes.STRING(128),
        allowNull: false,
      },
      dob: {
        type: DataTypes.STRING(128),
        allowNull: false,
      },
      country: {
        type: DataTypes.STRING(128),
        allowNull: false,
      },
      state: {
        type: DataTypes.STRING(128),
        allowNull: false,
      },
      city: {
        type: DataTypes.STRING(128),
        allowNull: false,
      },
      zip: {
        type: DataTypes.STRING(128),
        allowNull: false,
      },
      areaOfInterest: {
        type: DataTypes.STRING(128),
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING(128),
        allowNull: false,
      },

      profilePictureExtension: {
        type: DataTypes.STRING(8),
        allowNull: true,
      },
      profilePictureFilePath: {
        type: DataTypes.STRING(256),
        allowNull: true,
      },
    },

    {
      tableName: "userDetails",
      timestamps: false,
    }
  );
};
