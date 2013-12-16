/**
 * Created by f13 on 17/12/13.
 */
var path = require('path');
const config_file = "../config.json";

module.exports = JSON.parse(require('fs').readFileSync(path.join(__dirname, config_file)));
