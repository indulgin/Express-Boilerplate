/**
 * Created by f13 on 6/6/14.
 */
var module = angular.module('appName.global');

module.factory('User', function() {
    var user = window.user;
    return {
        user: function() {
            return user;
        },
        isSignedIn: function() {
            return !!user;
        }
    }
})

//store configured restful servers here.
module.service('API', function() {
    var apis = {
        todo: {
            get: 'http://127.0.0.1:4000/api/todo',
            post: 'http://127.0.0.1:4000/api/todo/new'
        }
    };

    //not using register/deregister right now. will make it useful when I have a clearer modular structure in mind
    this.registerAPI = function(key, obj) {
        if(key in apis) {
            console.error("API service : "+key+" already registered");
            return false;
        }
        else {
            api[key] = obj;
            return true;
        }
    }

    this.deRegisterAPI = function(key, obj) {
        if(key in apis) {
            delete apis[key];
            return true;
        }
        return false;
    }

    this.getAPI = function(key) {
        if(key in apis)
            return apis[key];
        else
            return null;
    }
})