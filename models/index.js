const { sequelize, DataTypes } = require('sequelize');
const User = require('./user');
const Post = require('./post');
const Comment = require('./comment');

// Define the associations
User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Post.belongsTo(User, {
  foreignKey: 'user_id',
});

Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE',
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE',
});

// Post.belongsTo(User, {
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE'
// });

// Comment.belongsTo(User, {
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE'
// });

// // Post.hasMany(Comment, {
// //     foreignKey: "post_id",
// //     onDelete: 'CASCADE'
// // });

// // Comment.belongsTo(Post, {
// //     foreignKey: 'post_id',
// // });



Comment.belongsTo(Post, { foreignKey: 'post_id' });

module.exports = {
    sequelize,
    User,
    Post,
    Comment
};