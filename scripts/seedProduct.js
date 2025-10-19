const mongoose = require('mongoose');
const Product = require('./models/Product');

const seedProducts = async () => {
  try {
    await Product.deleteMany({});
    
    const products = [
      // Electronics - Smartphones
      {
        name: "Samsung Galaxy S24 Ultra",
        description: "6.8-inch Dynamic AMOLED 2X, Snapdragon 8 Gen 3, 12GB RAM, 512GB Storage, 200MP Camera",
        price: 129999,
        category: "electronics",
        images: ["https://images.samsung.com/is/image/samsung/p6pim/in/2401/gallery/in-galaxy-s24-s928-sm-s928bzkcins-thumb-539226511"],
        brand: "Samsung",
        countInStock: 15,
        rating: 4.5,
        numReviews: 128,
        features: ["200MP Camera", "S Pen", "AI Features", "512GB Storage"],
        specifications: {
          display: "6.8-inch Dynamic AMOLED",
          processor: "Snapdragon 8 Gen 3",
          ram: "12GB",
          storage: "512GB",
          camera: "200MP + 50MP + 12MP + 10MP"
        }
      },
      {
        name: "iPhone 15 Pro Max",
        description: "6.7-inch Super Retina XDR, A17 Pro chip, 256GB, Titanium design, 48MP Main camera",
        price: 159900,
        category: "electronics",
        images: ["https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-naturaltitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692846359314"],
        brand: "Apple",
        countInStock: 8,
        rating: 4.7,
        numReviews: 95,
        features: ["Titanium Design", "A17 Pro Chip", "Action Button", "USB-C"],
        specifications: {
          display: "6.7-inch Super Retina XDR",
          processor: "A17 Pro",
          ram: "8GB",
          storage: "256GB",
          camera: "48MP + 12MP + 12MP"
        }
      },

      // Electronics - Laptops
      {
        name: "MacBook Air M3",
        description: "13.6-inch Liquid Retina, Apple M3 chip, 8GB RAM, 256GB SSD, 18-hour battery",
        price: 114900,
        category: "electronics",
        images: ["https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mba13-midnight-select-202402?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1708367461037"],
        brand: "Apple",
        countInStock: 12,
        rating: 4.6,
        numReviews: 67,
        features: ["M3 Chip", "18-hour Battery", "Fanless Design", "macOS"],
        specifications: {
          display: "13.6-inch Liquid Retina",
          processor: "Apple M3",
          ram: "8GB",
          storage: "256GB SSD",
          battery: "18 hours"
        }
      },
      {
        name: "Dell XPS 13 Plus",
        description: "13.4-inch OLED, Intel Core i7, 16GB RAM, 512GB SSD, Windows 11 Pro",
        price: 149990,
        category: "electronics",
        images: ["https://i.dell.com/is/image/DellContent/content/dam/ss2/products/notebooks/xps/13-9320/media-gallery/notebook-xps-13plus-9320-t-tp-platinum-gallery-1.psd?fmt=png-alpha&pscan=auto&scl=1&wid=3333&hei=3333&qlt=100,0&resMode=sharp2&size=3333,3333"],
        brand: "Dell",
        countInStock: 6,
        rating: 4.4,
        numReviews: 42,
        features: ["OLED Display", "Intel Core i7", "Invisible Trackpad", "Premium Build"],
        specifications: {
          display: "13.4-inch OLED",
          processor: "Intel Core i7",
          ram: "16GB",
          storage: "512GB SSD",
          os: "Windows 11 Pro"
        }
      },

      // Home & Kitchen
      {
        name: "Philips Air Fryer XXL",
        description: "XXL Family Size, Rapid Air Technology, 7.3L Capacity, Digital Display, 1400W",
        price: 14999,
        category: "home & kitchen",
        images: ["https://www.philips.co.in/c-dam/b2c/category-pages/kitchen/airfryer/hd9280-91-gallery-01.jpg"],
        brand: "Philips",
        countInStock: 25,
        rating: 4.3,
        numReviews: 156,
        features: ["7.3L Capacity", "Rapid Air Technology", "Digital Display", "Fat Removal Technology"],
        specifications: {
          capacity: "7.3 Liters",
          power: "1400W",
          presetPrograms: "7",
          warranty: "2 years"
        }
      },
      {
        name: "Prestige Omega Select Plus Cooker",
        description: "7 Litre Pressure Cooker, 3-ply bottom, stainless steel, induction compatible",
        price: 3299,
        category: "home & kitchen",
        images: ["https://www.prestigesmartkitchen.com/cdn/shop/products/7L-Prestige-Omega-Select-Plus-Cooker_800x.jpg?v=1643874835"],
        brand: "Prestige",
        countInStock: 50,
        rating: 4.2,
        numReviews: 89,
        features: ["7L Capacity", "3-ply Bottom", "Induction Compatible", "Stainless Steel"],
        specifications: {
          capacity: "7 Liters",
          material: "Stainless Steel",
          base: "3-ply bottom",
          compatibility: "All stoves including induction"
        }
      },

      // Fashion - Men's Clothing
      {
        name: "Levi's Men's 511 Slim Fit Jeans",
        description: "Slim fit jeans with stretch, regular waist, available in multiple colors",
        price: 2999,
        category: "fashion",
        images: ["https://lsco.scene7.com/is/image/lsco/045112370-front-pdp?fmt=jpeg&qlt=70,1&resMode=sharp2&fit=crop,1&op_usm=0.6,0.6,8&wid=2000&hei=2086"],
        brand: "Levi's",
        countInStock: 30,
        rating: 4.1,
        numReviews: 234,
        features: ["Slim Fit", "Stretch Denim", "Multiple Colors", "Regular Waist"],
        specifications: {
          fit: "Slim",
          material: "98% Cotton, 2% Elastane",
          closure: "Zip Fly",
          care: "Machine Wash"
        }
      },
      {
        name: "Nike Men's Air Force 1 Shoes",
        description: "Classic white sneakers, leather upper, rubber sole, iconic design",
        price: 7595,
        category: "fashion",
        images: ["https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-shoes-WrLlWX.png"],
        brand: "Nike",
        countInStock: 18,
        rating: 4.5,
        numReviews: 189,
        features: ["Leather Upper", "Air Sole Unit", "Rubber Sole", "Classic Design"],
        specifications: {
          material: "Leather",
          sole: "Rubber",
          closure: "Lace-up",
          style: "Low-top"
        }
      },

      // Beauty & Personal Care
      {
        name: "Philips Beard Trimmer Series 7000",
        description: "Cordless beard trimmer, 20 length settings, 120 min runtime, waterproof",
        price: 3499,
        category: "beauty",
        images: ["https://www.philips.co.in/c-dam/b2c/category-pages/personal-care/male-grooming/beard-styler/bt7210-15-gallery-01.jpg"],
        brand: "Philips",
        countInStock: 22,
        rating: 4.4,
        numReviews: 76,
        features: ["20 Length Settings", "120 Min Runtime", "Waterproof", "Self-sharpening Blades"],
        specifications: {
          runtime: "120 minutes",
          chargeTime: "1 hour",
          settings: "20 length settings",
          waterproof: "Yes"
        }
      },
      {
        name: "Mamaearth Onion Hair Oil",
        description: "With onion & coconut oil, reduces hair fall, promotes hair growth, 200ml",
        price: 399,
        category: "beauty",
        images: ["https://images.mamaearth.in/catalog/product/o/n/onion_oil_200ml_1_.jpg"],
        brand: "Mamaearth",
        countInStock: 100,
        rating: 4.0,
        numReviews: 456,
        features: ["Reduces Hair Fall", "Promotes Growth", "With Onion Oil", "Sulfate Free"],
        specifications: {
          volume: "200ml",
          keyIngredients: "Onion Oil, Coconut Oil",
          hairType: "All Hair Types",
          parabenFree: "Yes"
        }
      },

      // Books
      {
        name: "Atomic Habits by James Clear",
        description: "An Easy & Proven Way to Build Good Habits & Break Bad Ones",
        price: 399,
        category: "books",
        images: ["https://m.media-amazon.com/images/I/81bGKUa1e0L._AC_UF1000,1000_QL80_.jpg"],
        brand: "Penguin",
        countInStock: 45,
        rating: 4.8,
        numReviews: 1234,
        features: ["Paperback", "320 Pages", "English Language", "Self-help"],
        specifications: {
          format: "Paperback",
          pages: "320",
          language: "English",
          publisher: "Penguin"
        }
      },
      {
        name: "Ikigai: The Japanese secret to a long and happy life",
        description: "Find your purpose and live longer with Japanese wisdom",
        price: 299,
        category: "books",
        images: ["https://m.media-amazon.com/images/I/81l3rZK4lnL._AC_UF1000,1000_QL80_.jpg"],
        brand: "Penguin",
        countInStock: 38,
        rating: 4.3,
        numReviews: 567,
        features: ["Paperback", "208 Pages", "English Language", "Self-help"],
        specifications: {
          format: "Paperback",
          pages: "208",
          language: "English",
          publisher: "Penguin"
        }
      },

      // Sports & Fitness
      {
        name: "Yonex Astrox 88D Pro Badminton Racket",
        description: "Professional badminton racket, stiff flex, head heavy balance",
        price: 18990,
        category: "sports",
        images: ["https://www.yonex.com/media/catalog/product/cache/9e5ec8c4c6d9f2f4d4a9a8a8a8a8a8a8/a/s/astrox88d_pro_1.jpg"],
        brand: "Yonex",
        countInStock: 8,
        rating: 4.7,
        numReviews: 34,
        features: ["Stiff Flex", "Head Heavy", "Aero+ Box Frame", "Rotational Generator System"],
        specifications: {
          weight: "3U (85-89g)",
          balance: "Head Heavy",
          flex: "Stiff",
          gripSize: "G4, G5"
        }
      },
      {
        name: "Nike Dri-FIT Training T-shirt",
        description: "Men's training t-shirt, moisture-wicking, breathable fabric",
        price: 1999,
        category: "sports",
        images: ["https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f5b87dde-6b4c-4a8a-8a8a-8a8a8a8a8a8a/dri-fit-training-t-shirt-7JvFQZ.png"],
        brand: "Nike",
        countInStock: 25,
        rating: 4.2,
        numReviews: 78,
        features: ["Dri-FIT Technology", "Moisture Wicking", "Breathable", "Regular Fit"],
        specifications: {
          material: "100% Polyester",
          fit: "Regular",
          sleeve: "Short Sleeve",
          care: "Machine Wash"
        }
      },

      // Grocery
      {
        name: "Fortune Sunflower Oil",
        description: "Pure sunflower oil, 5L bottle, rich in Vitamin E, cholesterol free",
        price: 899,
        category: "grocery",
        images: ["https://www.bigbasket.com/media/uploads/p/l/40126957_2-fortune-sun-lite-sunflower-refined-oil.jpg"],
        brand: "Fortune",
        countInStock: 60,
        rating: 4.1,
        numReviews: 345,
        features: ["Pure Sunflower Oil", "Rich in Vitamin E", "Cholesterol Free", "5L Bottle"],
        specifications: {
          quantity: "5 Liters",
          type: "Refined Oil",
          ingredients: "100% Sunflower Oil",
          shelfLife: "12 months"
        }
      },
      {
        name: "Amul Butter",
        description: "Pure butter, 500g packet, made from fresh cream, rich taste",
        price: 275,
        category: "grocery",
        images: ["https://www.amul.com/products/images/butter.png"],
        brand: "Amul",
        countInStock: 80,
        rating: 4.6,
        numReviews: 678,
        features: ["Pure Butter", "Made from Fresh Cream", "Rich Taste", "500g Packet"],
        specifications: {
          quantity: "500g",
          type: "Salted Butter",
          ingredients: "Milk, Salt",
          shelfLife: "6 months"
        }
      },

      // Toys & Games
      {
        name: "LEGO Classic Creative Brick Box",
        description: "221 pieces, creative building set, multiple colors, storage box",
        price: 1999,
        category: "toys",
        images: ["https://www.lego.com/cdn/cs/set/assets/blt77a0c5f27c1e894e/11018.png"],
        brand: "LEGO",
        countInStock: 15,
        rating: 4.5,
        numReviews: 123,
        features: ["221 Pieces", "Multiple Colors", "Storage Box", "Age 4+"],
        specifications: {
          pieces: "221",
          ageRange: "4-99 years",
          theme: "Classic",
          boxDimensions: "26.2 x 14.1 x 7.1 cm"
        }
      },
      {
        name: "Monopoly Classic Board Game",
        description: "Family board game, buying and trading properties, for 2-6 players",
        price: 1499,
        category: "toys",
        images: ["https://m.media-amazon.com/images/I/81qyVdHOcYL._AC_UF1000,1000_QL80_.jpg"],
        brand: "Hasbro",
        countInStock: 20,
        rating: 4.3,
        numReviews: 89,
        features: ["Classic Edition", "2-6 Players", "Family Game", "Ages 8+"],
        specifications: {
          players: "2-6",
          ageRange: "8+ years",
          gameTime: "60+ minutes",
          contents: "Game board, cards, tokens, money"
        }
      }
    ];

    await Product.insertMany(products);
    console.log('Products seeded successfully');
    
    // Log product counts by category
    const categoryCounts = await Product.aggregate([
      { $group: { _id: '$category', count: { $sum: 1 } } }
    ]);
    
    console.log('Products by category:');
    categoryCounts.forEach(cat => {
      console.log(`- ${cat._id}: ${cat.count} products`);
    });
    
  } catch (error) {
    console.error('Error seeding products:', error);
    process.exit(1);
  }
};

module.exports = seedProducts;