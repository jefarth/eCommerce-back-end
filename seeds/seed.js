const sequelize = require('../config/connection');

const categorySeedData = require('./categorySeedData');
const productSeedData = require('./productSeedData');
const tagSeedData = require('./tagSeedData');
const productTagSeedData = require('./productTagSeedData')

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await categorySeedData();
    console.log('\n----- CATEGORIES SEEDED -----\n');
  
    await productSeedData();
    console.log('\n----- PRODUCTS SEEDED -----\n');
  
    await tagSeedData();
    console.log('\n----- TAGS SEEDED -----\n');
  
    await productTagSeedData();
    console.log('\n----- PRODUCT TAGS SEEDED -----\n');
  
    process.exit(0);
};

seedDatabase();