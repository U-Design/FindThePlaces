let express = require('express');
    router = express.Router(),
    cities = require('../cityData').getList();

router.get('/', function (req, res, next) {
    let cityList = cities.root.list;    
    res.status(200).json(cityList.slice(0,200));
});

router.get('/limit/:limit', function (req, res, next) {
    let cityList = cities.root.list;
    res.status(200).json(cityList.slice(0,req.params.limit));
});

router.get('/:city.:country', function (req, res, next) {
    
    let cityList = cities.find(req.params.city), filteredList;
    if (req.params.country){
        cityList = cityList.filter((field) => {
            return field.country.toUpperCase() === req.params.country.toUpperCase();
        })
    }
    res.status(200).json(cityList);
});

router.get('/country/:country', function (req, res, next) {
    
    let cityList = cities.root.list;
    if (req.params.country){
        cityList = cityList.filter((field) => {
            return field.country.toUpperCase() === req.params.country.toUpperCase();
        })
    }
    res.status(200).json(cityList);
});

router.get('/city/:city', function (req, res, next) {
    
    let cityList = cities.find(req.params.city);
    res.status(200).json(cityList);
});


router.get('/*', function (req, res, next) {
    res.status(404).json({ 'message': 'No resources' });
});


module.exports = router;
