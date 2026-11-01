const mongoose = require('mongoose');

const MONGO_URI = "mongodb+srv://nasasiraignitious66_db_user:ISHO123@cluster0.u6mzbse.mongodb.net/ishongororo_shop?retryWrites=true&w=majority";

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  stock_qty: Number,
  description: String,
  category: String
});
const Product = mongoose.model('Product', productSchema);

const all50Products = [
  // PLATES & CUPS
  { name: "Oval Plates 1 Box (36pcs)", price: 140000, stock_qty: 10, description: "Quality oval melamine plates", category: "Plates" },
  { name: "Dinner Plates Melamine - 6pcs", price: 35000, stock_qty: 20, description: "Strong dinner plates set", category: "Plates" },
  { name: "Wine Glasses 6pcs Set", price: 45000, stock_qty: 20, description: "Elegant wine glasses", category: "Glasses" },
  { name: "Water Glasses 6pcs", price: 25000, stock_qty: 30, description: "Clear water drinking glasses", category: "Glasses" },
  { name: "Melamine Cups 12pcs", price: 30000, stock_qty: 25, description: "Hot tea cups - dozen", category: "Cups" },
  { name: "Mugs - Ceramic 6pcs", price: 28000, stock_qty: 22, description: "Tea mugs for home", category: "Cups" },
  
  // JERRYCANS & DRUMS
  { name: "Jerrycan 20Ltr Yellow", price: 25000, stock_qty: 40, description: "Heavy duty for water & fuel", category: "Storage" },
  { name: "Jerrycan 10Ltr", price: 15000, stock_qty: 35, description: "Portable 10L jerrycan", category: "Storage" },
  { name: "Jerrycan 5Ltr", price: 10000, stock_qty: 50, description: "Small home jerrycan", category: "Storage" },
  { name: "UN Oil Drums 200L BLUE", price: 120000, stock_qty: 10, description: "UN standard oil storage drum", category: "Storage" },
  { name: "Water Drum 100L Plastic", price: 65000, stock_qty: 12, description: "Plastic water storage drum", category: "Storage" },
  { name: "Bucket 20L Plastic", price: 12000, stock_qty: 40, description: "Strong plastic bucket", category: "Storage" },
  
  // FARM TOOLS
  { name: "Hoes - Original Uganda", price: 25000, stock_qty: 40, description: "Digging hoes for farming", category: "Farm Tools" },
  { name: "Pangas - Sharp Quality", price: 20000, stock_qty: 45, description: "Original panga for clearing", category: "Farm Tools" },
  

  // KITCHEN & COOKING
  { name: "Kitchen Knives Set 5pcs", price: 18000, stock_qty: 25, description: "Stainless steel knives", category: "Kitchen" },
  { name: "Chafing Dishes Stainless", price: 185000, stock_qty: 8, description: "Food warmer for functions", category: "Kitchen" },
  { name: "Sufuria Set - 7pcs Aluminium", price: 95000, stock_qty: 10, description: "Cooking sufurias set", category: "Kitchen" },
  { name: "Frying Pan Non-stick", price: 35000, stock_qty: 18, description: "Non-stick frying pan 28cm", category: "Kitchen" },
  { name: "Saucepan Set 3pcs", price: 75000, stock_qty: 12, description: "Stainless saucepan set", category: "Kitchen" },
  { name: "Flask 2L Stainless", price: 45000, stock_qty: 20, description: "Hot water flask", category: "Kitchen" },
  { name: "Thermos Flask 1L", price: 25000, stock_qty: 25, description: "Small thermos for tea", category: "Kitchen" },
  
  { name: "Serving Spoons Set", price: 15000, stock_qty: 30, description: "Big serving spoons 6pcs", category: "Kitchen" },
  { name: "Chapati Rolling Board", price: 12000, stock_qty: 20, description: "Wooden rolling board", category: "Kitchen" },
  
  // CLEANING
  { name: "Mop + Bucket Set", price: 40000, stock_qty: 15, description: "Mopping set with wringer", category: "Cleaning" },
  { name: "Broom - Hard", price: 8000, stock_qty: 50, description: "Hard broom for compound", category: "Cleaning" },
  { name: "Soft Broom", price: 10000, stock_qty: 40, description: "Soft broom for inside house", category: "Cleaning" },
  { name: "Dustpan Plastic", price: 5000, stock_qty: 60, description: "Dustpan with handle", category: "Cleaning" },
  { name: "Toilet Brush Set", price: 8000, stock_qty: 35, description: "Toilet cleaning brush", category: "Cleaning" },
  
  // HOME & DECOR
  { name: "Table Cloths 6x6ft White", price: 35000, stock_qty: 20, description: "Hotel quality table cloths", category: "Home" },
  { name: "Wool Center Carpet 5x7ft", price: 250000, stock_qty: 6, description: "Soft wool carpet", category: "Carpets" },
  { name: "Rubber Carpet 5x7ft", price: 85000, stock_qty: 15, description: "Durable rubber carpet", category: "Carpets" },
  { name: "Plastic Printed Carpet", price: 45000, stock_qty: 18, description: "Easy wash plastic carpet", category: "Carpets" },
  { name: "Wool Blanket Heavy Double", price: 65000, stock_qty: 12, description: "Warm wool blanket", category: "Home" },
  { name: "Bedsheets 4pcs Set", price: 55000, stock_qty: 15, description: "Cotton bedsheet with pillow cases", category: "Home" },
  { name: "Mosquito Net - Large", price: 25000, stock_qty: 20, description: "Treated mosquito net", category: "Home" },
  { name: "Laundry Basket Plastic", price: 18000, stock_qty: 20, description: "Clothes laundry basket", category: "Home" },
  { name: "Clothes Hangers 1 Dozen", price: 8000, stock_qty: 50, description: "Plastic clothes hangers", category: "Home" },
  { name: "Clothes Pegs Pack", price: 3000, stock_qty: 80, description: "Pegs for hanging clothes", category: "Home" },
  
  // BASINS & OTHERS
  { name: "Basin Plastic Big 60L", price: 18000, stock_qty: 25, description: "Large washing basin", category: "Plastic" },
  { name: "Basin Medium 30L", price: 10000, stock_qty: 30, description: "Medium size basin", category: "Plastic" },
  { name: "Water Bottles 1L - 3pcs", price: 15000, stock_qty: 30, description: "Drinking water bottles", category: "Plastic" },
  { name: "Cool Box 20L", price: 75000, stock_qty: 8, description: "Cooler box for drinks & food", category: "Storage" },
  { name: "Plastic Chairs - Strong", price: 28000, stock_qty: 20, description: "Strong plastic chairs", category: "Home" },
  { name: "Plastic Table Small", price: 45000, stock_qty: 10, description: "Small plastic table", category: "Home" },
  { name: "Padlocks - 50mm", price: 15000, stock_qty: 30, description: "Strong padlocks for doors", category: "Hardware" }
];

async function seed() {
  await mongoose.connect(MONGO_URI);
  console.log("Connected...");
  await Product.deleteMany({});
  console.log("Old products cleared...");
  await Product.insertMany(all50Products);
  console.log(`✅ SUCCESS! ${all50Products.length} PRODUCTS ADDED TO ISHONGORORO SHOP!`);
  console.log("Go refresh http://localhost:5000");
  process.exit();
}
seed().catch(console.error);