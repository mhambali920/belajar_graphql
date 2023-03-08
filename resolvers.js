import { Book } from "./models/Book.js";

export default {
    Query: {
        getAllBook: async () => await Book.find({}),
    },
};
