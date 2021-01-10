const Note = require('../models/Notes');

exports.get = async (req, res) => {
    const notes = await Note.find();
    res.status(200).json(notes);
}

exports.getId = async (req, res) => {
    const note = await Note.findById(req.params.id);
    res.status(200).json(note)
}

exports.post = async (req, res) => {
    const { title, content, author } = req.body;

    const newNote = new Note({
        title: title,
        content: content,
        author: author
    });

    await newNote.save();

    res.status(200).json(newNote);
}

exports.update = async (req, res) => {
    const { title, content, author } = req.body;
    await Note.findOneAndUpdate(req.params.id, {
        title: title,
        content: content,
        author: author
    });
    res.status(200).json({message: 'Note Update'})
}

exports.delete = async (req, res) => { 
    await Note.findByIdAndDelete(req.params.id);
    res.json({message: 'Note Deleted'})
}