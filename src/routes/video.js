const express = require("express");
const router = express.Router();
const {getDetail, 
    getList,
    createItem,
    updateItem,
    deleteItem,
} = require( "../controllers/video")
const { checkSession } = require("../middlewares/origin");
router.get("", getList );


//TODO http://localhost:3001/v1/video/pepe
router.get("/", getList); // Para listar
router.get("/:id", getDetail); // Para obtener detalle
router.post("/", createItem); // Para crear
router.put("/:id", updateItem); // Para actualizar
router.delete("/:id", checkSession, deleteItem); // Para eliminar

module.exports = router;

