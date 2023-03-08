import { Book } from "./models/Book.js";

export default {
    Query: {
        getAllBook: async () => await Book.find({}),
        getBook: async (_, args) => await Book.findById(args._id),
    },
    Mutation: {
        createBook: async (_, args) => {
            const book = new Book(args);
            await book.save();
            return book;
        },
        updateBook: async (_, args) => {
            const book = await Book.findByIdAndUpdate(args._id, args, { new: true });
            return book;
        },
        deleteBook: async (_, args) => {
            const book = await Book.findByIdAndDelete(args._id);
            if (book) return true;
            return false;
        },
    },
};
