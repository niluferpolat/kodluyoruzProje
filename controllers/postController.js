const Posts = require('../models/Posts');

exports.getPosts = async (req, res) => {
	try {
		const posts = await Posts.find();
		res.status(200).json(posts);
	} catch (error) {
		res.status(404).json({
			message: error.message,
		});
	}
};
exports.getFourPosts = async (req, res) => {
	try {
		const pageSize = 4;
		const posts = await Posts.find().sort({ createdAt: -1 }).limit(pageSize);
		res.status(200).json(posts);
	} catch (error) {
		res.status(404).json({
			message: error.message,
		});
	}
};
exports.getSinglePost = async (req, res) => {
	try {
		const { id: _id } = req.params;
		const post = await Posts.findById(_id);
		res.status(200).json(post);
	} catch (error) {
		res.status(404).json({
			message: error.message,
		});
	}
};
exports.createPost = async (req, res) => {
	try {
		const { title, content, image } = req.body;
		const newPost = new Posts();
		newPost.title = title;
		newPost.content = content;
		newPost.image = image;
		await newPost.save();
		res.status(201).json(newPost);
	} catch (error) {
		res.status(409).json({
			message: error.message,
		});
	}
};
exports.updatePost = async (req, res) => {
	const { id: _id } = req.params;
	const post = req.body;
	try {
		const updatedPost = await Posts.findByIdAndUpdate(_id, post, { new: true });
		res.json(updatedPost);
	} catch (error) {
		res.status(409).json({
			message: error.message,
		});
	}
};
exports.deletePost = async (req, res) => {
	const { id: _id } = req.params;
	try {
		const deletedPost = await Posts.findByIdAndRemove(_id);
		res.json(deletedPost);
	} catch (error) {
		res.status(409).json({
			message: error.message,
		});
	}
};
