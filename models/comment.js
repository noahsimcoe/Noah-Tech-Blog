const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

class Comment extends Model {}

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        post_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'post',
                key: 'id',
                onDelete: 'CASCADE',
            },
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
                onDelete: 'CASCADE'
            },
        },
    },
    {
        sequelize,
        freezeTableName: true,
        modelName: "comment",
        timestamps: false,
    }
);

module.exports = Comment;



