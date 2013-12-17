
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express', req: req });
};

exports.logout = function(req, res){
	req.logout();
	res.redirect('/');
};
