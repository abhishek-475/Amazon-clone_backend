const mongoose = require('mongoose');
const Product = require('../models/Product');

const seedProducts = async () => {
  try {
    await Product.deleteMany({});
    
    const products = [
      // Electronics - Smartphones
      {
        name: "Apple iPhone 15 Pro (128 GB) - Natural Titanium",
        description: "iPhone 15 Pro has a strong and light aerospace-grade titanium design with a textured matte-glass back.",
        price: 134900,
        category: "Electronics",
        images: [
          "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500&h=500&fit=crop"
        ],
        brand: "Apple",
        countInStock: 25,
        rating: 4.7,
        numReviews: 1247,
        features: ["A17 Pro chip", "Titanium design", "48MP Main camera", "USB-C"],
        isFeatured: true,
        discount: 12
      },
      {
        name: "Samsung Galaxy S24 Ultra (256 GB) - Titanium Gray",
        description: "Meet Galaxy S24 Ultra, the ultimate tool for epic creativity and productivity.",
        price: 129999,
        category: "Electronics",
        images: [
          "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=500&fit=crop"
        ],
        brand: "Samsung",
        countInStock: 18,
        rating: 4.6,
        numReviews: 892,
        features: ["Snapdragon 8 Gen 3", "S Pen included", "200MP camera", "AI features"],
        isFeatured: true,
        discount: 8
      },
      {
        name: "OnePlus 12 (256 GB) - Silky Black",
        description: "The OnePlus 12 features the latest Snapdragon 8 Gen 3 and super-fast charging.",
        price: 69999,
        category: "Electronics",
        images: [
          "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&h=500&fit=crop"
        ],
        brand: "OnePlus",
        countInStock: 32,
        rating: 4.5,
        numReviews: 567,
        discount: 15
      },

      // Electronics - Laptops
      {
        name: "MacBook Air 13-inch with M3 chip (256GB) - Midnight",
        description: "Supercharged by the M3 chip, MacBook Air is incredibly fast and powerful.",
        price: 114900,
        category: "Electronics",
        images: [
          "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=500&h=500&fit=crop"
        ],
        brand: "Apple",
        countInStock: 15,
        rating: 4.8,
        numReviews: 734,
        isFeatured: true
      },
      {
        name: "Dell XPS 13 Plus (512GB SSD, 16GB RAM) - Platinum Silver",
        description: "The Dell XPS 13 Plus offers a minimalist design with invisible trackpad.",
        price: 149990,
        category: "Electronics",
        images: [
          "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=500&h=500&fit=crop"
        ],
        brand: "Dell",
        countInStock: 8,
        rating: 4.4,
        numReviews: 289
      },

      // Electronics - Headphones
      {
        name: "Sony WH-1000XM4 Wireless Noise Cancelling Headphones",
        description: "Industry-leading noise cancellation with Dual Noise Sensor technology.",
        price: 24990,
        category: "Electronics",
        images: [
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop"
        ],
        brand: "Sony",
        countInStock: 30,
        rating: 4.7,
        numReviews: 2341,
        discount: 10
      },
      {
        name: "Apple AirPods Pro (2nd Generation)",
        description: "Active Noise Cancellation, Adaptive Transparency, and Personalized Spatial Audio.",
        price: 24900,
        category: "Electronics",
        images: [
          "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=500&h=500&fit=crop"
        ],
        brand: "Apple",
        countInStock: 45,
        rating: 4.6,
        numReviews: 1567
      },

      // Home & Kitchen
      {
        name: "Instant Pot Duo Plus 9-in-1 Electric Pressure Cooker",
        description: "9-in-1 multi-functional cooker that pressure cooks, slow cooks, and more.",
        price: 8999,
        category: "Home & Kitchen",
        images: [
          "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=500&fit=crop"
        ],
        brand: "Instant Pot",
        countInStock: 45,
        rating: 4.6,
        numReviews: 1563,
        discount: 20
      },
      {
        name: "Ninja Air Fryer MAX XL (5.5 Quart)",
        description: "Air fry, roast, reheat, and dehydrate, creating delicious, better-for-you meals.",
        price: 7999,
        category: "Home & Kitchen",
        images: [
          "https://images.unsplash.com/photo-1554866585-cd94860834b1?w=500&h=500&fit=crop"
        ],
        brand: "Ninja",
        countInStock: 38,
        rating: 4.5,
        numReviews: 892
      },
      {
        name: "KitchenAid Artisan Series 5-Qt Stand Mixer - Empire Red",
        description: "The KitchenAid stand mixer is the ultimate kitchen tool for baking and cooking.",
        price: 45999,
        category: "Home & Kitchen",
        images: [
          "https://images.unsplash.com/photo-1556909114-9e93b5e5c0e3?w=500&h=500&fit=crop"
        ],
        brand: "KitchenAid",
        countInStock: 12,
        rating: 4.8,
        numReviews: 456
      },

      // Fashion - Clothing
      {
        name: "Levi's Men's 511 Slim Fit Jeans - Dark Stonewash",
        description: "Classic slim fit jeans with stretch for all-day comfort.",
        price: 2999,
        category: "Fashion",
        images: [
          "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=500&fit=crop"
        ],
        brand: "Levi's",
        countInStock: 60,
        rating: 4.3,
        numReviews: 2347,
        discount: 25
      },
      {
        name: "Nike Men's Dri-FIT Sport T-shirt - Black",
        description: "The Nike Dri-FIT T-shirt helps keep you dry and comfortable.",
        price: 1499,
        category: "Fashion",
        images: [
          "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop"
        ],
        brand: "Nike",
        countInStock: 85,
        rating: 4.4,
        numReviews: 1567
      },

      // Shoes & Handbags
      {
        name: "Nike Air Force 1 '07 Men's Shoes - White",
        description: "The radiance lives on in the Nike Air Force 1 '07, the b-ball OG that puts a fresh spin on what you know best.",
        price: 7595,
        category: "Shoes & Handbags",
        images: [
          "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500&h=500&fit=crop"
        ],
        brand: "Nike",
        countInStock: 40,
        rating: 4.5,
        numReviews: 2890,
        discount: 15
      },
      {
        name: "Adidas Ultraboost 22 Running Shoes - Black",
        description: "Ultraboost 22 shoes combine responsive cushioning and a flexible fit for incredible comfort.",
        price: 15999,
        category: "Shoes & Handbags",
        images: [
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop"
        ],
        brand: "Adidas",
        countInStock: 35,
        rating: 4.6,
        numReviews: 1345
      },
      {
        name: "Michael Kors Women's Crossbody Bag - Brown",
        description: "Chic and compact crossbody bag with signature logo design.",
        price: 12999,
        category: "Shoes & Handbags",
        images: [
          "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&h=500&fit=crop"
        ],
        brand: "Michael Kors",
        countInStock: 18,
        rating: 4.3,
        numReviews: 678
      },

      // Watches
      {
        name: "Apple Watch Series 9 GPS 45mm - Midnight Aluminum",
        description: "Apple Watch Series 9 with new double-tap gesture and brighter display.",
        price: 41900,
        category: "Watches",
        images: [
          "https://images.unsplash.com/photo-1579586337278-3f436c8e6b87?w=500&h=500&fit=crop"
        ],
        brand: "Apple",
        countInStock: 28,
        rating: 4.7,
        numReviews: 2341
      },
      {
        name: "Fossil Gen 6 Smartwatch - Black Silicone",
        description: "Smartwatch with advanced wellness features and fast charging.",
        price: 19995,
        category: "Watches",
        images: [
          "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop"
        ],
        brand: "Fossil",
        countInStock: 22,
        rating: 4.2,
        numReviews: 890,
        discount: 20
      },
      {
        name: "Casio G-Shock Analog-Digital Watch - Black",
        description: "Rugged and durable watch with shock resistance and 200-meter water resistance.",
        price: 8995,
        category: "Watches",
        images: [
          "https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=500&h=500&fit=crop"
        ],
        brand: "Casio",
        countInStock: 50,
        rating: 4.5,
        numReviews: 1567
      },

      // Health & Personal Care
      {
        name: "Philips Series 7000 Wet and Dry Electric Shaver",
        description: "The Philips Series 7000 shaver provides a smooth shave with FlexTouch technology.",
        price: 5499,
        category: "Health & Personal Care",
        images: [
          "https://images.unsplash.com/photo-1594736797933-d0d69c3bc2db?w=500&h=500&fit=crop"
        ],
        brand: "Philips",
        countInStock: 28,
        rating: 4.5,
        numReviews: 678,
        discount: 18
      },
      {
        name: "Oral-B Pro 1000 Electric Toothbrush",
        description: "CrossAction brush head removes up to 100% more plaque than a manual toothbrush.",
        price: 2999,
        category: "Health & Personal Care",
        images: [
          "https://images.unsplash.com/photo-162179148c50-8f8f4c203d6c?w=500&h=500&fit=crop"
        ],
        brand: "Oral-B",
        countInStock: 65,
        rating: 4.4,
        numReviews: 2345
      },

      // Sports & Fitness
      {
        name: "Fitbit Charge 6 Fitness Tracker - Black",
        description: "Track your heart rate, sleep, activity, and stress with accurate tracking.",
        price: 12999,
        category: "Sports",
        images: [
          "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=500&h=500&fit=crop"
        ],
        brand: "Fitbit",
        countInStock: 42,
        rating: 4.4,
        numReviews: 2341,
        discount: 10
      },
      {
        name: "Yoga Mat Premium TPE Material 6mm - Purple",
        description: "High-quality TPE yoga mat with excellent cushioning and non-slip surface.",
        price: 1999,
        category: "Sports",
        images: [
          "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&h=500&fit=crop"
        ],
        brand: "Gorilla Mats",
        countInStock: 75,
        rating: 4.6,
        numReviews: 1567
      },
      {
        name: "Under Armour Men's Tech Graphic T-shirt - Gray",
        description: "UA Tech fabric is quick-drying, ultra-soft & has a more natural feel.",
        price: 1299,
        category: "Sports",
        images: [
          "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=500&h=500&fit=crop"
        ],
        brand: "Under Armour",
        countInStock: 90,
        rating: 4.3,
        numReviews: 890
      },

      // Grocery & Gourmet Foods
      {
        name: "Organic Quinoa, 2 lb - Ancient Harvest",
        description: "Premium organic quinoa, a complete protein source, gluten-free and non-GMO.",
        price: 899,
        category: "Grocery & Gourmet Foods",
        images: [
          "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500&h=500&fit=crop"
        ],
        brand: "Ancient Harvest",
        countInStock: 200,
        rating: 4.5,
        numReviews: 4567
      },
      {
        name: "Extra Virgin Olive Oil - 1 Liter - Filippo Berio",
        description: "Premium extra virgin olive oil, cold extracted, perfect for cooking.",
        price: 1299,
        category: "Grocery & Gourmet Foods",
        images: [
          "https://images.unsplash.com/photo-1531386450457-57c7f6370033?w=500&h=500&fit=crop"
        ],
        brand: "Filippo Berio",
        countInStock: 150,
        rating: 4.6,
        numReviews: 3456,
        discount: 15
      },

      // Toys & Games
      {
        name: "LEGO Star Wars Millennium Falcon Building Kit",
        description: "Build the most famous ship in the galaxy with this detailed LEGO model.",
        price: 8999,
        category: "Toys & Games",
        images: [
          "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=500&h=500&fit=crop"
        ],
        brand: "LEGO",
        countInStock: 15,
        rating: 4.9,
        numReviews: 234,
        isFeatured: true
      },
      {
        name: "Monopoly: Marvel Avengers Edition Board Game",
        description: "Assemble your favorite Avengers and battle for control of iconic locations.",
        price: 2499,
        category: "Toys & Games",
        images: [
          "https://images.unsplash.com/photo-1632501641765-e568d28b001b?w=500&h=500&fit=crop"
        ],
        brand: "Hasbro",
        countInStock: 35,
        rating: 4.5,
        numReviews: 567
      },

      // Video Games
      {
        name: "PlayStation 5 Console (Disc Version)",
        description: "Lightning speed, breathtaking immersion, and stunning games.",
        price: 49999,
        category: "Video Games",
        images: [
          "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=500&h=500&fit=crop"
        ],
        brand: "Sony",
        countInStock: 8,
        rating: 4.8,
        numReviews: 4567,
        isFeatured: true
      },
      {
        name: "Xbox Series X 1TB Console",
        description: "The fastest, most powerful Xbox ever with next-gen performance.",
        price: 44999,
        category: "Video Games",
        images: [
          "https://images.unsplash.com/photo-1621259182978-fbf832e7b7b9?w=500&h=500&fit=crop"
        ],
        brand: "Microsoft",
        countInStock: 12,
        rating: 4.7,
        numReviews: 3456
      },
      {
        name: "Nintendo Switch OLED Model - White",
        description: "7-inch OLED screen, wide adjustable stand, and enhanced audio.",
        price: 31999,
        category: "Video Games",
        images: [
          "https://images.unsplash.com/photo-1556009114-16c8b2ad3d0e?w=500&h=500&fit=crop"
        ],
        brand: "Nintendo",
        countInStock: 20,
        rating: 4.6,
        numReviews: 2345
      },

      // Tools & Home Improvement
      {
        name: "Black+Decker 20V Max Cordless Drill/Driver Kit",
        description: "Compact, lightweight drill driver perfect for DIY projects.",
        price: 4999,
        category: "Tools & Home Improvement",
        images: [
          "https://images.unsplash.com/photo-1572981779307-38f8b0456222?w=500&h=500&fit=crop"
        ],
        brand: "Black+Decker",
        countInStock: 35,
        rating: 4.4,
        numReviews: 1234
      },
      {
        name: "DEWALT 20V MAX Cordless Circular Saw",
        description: "High power and performance for cutting wood and other materials.",
        price: 12999,
        category: "Tools & Home Improvement",
        images: [
          "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500&h=500&fit=crop"
        ],
        brand: "DEWALT",
        countInStock: 15,
        rating: 4.6,
        numReviews: 678
      },

      // Luggage & Bags
      {
        name: "Samsonite Winfield 2 28\" Hardside Spinner Luggage",
        description: "Durable hardside spinner luggage with 10-year warranty.",
        price: 8999,
        category: "Luggage & Bags",
        images: [
          "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop"
        ],
        brand: "Samsonite",
        countInStock: 25,
        rating: 4.5,
        numReviews: 890
      },
      {
        name: "Travelpro Crew 11 21\" Carry-On Spinner",
        description: "Premium carry-on spinner designed for frequent travelers.",
        price: 12999,
        category: "Luggage & Bags",
        images: [
          "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=500&h=500&fit=crop"
        ],
        brand: "Travelpro",
        countInStock: 18,
        rating: 4.7,
        numReviews: 567
      },

      // Musical Instruments
      {
        name: "Yamaha F280 Acoustic Guitar - Natural",
        description: "Perfect beginner guitar with spruce top and rosewood fingerboard.",
        price: 8999,
        category: "Musical Instruments",
        images: [
          "https://images.unsplash.com/photo-1525202019637-ec9c5c8c4c3a?w=500&h=500&fit=crop"
        ],
        brand: "Yamaha",
        countInStock: 22,
        rating: 4.5,
        numReviews: 1234
      },
      {
        name: "Casio CT-S200 61-Key Portable Keyboard",
        description: "Compact and lightweight keyboard with 400 tones and 77 rhythms.",
        price: 11999,
        category: "Musical Instruments",
        images: [
          "https://images.unsplash.com/photo-1571974599782-87624638275f?w=500&h=500&fit=crop"
        ],
        brand: "Casio",
        countInStock: 15,
        rating: 4.3,
        numReviews: 789
      },

      // Under ₹500
      {
        name: "Amazon Basics HDMI Cable, 6 Feet, 3-Pack",
        description: "High-speed HDMI cable supports Ethernet, 3D, and Audio Return.",
        price: 499,
        category: "Under ₹500",
        images: [
          "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&h=500&fit=crop"
        ],
        brand: "Amazon Basics",
        countInStock: 200,
        rating: 4.4,
        numReviews: 45678
      },
      {
        name: "Philips 2m 3-Socket Extension Cord",
        description: "3-socket extension cord with 2-meter length and surge protection.",
        price: 399,
        category: "Under ₹500",
        images: [
          "https://images.unsplash.com/photo-1563297007-0686b7003af7?w=500&h=500&fit=crop"
        ],
        brand: "Philips",
        countInStock: 150,
        rating: 4.2,
        numReviews: 23456
      },
      {
        name: "Cello Tritan Water Bottle - 1 Litre, Blue",
        description: "BPA-free tritan water bottle, leak proof and durable.",
        price: 299,
        category: "Under ₹500",
        images: [
          "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=500&h=500&fit=crop"
        ],
        brand: "Cello",
        countInStock: 300,
        rating: 4.3,
        numReviews: 34567
      },
      {
        name: "Dettol Original Germ Protection Liquid Handwash",
        description: "Kills 99.9% germs and protects against 100 illness-causing germs.",
        price: 189,
        category: "Under ₹500",
        images: [
          "https://images.unsplash.com/photo-1603398938373-e54da0bb5e48?w=500&h=500&fit=crop"
        ],
        brand: "Dettol",
        countInStock: 500,
        rating: 4.5,
        numReviews: 56789
      },

      // Same-day Delivery Products
      {
        name: "Boat Rockerz 450 Bluetooth Headphones",
        description: "On-ear wireless headphones with 15 hours battery life.",
        price: 1599,
        category: "Same-day Delivery",
        images: [
          "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&h=500&fit=crop"
        ],
        brand: "Boat",
        countInStock: 80,
        rating: 4.3,
        numReviews: 23456,
        isFeatured: true
      },
      {
        name: "Mi 80cm (32 inches) HD Ready Android Smart LED TV",
        description: "HD Ready display with Android TV and 20W stereo speakers.",
        price: 14999,
        category: "Same-day Delivery",
        images: [
          "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500&h=500&fit=crop"
        ],
        brand: "Mi",
        countInStock: 25,
        rating: 4.2,
        numReviews: 12345
      },
      {
        name: "Samsung 7 kg Fully-Automatic Top Load Washing Machine",
        description: "Fully-automatic top load washing machine with water proof touch control.",
        price: 18990,
        category: "Same-day Delivery",
        images: [
          "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=500&h=500&fit=crop"
        ],
        brand: "Samsung",
        countInStock: 15,
        rating: 4.4,
        numReviews: 8901
      },
      {
        name: "Whirlpool 190 L 3 Star Direct Cool Single Door Refrigerator",
        description: "190L capacity refrigerator with base drawer and toughened glass shelves.",
        price: 12990,
        category: "Same-day Delivery",
        images: [
          "https://images.unsplash.com/photo-1591798454113-023d73794c34?w=500&h=500&fit=crop"
        ],
        brand: "Whirlpool",
        countInStock: 20,
        rating: 4.3,
        numReviews: 5678
      },

      // Additional Electronics
      {
        name: "Canon EOS R50 Mirrorless Camera with 18-45mm Lens",
        description: "Compact and lightweight mirrorless camera with 24.2MP sensor.",
        price: 69999,
        category: "Electronics",
        images: [
          "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500&h=500&fit=crop"
        ],
        brand: "Canon",
        countInStock: 12,
        rating: 4.6,
        numReviews: 234
      },
      {
        name: "JBL Flip 6 Portable Bluetooth Speaker",
        description: "IP67 waterproof portable speaker with powerful sound and deep bass.",
        price: 9999,
        category: "Electronics",
        images: [
          "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop"
        ],
        brand: "JBL",
        countInStock: 40,
        rating: 4.5,
        numReviews: 4567
      },

      // Additional Home & Kitchen
      {
        name: "Milton Thermosteel Duo DLX 1000 ml Water Bottle",
        description: "Double walled vacuum insulated stainless steel water bottle.",
        price: 899,
        category: "Home & Kitchen",
        images: [
          "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&h=500&fit=crop"
        ],
        brand: "Milton",
        countInStock: 120,
        rating: 4.4,
        numReviews: 12345
      },
      {
        name: "Prestige PIC 20 1200-Watt Induction Cooktop",
        description: "210mm induction cooktop with 1200W power and auto shut-off.",
        price: 1499,
        category: "Home & Kitchen",
        images: [
          "https://images.unsplash.com/photo-1581093458791-9d66f01c6bb0?w=500&h=500&fit=crop"
        ],
        brand: "Prestige",
        countInStock: 65,
        rating: 4.3,
        numReviews: 8901
      },

      // Additional Fashion
      {
        name: "Adidas Men's Essentials 3-Stripes T-shirt - Navy",
        description: "Classic fit t-shirt with iconic 3-Stripes and soft cotton fabric.",
        price: 1299,
        category: "Fashion",
        images: [
          "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop"
        ],
        brand: "Adidas",
        countInStock: 75,
        rating: 4.2,
        numReviews: 4567
      },
      {
        name: "Puma Men's Carson 2 Sneakers - Black",
        description: "Casual sneakers with rubber outsole and cushioned footbed.",
        price: 2999,
        category: "Shoes & Handbags",
        images: [
          "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&h=500&fit=crop"
        ],
        brand: "Puma",
        countInStock: 50,
        rating: 4.3,
        numReviews: 2345
      },

      // Additional Sports
      {
        name: "Nike Men's Dri-FIT Running Shorts - Black",
        description: "Lightweight running shorts with Dri-FIT technology and built-in liner.",
        price: 1999,
        category: "Sports",
        images: [
          "https://images.unsplash.com/photo-1595956553066-fe24a8c33395?w=500&h=500&fit=crop"
        ],
        brand: "Nike",
        countInStock: 60,
        rating: 4.4,
        numReviews: 3456
      },
      {
        name: "Wilson Evolution Game Basketball",
        description: "Premium indoor basketball with excellent grip and consistent feel.",
        price: 4999,
        category: "Sports",
        images: [
          "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=500&h=500&fit=crop"
        ],
        brand: "Wilson",
        countInStock: 25,
        rating: 4.6,
        numReviews: 1234
      },

      // Additional Grocery
      {
        name: "Tata Sampann Unpolished Toor Dal, 1kg",
        description: "100% pure unpolished toor dal, rich in protein and fiber.",
        price: 189,
        category: "Grocery & Gourmet Foods",
        images: [
          "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500&h=500&fit=crop"
        ],
        brand: "Tata Sampann",
        countInStock: 300,
        rating: 4.5,
        numReviews: 45678
      },
      {
        name: "Britannia Marie Gold Biscuits, 700g",
        description: "Delicious and crispy Marie gold biscuits, perfect with tea.",
        price: 99,
        category: "Grocery & Gourmet Foods",
        images: [
          "https://images.unsplash.com/photo-1558961367-7505a6c7b2e3?w=500&h=500&fit=crop"
        ],
        brand: "Britannia",
        countInStock: 500,
        rating: 4.4,
        numReviews: 34567
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
    
    console.log(`Total products seeded: ${products.length}`);
    
  } catch (error) {
    console.error('Error seeding products:', error);
    process.exit(1);
  }
};

module.exports = seedProducts;