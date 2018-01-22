let PropertiesReader = require('properties-reader');


let cityModule = (function () {   
    const JSONStream = require('JSONStream'),
        es = require('event-stream'),
        fs = require('fs');
    let cityTrie = require('./Trie');
    let properties = PropertiesReader('./config/role.properties');

    let pathtoFile = `${process.cwd()}/${properties.get(`${process.env.STAGE || 'CITY'}`)}`;
        readStrm = fs.createReadStream(pathtoFile)
            .pipe(JSONStream.parse('*'))
            .pipe(es.mapSync(function (data) {
                cityTrie.insert(data.name, data);
            }));
    return{
        invokeServer : function name(cb) {
            readStrm.on('end', function (params) {
                cb();
            });
        },

        getList : function () {
            return cityTrie;
        }
    }
})();

module.exports = cityModule;