// const seed____ = require('./____-seeds');
// const seed____ = require('./____-seeds');
// const seed____ = require('./____-seeds');
// const seed____ = require('./____-seeds');

const sequelize = require('../config/connections');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await ____users();
    console.log('\n ----- _____ SEEDED -----\n');
}