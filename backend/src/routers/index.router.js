const express = require('express');
const router = express.Router();
const userRouter = require('./user');
const notesRouter = require('./notes');

router.get('/', (req, res) => {
    res.json('index');
})

module.exports = (app) => {
    app.use('/', router);
    app.use('/api/user', userRouter);
    app.use('/api/note', notesRouter);
}