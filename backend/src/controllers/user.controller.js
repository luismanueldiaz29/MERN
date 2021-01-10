const User = require('../models/User');

exports.get = async (req, res) => {
    const users = await User.find();
    res.status(200).json(users);
}

exports.getId = async (req, res) => {
    const user = await User.findById(req.params.id);
    res.status(200).json(user)
}

exports.post = async (req, res) => {
    const { username } = req.body;

    const newUser = new User({
        username: username
    });

    await newUser.save();

    res.status(200).json(newUser);
}

exports.update = async (req, res) => {
    const { title, content, author } = req.body;
    await User.findOneAndUpdate(req.params.id, {
        title: title,
        content: content,
        author: author
    });
    res.status(200).json({message: 'User Update'})
}

exports.delete = async (req, res) => { 
    await User.findByIdAndDelete(req.params.id);
    res.json({message: 'User Deleted'})
}