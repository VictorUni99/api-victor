const express = require("express");
const router = express.Router();
const { getDetail, getList, createItem, updateItem, deleteItem } = require("../controllers/book");

router.get("/", getList); // Listar libros
router.get("/:id", getDetail); // Obtener detalle de un libro
router.post("/", createItem); // Crear libro
router.put("/:id", updateItem); // Actualizar libro
router.delete("/:id", deleteItem); // Eliminar libro (SIN TOKEN)

module.exports = router;
