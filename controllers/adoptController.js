const Adopt = require('../models/Adopts');

exports.createAdopt = async (req, res) => {

    try {
        const { title, content, image, province, town, gender, age, species, communication } = req.body;
        const newAdopt = new Adopt();
        newAdopt.title = title;
        newAdopt.content = content;
        newAdopt.image = image;
        newAdopt.province = province;
        newAdopt.town = town;
        newAdopt.gender = gender;
        newAdopt.age = age;
        newAdopt.species = species;
        newAdopt.communication = communication;
        await newAdopt.save();
        res.status(201).json(newAdopt);
    } catch (error) {
        res.status(409).json({
            message: error.message,
        });
    }
};
exports.fetchAdopt = async (req, res) => {
    try {
        const adopts = await Adopt.find();
        res.status(200).json(adopts);
    } catch (error) {
        res.status(404).json({
            message: error.message,
        });
    }
};
exports.fetchFourAdopt = async (req, res) => {
    try {
        const adopts = await Adopt.find().sort({ "createdAt": -1 }).limit(4);
        res.status(200).json(adopts);
    } catch (error) {
        res.status(404).json({
            message: error.message,
        });
    }
};
exports.getSingleAdopt = async (req, res) => {
    try {
        const { id: _id } = req.params;
        const adopt = await Adopt.findById(_id);
        res.status(200).json(adopt);
    } catch (error) {
        res.status(404).json({
            message: error.message,
        });
    }
};
exports.updateAdopt = async (req, res) => {
    const { id: _id } = req.params;
    const adopt = req.body;
    try {
        const updatedAdopt = await Adopt.findByIdAndUpdate(_id, adopt, { new: true });
        res.json(updatedAdopt);
    } catch (error) {
        res.status(409).json({
            message: error.message,
        });
    }
};
exports.deleteAdopt = async (req, res) => {
    const { id: _id } = req.params;
    try {
        const deletedAdopt = await Adopt.findByIdAndRemove(_id);
        res.json(deletedAdopt);
    } catch (error) {
        res.status(409).json({
            message: error.message,
        });
    }
};