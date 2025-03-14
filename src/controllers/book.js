const { getAllBooks } = require("../services/book");
const { MOCK_BOOKS } = require("../models/books");

const getList = (req, res) => {
    res.send({ data: getAllBooks() });
};

const getDetail = (req, res) => {
    const { id } = req.params;
    const book = getAllBooks().find((b) => b.idlibro === parseInt(id));
    if (!book) {
        return res.status(404).send({ error: "Libro no encontrado" });
    }
    res.send({ data: book });
};

const createItem = (req, res) => {
    const { libroname, autor } = req.body;
    if (!libroname || !autor) {
        return res.status(400).send({ error: "Faltan datos" });
    }

    const newBook = {
        idlibro: MOCK_BOOKS.length + 1, // Generar un nuevo ID
        libroname,
        autor,
    };

    MOCK_BOOKS.push(newBook);
    res.status(201).send({ message: "Libro agregado correctamente", data: newBook });
};

const updateItem = (req, res) => {
    const { id } = req.params;
    const { libroname, autor } = req.body;
    const bookIndex = MOCK_BOOKS.findIndex((b) => b.idlibro === parseInt(id));

    if (bookIndex === -1) {
        return res.status(404).send({ error: "Libro no encontrado" });
    }

    if (libroname) MOCK_BOOKS[bookIndex].libroname = libroname;
    if (autor) MOCK_BOOKS[bookIndex].autor = autor;

    res.send({ message: "Libro actualizado correctamente", data: MOCK_BOOKS[bookIndex] });
};

const deleteItem = (req, res) => {
    const { id } = req.params;
    const bookIndex = MOCK_BOOKS.findIndex((b) => b.idlibro === parseInt(id));

    if (bookIndex === -1) {
        return res.status(404).send({ error: "Libro no encontrado" });
    }

    const deletedBook = MOCK_BOOKS.splice(bookIndex, 1);
    res.send({ message: "Libro eliminado correctamente", data: deletedBook });
};

module.exports = { getDetail, getList, createItem, updateItem, deleteItem };
