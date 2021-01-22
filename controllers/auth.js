const User = require('../models/User');
const bcrypt = require("bcryptjs");

exports.signupController = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({
                errorMessage: "Bu email zaten kullanılmış",
            });
        }
        const newUser = new User();
        newUser.username = username;
        newUser.email = email;
        const salt = await bcrypt.genSalt(10);
        newUser.password = await bcrypt.hash(password, salt);
        await newUser.save();
        res.json({
            successMessage: "Üye Olma Başarıyla Gerçekleşti",
        })
    } catch (err) {
        console.log("Controller error: " + err);
        res.status(500).json({
            errorMessage: "Server hatası",
        })
    }
}