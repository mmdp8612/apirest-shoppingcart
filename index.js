const express = require("express");

const app = express();

app.set("PORT", 8888);

app.use("/", require("./routes/index"));
app.use("/api/productos", require("./routes/productos"));

app.listen(app.get("PORT"), () => {
    console.log(`Servidor escuchando el puerto ${app.get("PORT")}...`);
});