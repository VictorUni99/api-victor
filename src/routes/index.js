const express = require("express");
const router = express.Router();
const fs = require("fs");

const PATH_ROUTER = __dirname;
const cleanFilename = (filename) => filename.split(".").shift();

fs.readdirSync(PATH_ROUTER).filter((filename) => {
    const prefixRoute = cleanFilename(filename);
    if (prefixRoute !== "index") {
        console.log(`Cargando la ruta: ${prefixRoute}`);
        router.use(`/${prefixRoute}`, require(`./${prefixRoute}.js`));
    }
});

module.exports = { router };
