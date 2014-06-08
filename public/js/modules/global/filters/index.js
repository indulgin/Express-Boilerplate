/**
 * Created by f13 on 9/6/14.
 */
var module = angular.module('appName.global');

module.filter("reverse", function(){
    return function(items){
        return items ? items.slice().reverse() : items; // Create a copy of the array and reverse the order of the items
    };
});

