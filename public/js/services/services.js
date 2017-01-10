// Módulo de Serviços
// Services Module

var services = angular.module('services', []);

// Data atual formatada (Brasil)
// Current Date Formatted (Brasil)

services.factory('dateFormat', function() {
  var dateFormat = {};

  dateFormat.dateFormat = function(date) {
    if(date == null || date == undefined){
      date = new Date();
    }
    var dateTimeFormatted = 
    date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear()+' '+date.getHours()+':'+date.getMinutes();
    return dateTimeFormatted;
  }

  dateFormat.dateFormatCompare = function(date) {
    var dateArray = date.split('/');
    var dateArray2 = dateArray[2].split(' ');
    var dateFormatted = dateArray2[0]+dateArray[1]+dateArray[0]+dateArray2[1];
    return dateFormatted;
  }

  dateFormat.dateFormatCompareDay = function(date) {
    var dateArray = date.split('/');
    var dateArray2 = dateArray[2].split(' ');
    var dateFormatted = dateArray2[0]+dateArray[1]+dateArray[0];
    return dateFormatted;
  }


  return dateFormat;
});
