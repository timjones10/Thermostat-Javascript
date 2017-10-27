describe("Thermostat settings", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('The thermostat is initialised with a temperature of 20', function(){
    expect(thermostat.temperature()).toEqual(20);
  });

  it("The thermostat's temperature could be increased", function(){
    thermostat.increase();
    expect(thermostat.temperature()).toEqual(21);
  });

  it("The thermostat's temperature could be decreased", function(){
    thermostat.decrease();
    expect(thermostat.temperature()).toEqual(19);
  });

  it("Has a minimum temperature of 10 and throws an error if reached", function(){
    for (i = 1; i <= 10; i++){
    thermostat.decrease();}
    expect(function(){thermostat.decrease();}).toThrow(new Error("Minimum temperature is 10 degrees"));
  });

  it("it throws an error if tries to add temperature beyound maximum temperature", function(){
    for (i = 1; i <= 5; i++){
    thermostat.increase();}
    expect(function(){thermostat.increase();}).toThrow(new Error("Maximum temperature is reached"));
  });

  it("has a reset function which resets the temperature to 20", function(){
    thermostat.decrease();
    thermostat.resetTemperature();
    expect(thermostat.temperature()).toEqual(20);
  });

  it("States the energy usage according to the temperature", function(){
    expect(thermostat.energyUsage()).toEqual("medium-usage");
  });

  it("States the energy usage according to the temperature", function(){
    for (i = 1; i <= 3; i++){
    thermostat.decrease();}
    expect(thermostat.energyUsage()).toEqual("low-usage");
  });

  it("States the energy usage according to the temperature", function(){
    for (i = 1; i <= 5; i++){
    thermostat.increase();}
    expect(thermostat.energyUsage()).toEqual("high-usage");
  });


 describe('changed power saving mode', function() {

   beforeEach(function() {
     thermostat = new Thermostat();
     thermostat.changePowerSavingMode();
   });

   it('has a power saving mode that could be changed', function(){
     expect(thermostat.powerSaving()).toEqual(false);
   });

   it('changes maximum temperature based on power saving mode', function(){
     expect(thermostat.maximumTemperature()).toEqual(35);
   });

  it('has a power saving mode that could be changed', function(){
    thermostat.changePowerSavingMode();
    expect(thermostat.powerSaving()).toEqual(true);
  });
});
});
