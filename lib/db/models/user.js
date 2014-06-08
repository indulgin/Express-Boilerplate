var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema(schemaConfig());
UserSchema.statics.findOrCreate = findOrCreate;
UserSchema.statics.getUser = getUser;
UserSchema.methods.getAllTodos = getAllTodos;
UserSchema.methods.addTodo = addTodo;
UserSchema.methods.toJSON = toJSON;

var User = mongoose.model('User', UserSchema);
module.exports = User;

function schemaConfig() {
    return {
        provider: String,
        uid: String,
        username: String,
        password: String,
        firstName: String,
        lastName: String,
        email: String,
        bio: String,
        lastLogin: Date,
        dateJoined: Date,
        data: {
            todos: [{type: Schema.ObjectId, ref: 'Todo'}]
        }
    }
}

function getUser(_id, done) {
    User.findById(new mongoose.Types.ObjectId(_id), function(err, user) {
        if(err)
            return done(err);
        else
            return done(null, user);
    });
}

function findOrCreate(provider, identifier, profile, done) {
    //console.log( profile );
    var email = false;
    if (profile.emails) {
        email = profile.emails[ 0 ].value;
    }

    User.findOne({ 'email': email }, function (err, olduser) {
        if (err) {
            throw err;
        }

        if (olduser && olduser._id) {
            console.log('User: ' + olduser.firstName + ' ' + olduser.lastName + ' found and logged in! ' + provider);
            done(null, olduser);
        }
        else {
            User.findOne({ 'uid': identifier, 'provider': profile }, function (err, olduser) {
                if (err) {
                    throw err;
                }

                if (olduser && olduser._id) {
                    console.log('User: ' + olduser.firstName + ' ' + olduser.lastName + ' found and logged in! ' + provider);
                    done(null, olduser);
                } else {
                    var newuser = new User();
                    newuser.provider = provider;
                    newuser.uid = identifier;
                    newuser.username = profile.username;
                    newuser.firstName = profile.name.givenName;
                    newuser.lastName = profile.name.familyName;
                    newuser.email = email;
                    newuser.dateJoined = new Date();

                    newuser.save(function (err) {
                        if (err) {
                            throw err;
                        }
                        console.log('New user: ' + newuser.firstName + ' ' + newuser.lastName + ' created and logged in! ' + provider);
                        done(null, newuser);
                    });
                }
            });
        }
    });
}

function getAllTodos(done) {
    var self = this;
    this.populate('data.todos', function(err, user) {
        if(err) return done(err);
        if(user) {
            if(user._id == self._id) {
                return done(null, user.data.todos);
            }
            else {
                return done();
            }
        }
        else {
            return done();
        }
    })
}

function addTodo(todo, done) {
    this.data.todos.push(todo);
    this.save(function(err) {
        if(err) return done(err);
        console.log("todo saved");
        return done(null, todo);
    });
}

function toJSON() {
    var keys = ['_id', 'username', 'firstName', 'lastName'];
    var obj = {};
    for(var k in keys) {
        if(this[k]) {
            obj[k] = this[k];
        }
        else
            obj[k] = null;
    }
    return obj;
}