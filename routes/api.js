const express = require('express');
const router = express.Router();
const toursController = require('../controllers/toursController');

// tours Routes
router.route('/register')
    .post(toursController.register);

router.route('/tours')
    .get(toursController.all)
    .post(toursController.createTour);

router.route('/tours-hot')
    .get(toursController.hot);

router.route('/tour/:tourId')
    .get(toursController.read)
    .put(toursController.update)
    .delete(toursController.delete);
module.exports = router;