/**
 * Created by f13 on 7/6/14.
 */
var router = require('express').Router();


var Todo = require('./api/todo');

router.get('/user/:uid/todo', Todo.getAll);
router.post('/user/:uid/todo', Todo.createTodo);

module.exports = router;