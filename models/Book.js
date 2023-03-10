const mongoose = require("mongoose");
const { Schema } = mongoose;
const BookSchema = new Schema({
    title: String,
    author: String,
    description: String,
    release_year: Number,
    genre: String,
});

const Book = mongoose.model("Book", BookSchema);
module.exports = Book;
