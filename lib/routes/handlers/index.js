
/*
 * GET home page.
 */
var router = require('express').Router();

router.get('/', function(req, res, next){
    res.render('index', { title: 'Express', req: req });
})

router.get('/logout', function(req, res, next){
    req.logout();
    res.redirect('/');
})

module.exports = router;