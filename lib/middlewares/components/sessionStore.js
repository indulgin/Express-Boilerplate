/**
 * Created by f13 on 17/12/13.
 */
var config = require('../../config');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);

module.exports = {
        secret: 'indulgin-secret',
        store: new MongoStore({
            url: config.db.url
        })
};