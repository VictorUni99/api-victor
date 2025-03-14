const { getAllVideos } = require("../services/video"); // Corrección aquí


const getList = (req, res) => {
    res.send({ data: getAllVideos() }); // También corregir aquí
};


const getDetail = (req, res) => {
    res.send({data:  "Detail" });
};

const updateItem = (req, res) => {
    res.send({data:  "Actualizando"});
};

const createItem = (req, res) => {
    res.send({data:  "Creando"});
};

const deleteItem = (req, res) => {
    res.send({data: "Elimnando"});
};

module.exports = { getDetail, getList, createItem, updateItem, deleteItem};


