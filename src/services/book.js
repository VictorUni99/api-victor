const { MOCK_BOOKS } = require("../models/books");

const getAllBooks = () => {
    return MOCK_BOOKS;
};

module.exports = { getAllBooks };
