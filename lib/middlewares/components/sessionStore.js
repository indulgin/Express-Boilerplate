/**
 * Created by f13 on 17/12/13.
 */
var config = require('../../config');
var express = require('express');
var MongoStore = require('connect-mongo')(express);

module.exports = {
        secret: 'indulgin-secret',
        store: new MongoStore({
            url: config.db.url
        })
};