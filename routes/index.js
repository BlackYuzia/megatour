const express = require('express');
const router = express.Router();
const path = require('path')
const Tour = require('../models/tour');
const toursController = require('../controllers/toursController');

/* GET home page. */
router.get('/', function(req, res, next) {
    // res.render('index', { layout: null });
    // res.sendFile(path.join(__dirname, '../views', 'index.html'));
    res.sendFile(path.join(__dirname, '../public/client', 'index.html'));
});

router.get("/setup-db", function(req, res) {
    var tours = [{
            country: "Egypt",
            days: 6,
            priceAdult: 12000,
            priceKid: 10000,
            isAvia: true,
            isHot: true
        },
        {
            country: "Krum",
            days: 6,
            priceAdult: 14000,
            priceKid: 12000,
            isAvia: true,
            isHot: false
        },
        {
            country: "Ukraine",
            days: 6,
            priceAdult: 1000,
            priceKid: 900,
            isAvia: true,
            isHot: true
        },
        {
            country: "Bulgaria",
            days: 6,
            priceAdult: 20000,
            priceKid: 18000,
            isAvia: true,
            isHot: false
        }
    ];

    Tour.remove({}, function(err) {
        if (err) {
            console.log(err);
        } else
            Tour.insertMany(tours, function(err, docs) {
                if (err) {
                    console.log(err);
                } else
                    console.log("Tours created successully!")
            });
    });

    res.status(200).json({
        message: "Okey",
    });

});
module.exports = router;