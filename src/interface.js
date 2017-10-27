$(document).ready(function(){

  var thermostat = new Thermostat();
  updateTemperature();

  $('#power-save-off').hide();

  $('#temperature-up').on('click', function() {
   thermostat.increase();
   updateTemperature();
  });

  $('#temperature-down').click(function() { // this is an alternate version of .on('click'), with a sprinkle of jQuery syntactic sugar
    thermostat.decrease();
    updateTemperature();
  });

  $('#reset').click(function() {
     thermostat.resetTemperature();
     updateTemperature();
   });

  function updateTemperature() {
  $('#temperature').text(thermostat.temperature());
  $('#temperature').attr('class', thermostat.energyUsage());
  }

  $('#power-save-on').click(function() {
     thermostat.changePowerSavingMode();
     $(this).hide();
     $("#power-save-off").show();
     updateTemperature();
   });

   $('#power-save-off').click(function() {
      thermostat.changePowerSavingMode();
      $(this).hide();
       $("#power-save-on").show();
      updateTemperature();
    });

    $('#usage').text(thermostat.energyUsage());

});
