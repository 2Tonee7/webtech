const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).json({ Status: "Succes" ,
        message: "Server is running"
    });
});

module.exports = router;
