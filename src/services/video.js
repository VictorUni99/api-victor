const { MOCKE_VIDEO } = require("../models/videos");

const getAllVideos = () => {  // Aquí el nombre es getAllVideos, no getALLVideos
    return MOCKE_VIDEO;
};

module.exports = { getAllVideos };  // Exportación correcta
