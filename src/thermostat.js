
function Thermostat() {
  this.MINIMUMTEMPERATURE = 10;
  this.DEFAULTTEMPERATURE = 20;
  this._temperature = this.DEFAULTTEMPERATURE;
  this._powerSaving = true;
}

Thermostat.prototype.temperature = function() {
  return this._temperature + 'c';
};

Thermostat.prototype.increase = function() {
   if (this._temperature >= this.maximumTemperature())
   throw new Error ("Maximum temperature is reached");
   this._temperature += 1;
 };

Thermostat.prototype.decrease = function() {
if (this._temperature <= this.MINIMUMTEMPERATURE)
  throw new Error("Minimum temperature is 10 degrees");
  this._temperature -= 1;
};

Thermostat.prototype.changePowerSavingMode = function() {
  this._powerSaving === true ? this._powerSaving = false : this._powerSaving = true;
};

Thermostat.prototype.powerSaving = function() {
 return this._powerSaving;
};

Thermostat.prototype.maximumTemperature = function() {
  var max;
  this._powerSaving === true ? max = 25 : max = 35;
  return max;
};

Thermostat.prototype.resetTemperature = function() {
  this._temperature = this.DEFAULTTEMPERATURE;
};

Thermostat.prototype.energyUsage = function() {
  if (this._temperature < 18) {
  return  "Low";
} else if (this._temperature < 25) {
  return "Medium";
} else {
  return "High";
}
};
