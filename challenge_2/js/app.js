angular.module('appTwo', [])
    .controller('WelcomeController', WelcomeController)
    .controller('ClassesController', ClassesController);


    function WelcomeController() {
        this.full_name = 'Luis Metzger';
        this.age = '31';
        this.city = 'Denver';
        this.state = 'Colorado';

    }

    function ClassesController() {
        this.class_name = 'WDI-1';
        this.enrolled_students = 16;
        this.start_date = "June 12, 2016";
        this.end_date = "Septempber 4, 2016";
    }

    function daysRemaining() {
        var oneDay = 24 * 60 * 60 * 1000;
        var firstDate = new Date(2016, 06, 12);
        var secondDate = new Date(2016, 09, 04);

        var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / (oneDay) ));

        console.log(diffDays);
    }

// console.log('challenge #2 -- app.js loaded!');

// var app = angular.module("appTwo", []);
// app.controller("WelcomeController", WelcomeController);

// function WelcomeController(){
//   this.full_name = "YOUR NAME"
// }
