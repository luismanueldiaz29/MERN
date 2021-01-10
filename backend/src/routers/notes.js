const express = require('express');
const router = express.Router();
const controller = require('../controllers/note.controller');

router.get('/', controller.get);
router.get('/:id', controller.getId);
router.post('/', controller.post);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);

module.exports = router;