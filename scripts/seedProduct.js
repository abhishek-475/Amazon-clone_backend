const mongoose = require('mongoose');
const Product = require('../models/Product');

const seedProducts = async () => {
  try {
    await Product.deleteMany({});
    
    const products = [
      // Electronics - Smartphones & Accessories
      {
        name: "Apple iPhone 15 Pro (128 GB) - Natural Titanium",
        description: "iPhone 15 Pro has a strong and light aerospace-grade titanium design with a textured matte-glass back. It also features a Ceramic Shield front that's tougher than any smartphone glass.",
        price: 134900,
        category: "electronics",
        images: [
          "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500&h=500&fit=crop",
          "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=500&h=500&fit=crop"
        ],
        brand: "Apple",
        countInStock: 25,
        rating: 4.7,
        numReviews: 1247,
        features: ["A17 Pro chip", "Titanium design", "48MP Main camera", "USB-C"],
        specifications: {
          display: "6.1-inch Super Retina XDR",
          processor: "A17 Pro",
          storage: "128GB",
          camera: "48MP + 12MP + 12MP",
          battery: "Up to 23 hours video playback"
        },
        isFeatured: true,
        discount: 12
      },
      {
        name: "Samsung Galaxy S24 Ultra (256 GB) - Titanium Gray",
        description: "Meet Galaxy S24 Ultra, the ultimate tool for epic creativity and productivity. With a stunning titanium frame and our brightest display ever.",
        price: 129999,
        category: "electronics",
        images: [
          "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=500&fit=crop",
          "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&h=500&fit=crop"
        ],
        brand: "Samsung",
        countInStock: 18,
        rating: 4.6,
        numReviews: 892,
        features: ["Snapdragon 8 Gen 3", "S Pen included", "200MP camera", "AI features"],
        specifications: {
          display: "6.8-inch Dynamic AMOLED 2X",
          processor: "Snapdragon 8 Gen 3",
          storage: "256GB",
          camera: "200MP + 50MP + 12MP + 10MP",
          battery: "5000mAh"
        },
        isFeatured: true,
        discount: 8
      },
      {
        name: "OnePlus 12 (256 GB) - Silky Black",
        description: "The OnePlus 12 features the latest Snapdragon 8 Gen 3, a professional-grade camera system, and super-fast charging.",
        price: 69999,
        category: "electronics",
        images: [
          "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&h=500&fit=crop"
        ],
        brand: "OnePlus",
        countInStock: 32,
        rating: 4.5,
        numReviews: 567,
        features: ["Snapdragon 8 Gen 3", "100W fast charging", "50W wireless charging", "Alert Slider"],
        specifications: {
          display: "6.82-inch Fluid AMOLED",
          processor: "Snapdragon 8 Gen 3",
          storage: "256GB",
          camera: "50MP + 48MP + 64MP",
          battery: "5400mAh"
        },
        discount: 15
      },

      // Electronics - Laptops
      {
        name: "MacBook Air 13-inch with M3 chip (256GB) - Midnight",
        description: "Supercharged by the M3 chip, MacBook Air is a world-class laptop that's incredibly fast and powerful.",
        price: 114900,
        category: "electronics",
        images: [
          "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=500&h=500&fit=crop"
        ],
        brand: "Apple",
        countInStock: 15,
        rating: 4.8,
        numReviews: 734,
        features: ["M3 chip", "13.6-inch Liquid Retina", "Up to 18 hours battery", "Fanless design"],
        specifications: {
          display: "13.6-inch Liquid Retina",
          processor: "Apple M3",
          memory: "8GB",
          storage: "256GB SSD",
          battery: "Up to 18 hours"
        },
        isFeatured: true
      },
      {
        name: "Dell XPS 13 Plus (512GB SSD, 16GB RAM) - Platinum Silver",
        description: "The Dell XPS 13 Plus offers a minimalist design with invisible trackpad and capacitive touch function row.",
        price: 149990,
        category: "electronics",
        images: [
          "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=500&h=500&fit=crop"
        ],
        brand: "Dell",
        countInStock: 8,
        rating: 4.4,
        numReviews: 289,
        features: ["12th Gen Intel Core i7", "OLED display", "16GB RAM", "512GB SSD"],
        specifications: {
          display: "13.4-inch OLED",
          processor: "Intel Core i7-1260P",
          memory: "16GB",
          storage: "512GB SSD",
          os: "Windows 11 Home"
        }
      },

      // Home & Kitchen
      {
        name: "Instant Pot Duo Plus 9-in-1 Electric Pressure Cooker",
        description: "9-in-1 multi-functional cooker that pressure cooks, slow cooks, rice cooker, yogurt maker, cake maker, and more.",
        price: 8999,
        category: "home & kitchen",
        images: [
          "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=500&fit=crop"
        ],
        brand: "Instant Pot",
        countInStock: 45,
        rating: 4.6,
        numReviews: 1563,
        features: ["9-in-1 functionality", "6-quart capacity", "13 smart programs", "Stainless steel pot"],
        specifications: {
          capacity: "6 Quarts",
          programs: "13 Smart Programs",
          material: "Stainless Steel",
          warranty: "1 year"
        },
        discount: 20
      },
      {
        name: "Ninja Air Fryer MAX XL (5.5 Quart)",
        description: "The Ninja Air Fryer MAX XL allows you to air fry, roast, reheat, and dehydrate, creating delicious, better-for-you meals.",
        price: 7999,
        category: "home & kitchen",
        images: [
          "https://images.unsplash.com/photo-1554866585-cd94860834b1?w=500&h=500&fit=crop"
        ],
        brand: "Ninja",
        countInStock: 38,
        rating: 4.5,
        numReviews: 892,
        features: ["5.5-quart capacity", "Air fry, roast, reheat", "Dehydrate function", "Dishwasher safe"],
        specifications: {
          capacity: "5.5 Quarts",
          functions: "Air Fry, Roast, Reheat, Dehydrate",
          power: "1750W",
          warranty: "1 year"
        }
      },

      // Fashion - Clothing
      {
        name: "Levi's Men's 511 Slim Fit Jeans - Dark Stonewash",
        description: "Classic slim fit jeans with stretch for all-day comfort. Perfect for casual wear.",
        price: 2999,
        category: "fashion",
        images: [
          "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=500&fit=crop"
        ],
        brand: "Levi's",
        countInStock: 60,
        rating: 4.3,
        numReviews: 2347,
        features: ["Slim fit", "Stretch denim", "Regular waist", "Multiple colors"],
        specifications: {
          fit: "Slim",
          material: "98% Cotton, 2% Elastane",
          closure: "Zip Fly",
          care: "Machine Wash"
        },
        discount: 25
      },
      {
        name: "Nike Men's Dri-FIT Sport T-shirt - Black",
        description: "The Nike Dri-FIT T-shirt helps keep you dry and comfortable with sweat-wicking technology.",
        price: 1499,
        category: "fashion",
        images: [
          "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop"
        ],
        brand: "Nike",
        countInStock: 85,
        rating: 4.4,
        numReviews: 1567,
        features: ["Dri-FIT technology", "Moisture wicking", "Breathable fabric", "Regular fit"],
        specifications: {
          material: "100% Polyester",
          fit: "Regular",
          sleeve: "Short Sleeve",
          care: "Machine Wash"
        }
      },

      // Beauty & Personal Care
      {
        name: "Philips Series 7000 Wet and Dry Electric Shaver",
        description: "The Philips Series 7000 shaver provides a smooth shave with its FlexTouch technology and can be used wet or dry.",
        price: 5499,
        category: "beauty",
        images: [
          "https://images.unsplash.com/photo-1594736797933-d0d69c3bc2db?w=500&h=500&fit=crop"
        ],
        brand: "Philips",
        countInStock: 28,
        rating: 4.5,
        numReviews: 678,
        features: ["Wet and dry use", "FlexTouch technology", "8-direction flex heads", "Quick charge"],
        specifications: {
          runtime: "60 minutes",
          chargeTime: "1 hour",
          waterproof: "Yes",
          warranty: "2 years"
        },
        discount: 18
      },
      {
        name: "Dyson Supersonic Hair Dryer - Nickel/Copper",
        description: "The Dyson Supersonic hair dryer is engineered to protect hair from extreme heat damage with intelligent heat control.",
        price: 29900,
        category: "beauty",
        images: [
          "https://images.unsplash.com/photo-1594736797933-d0d69c3bc2db?w=500&h=500&fit=crop"
        ],
        brand: "Dyson",
        countInStock: 12,
        rating: 4.7,
        numReviews: 456,
        features: ["Intelligent heat control", "Fast drying", "Hair protection", "Magnetic attachments"],
        specifications: {
          power: "1600W",
          attachments: "4 Magnetic attachments",
          heatSettings: "4",
          speedSettings: "4"
        }
      },

      // Books
      {
        name: "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",
        description: "No matter your goals, Atomic Habits offers a proven framework for improving - every day.",
        price: 399,
        category: "books",
        images: [
          "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&h=500&fit=crop"
        ],
        brand: "Penguin",
        countInStock: 120,
        rating: 4.8,
        numReviews: 23456,
        features: ["Paperback", "320 pages", "English language", "Self-help"],
        specifications: {
          format: "Paperback",
          pages: "320",
          language: "English",
          publisher: "Penguin"
        },
        isFeatured: true
      },
      {
        name: "The Psychology of Money: Timeless lessons on wealth, greed, and happiness",
        description: "Doing well with money isn't necessarily about what you know. It's about how you behave.",
        price: 349,
        category: "books",
        images: [
          "https://images.unsplash.com/photo-1589998059171-988d887df646?w=500&h=500&fit=crop"
        ],
        brand: "Harriman House",
        countInStock: 95,
        rating: 4.7,
        numReviews: 12345,
        features: ["Paperback", "256 pages", "English language", "Personal finance"],
        specifications: {
          format: "Paperback",
          pages: "256",
          language: "English",
          publisher: "Harriman House"
        }
      },

      // Sports & Fitness
      {
        name: "Fitbit Charge 6 Fitness Tracker - Black",
        description: "Track your heart rate, sleep, activity, and stress with the most accurate Fitbit tracker yet.",
        price: 12999,
        category: "sports",
        images: [
          "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=500&h=500&fit=crop"
        ],
        brand: "Fitbit",
        countInStock: 42,
        rating: 4.4,
        numReviews: 2341,
        features: ["24/7 heart rate tracking", "Sleep tracking", "Stress management", "6+ days battery"],
        specifications: {
          display: "AMOLED",
          batteryLife: "Up to 7 days",
          waterproof: "Up to 50m",
          connectivity: "Bluetooth"
        },
        discount: 10
      },
      {
        name: "Yoga Mat Premium TPE Material 6mm - Purple",
        description: "High-quality TPE yoga mat with excellent cushioning and non-slip surface for all types of yoga.",
        price: 1999,
        category: "sports",
        images: [
          "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&h=500&fit=crop"
        ],
        brand: "Gorilla Mats",
        countInStock: 75,
        rating: 4.6,
        numReviews: 1567,
        features: ["6mm thickness", "Non-slip surface", "TPE material", "Lightweight"],
        specifications: {
          material: "TPE",
          thickness: "6mm",
          size: "183cm x 61cm",
          weight: "1.2kg"
        }
      },

      // Grocery
      {
        name: "Organic Quinoa, 2 lb - Ancient Harvest",
        description: "Premium organic quinoa, a complete protein source, gluten-free and non-GMO.",
        price: 899,
        category: "grocery",
        images: [
          "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500&h=500&fit=crop"
        ],
        brand: "Ancient Harvest",
        countInStock: 200,
        rating: 4.5,
        numReviews: 4567,
        features: ["Organic", "Gluten-free", "Non-GMO", "Complete protein"],
        specifications: {
          weight: "2 lb (907g)",
          ingredients: "100% Organic Quinoa",
          certification: "USDA Organic",
          shelfLife: "24 months"
        }
      },
      {
        name: "Extra Virgin Olive Oil - 1 Liter - Filippo Berio",
        description: "Premium extra virgin olive oil, cold extracted, perfect for cooking and dressings.",
        price: 1299,
        category: "grocery",
        images: [
          "https://images.unsplash.com/photo-1531386450457-57c7f6370033?w=500&h=500&fit=crop"
        ],
        brand: "Filippo Berio",
        countInStock: 150,
        rating: 4.6,
        numReviews: 3456,
        features: ["Extra virgin", "Cold extracted", "Rich flavor", "Versatile use"],
        specifications: {
          volume: "1 Liter",
          type: "Extra Virgin Olive Oil",
          extraction: "Cold Pressed",
          origin: "Italy"
        },
        discount: 15
      },

      // Toys & Games
      {
        name: "LEGO Star Wars Millennium Falcon Building Kit",
        description: "Build the most famous ship in the galaxy with this detailed LEGO Millennium Falcon model.",
        price: 8999,
        category: "toys",
        images: [
          "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=500&h=500&fit=crop"
        ],
        brand: "LEGO",
        countInStock: 15,
        rating: 4.9,
        numReviews: 234,
        features: ["1353 pieces", "Ages 9+", "Collector's item", "Display model"],
        specifications: {
          pieces: "1353",
          ageRange: "9+ years",
          dimensions: "33cm x 22cm x 8cm",
          theme: "Star Wars"
        },
        isFeatured: true
      },
      {
        name: "Monopoly: Marvel Avengers Edition Board Game",
        description: "Assemble your favorite Avengers and battle for control of iconic locations from the Marvel Universe.",
        price: 2499,
        category: "toys",
        images: [
          "https://images.unsplash.com/photo-1632501641765-e568d28b001b?w=500&h=500&fit=crop"
        ],
        brand: "Hasbro",
        countInStock: 35,
        rating: 4.5,
        numReviews: 567,
        features: ["Marvel Avengers theme", "2-6 players", "Ages 8+", "Collector tokens"],
        specifications: {
          players: "2-6",
          ageRange: "8+ years",
          gameTime: "60+ minutes",
          theme: "Marvel Avengers"
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