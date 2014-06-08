/**
 * Created by f13 on 7/6/14.
 */
var router = require('express').Router();
var Todo = require('./api/todo');

router.get('/todo', Todo.getAll);
router.post('/todo/new', Todo.createTodo);

module.exports = router;