const mongoose = require('mongoose');

const Schema = mongoose.Schema

const BookInstanceSchema = new Schema({

    book: {type: Schema.Types.ObjectId, ref: "Book", required: true},
    imprint: {type: String, required: true},
    statut: {type: String, required: true, enum: ["Available", "Maintenance", "Loaned", "Reserved"],
        default: "Maintenance"
    },
    due_bank: {type: Date, default: Date.now()}
    
})


BookInstanceSchema.virtual("url").get(function(){

    return `/catalog/bookinstance/${this._id}`
})


module.exports = mongoose.model("bookInstance", BookInstanceSchema);