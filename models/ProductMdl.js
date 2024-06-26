const getDb = require('../utils/database').getDb

class Product {
    constructor(title, price, description, imageUrl) {
        this.title = title,
            this.price = price,
            this.description = description,
            this.imageUrl = imageUrl

    }
    save() {
        const db = getDb();
        return db.collection('products').insertOne(this)
        .then((result) => {
            console.log('Insertion Result:', result);
            return result;
        })
        .catch((err) => {
            console.log('Insertion Error:', err);
            throw err;
        });
    }
    
}
module.exports = Product