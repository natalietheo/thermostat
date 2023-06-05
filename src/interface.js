document.addEventListener("DOMContentLoaded", () => {
  const thermostat = new Thermostat();

  const elem_temperature = document.querySelector('#temperature');

  const updateThermostatDisplay = () => {
    // update the text and change the class based on the temperature
    elem_temperature.innerText = thermostat.temperature; 
    elem_temperature.className = thermostat.currentEnergyUsage() + '-usage'; 

    document.querySelector('#power-saving-status').innerText = thermostat.isPowerSavingModeOn() ? 'on' : 'off'

    document.querySelector('.energy-usage').innerText = thermostat.currentEnergyUsage();

  }
    
  document.querySelector('#temperature-up').addEventListener('click', () => { 
    thermostat.up(); 
    updateThermostatDisplay(); 
  })

  document.querySelector('#temperature-down').addEventListener('click', () => { 
    thermostat.down(); 
    updateThermostatDisplay(); 
  })

  document.querySelector('#temperature-reset').addEventListener('click', () => { 
    thermostat.reset(); 
    updateThermostatDisplay(); 
  })

  document.querySelector('#powersaving-on').addEventListener('click', () => { 
    thermostat.turnPowerSavingModeOn(); 
    updateThermostatDisplay(); 
  })
  document.querySelector('#powersaving-off').addEventListener('click', () => { 
    thermostat.turnPowerSavingModeOff(); 
    updateThermostatDisplay(); 
  })

  // initial display of thermostat    
  updateThermostatDisplay();
})








  