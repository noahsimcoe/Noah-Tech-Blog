const seedUsers = require('./user-seeds');

const sequelize = require('../config/connections');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedUsers();
    console.log('\n ----- USERS SEEDED -----\n');
};

seedAll();