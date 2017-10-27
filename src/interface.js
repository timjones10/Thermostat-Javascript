$(document).ready(function(){

  var thermostat = new Thermostat();
  updateTemperature();

  $('#temperature-up').on('click', function() {
   thermostat.increase();
   updateTemperature();
  });

  $('#temperature-down').click(function() { // this is an alternate version of .on('click'), with a sprinkle of jQuery syntactic sugar
    thermostat.decrease();
    updateTemperature();
  })

  $('#reset').click(function() {
     thermostat.resetTemperature();
     updateTemperature();
   });

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature());
  }

});
