var fs = require('fs');
var cache = require('js-cache');
var nbt = require('nbt');
var MojangAPI = require('mojang-api');

module.exports.controller = function(app){
    function getDatFile(filename, res){
        fs.readFile('src/server/stub/fil.dat', function(error, data) {
            if (error) throw error;
            nbt.parse(data, function(error, data) {
                res.json(data);
            });
        });
    }

    app.get('/player/:playerName', function(req, res){
        var player = req.params.playerName;
        var uuid = cache.get('uuid'+player);
        if(uuid){
            getDatFile('', res)
            console.log('Cached', uuid);
        }else{
            MojangAPI.nameToUuid(player, function (err, response) {
                console.log(response);
                cache.set('uuid'+player, response[0].id, 60000);
                getDatFile('', res);
            });
        }
    });
};
