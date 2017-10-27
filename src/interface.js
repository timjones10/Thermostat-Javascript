$(document).ready(function(){

  var thermostat = new Thermostat();
  $('#temperature').html(thermostat.temperature());

  $('#temperature-up').on('click', function() {
   thermostat.increase();
   $('#temperature').text(thermostat.temperature());
  });


});
