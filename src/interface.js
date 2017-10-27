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

    $('#current-city').change(function() {
  var city = $('#current-city').val();
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=c7fcfb5f27fb9c51436b6ccd4afdd303&units=metric', function(data) {
    $('#current-temperature').text(data.main.temp)
  })
})

});
