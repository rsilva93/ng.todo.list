var app = angular.module('myApp', []);
var controller = app.controller('myCtrl', [myCtrl]);

function myCtrl() {

    this.title = 'My AngularJS to-do list';

    this.message = null;

    this.model = {
        text: '',
        done: false
    };

    this.list = [
        { text: 'Go to work', done: true },
        { text: 'Code all day', done: false },
        { text: 'Rocks', done: false }
    ];

    this.add = function () {

        this.message = null;

        this.list.push(this.model);

        this.model = {
            text: '',
            done: false
        };
    };

    this.remove = function (index) {
        this.list.splice(index, 1);
    };
}