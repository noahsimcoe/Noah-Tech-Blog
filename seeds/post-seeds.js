const Post = require('../models/post');

const postData = [
    {
        user_id: 4,
        title: "New beginnings",
        description: "I just learned how to commit my changes to a repo in github!",
        time: "2024-10-01",
    },
    {
        user_id: 3,
        title: "Guess what?!",
        description: "Tomorow I have a software dev I interview with Gojek!!",
        time: "2024-10-02",
    },
    {
        user_id: 2,
        title: "Check out this new tech...",
        description: "I just found out that Xenon patches can help you gain muscle.",
        time: "2024-10-03",
    },
    {
        user_id: 1,
        title: "Download Release 1.0.3",
        description: "The new update for the iPhone is super cool!",
        time: "2024-10-04",
    },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;