const express = require('express');
const router = express.Router();
const eventController = require('../Controllers/eventController');
const auth = require('../Middleware/Auth');

router.post('/create', auth, eventController.createEvent);
router.get('/all', auth, eventController.getEvents);
router.put('/update', auth, eventController.updateEvent);
router.delete('/delete/:id', auth, eventController.deleteEvent);
router.get('/:id', auth, eventController.getEventById);


module.exports = router;
