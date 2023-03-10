const Book = require("./models/Book");

const { PrismaClient } = require("@prisma/client");
const Prisma = new PrismaClient();

module.exports = {
    Query: {
        getAllBook: async () => await Book.find({}),
        getBook: async (_, args) => await Book.findById(args._id),
        getUsers: async () => await Prisma.user.findMany(),
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
        createUser: async (_, args) => {
            const newUser = await Prisma.user.create({
                data: {
                    name: args.name,
                    email: args.email,
                },
            });
            return newUser;
        },
    },
};
