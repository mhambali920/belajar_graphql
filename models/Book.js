// const mongoose = require("mongose");
import mongoose from "mongoose";
const { Schema } = mongoose;
const BookSchema = new Schema({
    title: String,
    author: String,
    description: String,
    release_year: Number,
    genre: String,
});

export const Book = mongoose.model("Book", BookSchema);
