const User = require('../models/user');

const userData = [
    {
        username: "noahsimcoe",
        password: "12345",
    },
    {
        username: "nathanstinson",
        password: "54321",
    },
    {
        username: "chasehickman",
        password: "67890",
    },
    {
        username: "adammount",
        password: "09876",
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;