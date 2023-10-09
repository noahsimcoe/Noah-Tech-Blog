const Comment = require('../models/comment');

const commentData = [
    {
        description: "This is very cool!",
        post_id: 1,
        user_id: 4,
    },
    {
        description: "Great post, love it!",
        post_id: 3,
        user_id: 2,
    },
    {
        description: "See you in class next week!",
        post_id: 2,
        user_id: 1,
    },
    {
        description: "I really like to eat apples, too!",
        post_id: 4,
        user_id: 3,
    },
    {
        description: "I second that!",
        post_id: 4,
        user_id: 2,
    },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;