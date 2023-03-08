updateBook(
\_id: ID!,
title: String,
author: String,
description: String,
release_year: Int,
genre: String!: Book!,
}

updateBook: async (\_, args) => {
const book = await Book.findByIdAndUpdate(args.\_id, args, { new: true });
return book;
},
