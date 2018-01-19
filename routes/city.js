let express = require('express');
    router = express.Router(),
    cityData = require('../cityData').getList();

router.get('/', function (req, res, next) {
    let cityList = cityData.root.list;
    res.status(200).json(cityList.slice(0,200));
});

router.get('/limit/:limit', function (req, res, next) {
    let cityList = cityData.root.list;
    res.status(200).json(cityList.slice(0,req.params.limit));
});

router.get('/:city.:country', function (req, res, next) {
    
    let cityList = cityData.find(req.params.city), filteredList;
    if (req.params.country){
        cityList = cityList.filter((field) => {
            field.country.toUpperCase() === req.params.country.toUpperCase();
        })
    }
    res.status(200).json(cityList);
});

router.get('country/:country', function (req, res, next) {
    
    let cityList = cityData.root.list;
    if (req.params.country){
        cityList = cityList.filter((field) => {
            field.country.toUpperCase() === req.params.country.toUpperCase();
        })
    }
    res.status(200).json(cityList);
});

router.get('city/:city', function (req, res, next) {
    
    let cityList = cityData.find(req.params.city);
    res.status(200).json(cityList);
});

module.exports = router;
