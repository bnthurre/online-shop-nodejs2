const getDb = require('../utils/database').getDb
const mongoDB = require('mongodb')
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

    static fetchAll() {
        const db = getDb();
        return db.collection('products').find().toArray()
            .then(products => {
                console.log(products)
                return products
            })
            .catch(err => {
                console.log(err)
            })
    }

    static findById(prodId) {
        const db = getDb();
        return db.collection('products').find({ _id: new mongoDB.ObjectId(prodId) })
            .next()
            .then(products => {
                console.log(products);
                return products
            })
            .catch(err => {
                console.log(err)
            })
    }

}
module.exports = Product