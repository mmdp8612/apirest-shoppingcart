const express = require("express");

const app = express();

const port = process.env.PORT || 8888;

app.use("/", require("./routes/index"));
app.use("/api/productos", require("./routes/productos"));

app.listen(port, () => {
    console.log(`Servidor escuchando el puerto ${port}...`);
});