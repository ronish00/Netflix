const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


//REGISTER
router.post("/register", async (req, res) => {
    const { username, email, password } = req.body;

    try {
        let user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({ msg: "User already exists" });
        }

        user = new User({
            username,
            email,
            password, 
        });

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        await user.save();

        res.status(201).json({ msg: "User registered successfully", user });
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});


//LOGIN
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(401).json("Wrong email or password");
        }

        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
        if (!isPasswordCorrect) {
            return res.status(401).json("Wrong email or password");
        }

        const accessToken = jwt.sign({id: user._id, isAdmin: user.isAdmin}, process.env.SECRET_KEY, {expiresIn: '5d'})

        const { password, ...info} = user._doc;  

        res.status(200).json({...info, accessToken});
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;