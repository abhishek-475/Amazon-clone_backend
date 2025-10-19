const mongoose = require('mongoose');
const seedProducts = require('../scripts/seedProduct');
const dotenv = require('dotenv')
dotenv.config()


const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};



const seedDatabase = async () => {
  try {
    console.log('Starting database seeding...');
    
    // Connect to database
    await connectDB();
    
    // Seed products
    await seedProducts();
    
    console.log('Database seeding completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Seeding error:', error);
    process.exit(1);
  }
};

// Run if this file is executed directly
if (require.main === module) {
  seedDatabase();
}

module.exports = seedDatabase;


