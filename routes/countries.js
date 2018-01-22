let express = require('express');
router = express.Router(),
    cities = require('../cityData').getList();

router.get('/', function (req, res, next) {
    let cityList = cities.root.list;
    res.status(200).json(cityList.slice(0, 200));
});