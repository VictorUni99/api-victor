require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const { router } = require("./routes");


app.use(cors());
app.use("/v1", router);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log("La API está corriendo en el puerto", PORT));

