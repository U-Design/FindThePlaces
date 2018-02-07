let express = require('express');
router = express.Router(),
cities = require('../cityData').getList();

router.get('/', function (req, res, next) {
    let cityList = cities.root.list;
    res.status(200).json(cityList.slice(0, 200));
});

router.get('/limit/:limit', function (req, res, next) {
    let cityList = cities.root.list;
    res.status(200).json(cityList.slice(0, req.params.limit));
});

router.get('/country/:country', function (req, res, next) {

    let country = cities.find(req.params.country);
    res.status(200).json(country);
});

module.exports = router;