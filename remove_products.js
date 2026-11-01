const mongoose = require('mongoose');
const MONGO_URI = "mongodb+srv://nasasiraignitious66_db_user:ISHO123@cluster0.u6mzbse.mongodb.net/ishongororo_shop?retryWrites=true&w=majority";
const productSchema = new mongoose.Schema({ name: String, price: Number, stock_qty: Number, description: String, category: String });
const Product = mongoose.model('Product', productSchema);

async function remove() {
  await mongoose.connect(MONGO_URI);
  console.log("Connected...");

  const toDelete = [
    "Gas Cylinder 6kg + Burner",
    "Charcoal Stove (Sigiri)",
    "Spades",
    "Fork Hoes (Jembe)"
  ];

  for(let name of toDelete){
    const result = await Product.deleteOne({ name: name });
    if(result.deletedCount > 0) console.log(" Deleted:", name);
    else console.log(" Not found (maybe already deleted):", name);
  }

  const count = await Product.countDocuments();
  console.log(DONE!  products remaining);
  process.exit();
}
remove();
