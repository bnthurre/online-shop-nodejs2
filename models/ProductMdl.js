const getDb = require('../utils/database').getDb
const mongoDB = require('mongodb');

class Product {
    constructor(title, price, description, imageUrl, id) {
        this.title = title,
        this.price = price,
        this.description = description,
        this.imageUrl = imageUrl,
        this._id = new mongoDB.ObjectId(id)

    }
    save() {
        const db = getDb();
        let dbOp;
        if(this._id){
            //update
            dbOp = db.collection('products').updateOne({_id: (this._id)}, {$set: this})

        }
        else{
            //create
            dbOp = db.collection('products').insertOne(this)

        }
        return dbOp
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

    static deleteById(prodId){
        const db = getDb();
        return db.collection('products').deleteOne({_id: new mongoDB.ObjectId(prodId)})
        .then(result =>{
            console.log("deleted")
        })
        .catch(err=>{
            console.log("Error:" , err)
        })
    }

}
module.exports = Product