/**
 * Created by f13 on 7/6/14.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TodoSchema = new Schema(schemaConfig());
TodoSchema.statics.createTodo = createTodo;
TodoSchema.methods.toJSON = toJSON;

var Todo = mongoose.model('Todo', TodoSchema);
module.exports = Todo;

function schemaConfig() {
    return {
        todo: String,
        user: {type: Schema.ObjectId, ref: 'User'}
    }
}

function createTodo(content, user, done) {
    var todo = new Todo();
    todo.todo = content;
    todo.user = user;
    todo.save(function(err) {
        if(err) return done(err);
        console.log("todo saved");
        return done(null, todo);
    });
}

function toJSON() {
    var obj = this.toObject();
    delete obj.__v;
    delete obj.user;
    return obj;
}