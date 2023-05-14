const { Router } = require("express");

const router = Router();

router.get('/', (request, response) => {
    response.send("API Rest - Shopping Carg v1.0");
});

module.exports = router;