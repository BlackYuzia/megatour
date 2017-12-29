const express = require('express');
const router = express.Router();
const path = require('path');
const Tour = require('../models/tour');
const toursController = require('../controllers/toursController');

/* GET home page. */
router.get('/', function(req, res, next) {
    //res.render('index', { layout: null });
    res.sendFile(path.join(__dirname, '../public/client', 'index2.html'));
});

router.get("/setup-db", function(req, res) {
    var tours = [{
            country: "India",
            days: 10,
            priceAdult: 1000,
            priceKid: 800,
            isAvia: true,
            isHot: true
        },
        {
            country: "Grees",
            days: 10,
            priceAdult: 1000,
            priceKid: 800,
            isAvia: true,
            isHot: true
        },
        {
            country: "Italia",
            days: 10,
            priceAdult: 1000,
            priceKid: 800,
            isAvia: true,
            isHot: false
        },
        {
            country: "France",
            days: 10,
            priceAdult: 1000,
            priceKid: 800,
            isAvia: true,
            isHot: false
        },
        {
            country: "Germany",
            days: 10,
            priceAdult: 1000,
            priceKid: 800,
            isAvia: true,
            isHot: true
        },
        {
            country: "USA",
            days: 10,
            priceAdult: 1000,
            priceKid: 800,
            isAvia: true,
            isHot: true
        },
    ];

    Tour.remove({}, function(err) {
        if (err) {
            console.log(err);
            res.status(500).json({
                message: err
            });
        } else
            Tour.insertMany(tours, function(err, docs) {
                if (err) {
                    console.log(err);
                    res.status(500).json({
                        message: err
                    });
                } else {
                    console.log("Tours created successully!")
                    res.status(200).json({
                        message: "Okay"
                    });
                }
            });
    });

});
module.exports = router;