/**
 * Created by f13 on 17/12/13.
 */
var config = require('../config');
var mongoose = require('mongoose');

mongoose.connect(config.db.url);

mongoose.connection
    .on('open', function () {
        //db connected
    })
    .on('close', function () {
        //db closed
    });

//export models here
module.exports = {

}