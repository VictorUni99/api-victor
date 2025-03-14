require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { router } = require("./routes");

const app = express();

app.use(cors());
app.use(express.json()); // Importante para recibir JSON
app.use("/v1", router);  // Aquí se establece el prefijo de rutas

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`La API está corriendo en el puerto ${PORT}`));
