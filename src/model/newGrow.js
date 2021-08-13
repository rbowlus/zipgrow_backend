// How we use mongoose library
const mongoose = require('mongoose')

// Name the schema
const newGrowSchema = new mongoose.Schema(
    {
        _id: ObjectId,
        growName: String,
        towerNumber: Int,
        plantDate: {type: Date, default: Date.now()},
        // plugNumber: Int,
        plug: {
            Int: {
                plantName: String,
                variety: String
            }
        },
        pH: Decimal 
    },

// Compile model from schema so it can be used elsewhere in app
module.exports = mongoose.model("NewGrow", newGrowSchema);