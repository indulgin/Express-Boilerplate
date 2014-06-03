/**
 * Created by f13 on 17/12/13.
 */
const config_file = "config.json";
const server_file = "server.json";

var path = require('path'),
    settings = JSON.parse(require('fs').readFileSync(path.join(ROOT_DIR, config_file)));

if( process.env.NODE_ENV == 'production' ){
    var override = JSON.parse(require('fs').readFileSync(path.join(ROOT_DIR, server_file)));
    for( var key in override ){
        settings[key] = override[key];
    }
}

module.exports = settings