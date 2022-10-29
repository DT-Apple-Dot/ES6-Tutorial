const { User } = require("../mordels/user");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const user = await new User(req.body).save();

        res.send(user);
    } catch (error) {
        res.send("An error occured");
        console.log(error);
    }
});

module.exports = router;