const JSONStream = require('JSONStream'),
    es = require('event-stream'),
    fs = require('fs');

let cityTrie = require('./cityTrie');
let pathtoFile = `${process.cwd()}/cities.json`,

readStrm = fs.createReadStream(pathtoFile)
        .pipe(JSONStream.parse('*'))
        .pipe(es.mapSync(function (data) {
            cityTrie.insert(data.name, data);
}));

module.exports = (function () {
    
    return{
        invokeServer : function name(cb) {
            readStrm.on('end', () => cb());
        },

        getList : function () {
            return cityTrie;
        }
    }
})();