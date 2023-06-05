  class Thermostat {
    constructor() {
        this.DEFAULT_TEMP = 20
        this.temperature = this.DEFAULT_TEMP
        this.powerSavingMode = true
        this.MIN_TEMP = 10
        this.MAX_TEMP_PSM = 25
        this.MAX_TEMP = 32

    }
    
    getTemperature() {
        return this.temperature
    }

    up() {
        if (this.temperature < this.MAX_TEMP_PSM && this.powerSavingMode === true) {
        this.temperature += 1
    }
       else if (this.temperature < this.MAX_TEMP && this.powerSavingMode === false) {
         this.temperature += 1
    }
    }

    down() {
        if (this.temperature > this.MIN_TEMP) {
            this.temperature -= 1
        }
    }

    turnPowerSavingModeOn() {
        this.powerSavingMode = true
        if (this.temperature > this.MAX_TEMP_PSM) {
            this.temperature = this.MAX_TEMP_PSM;
        }
    }

    turnPowerSavingModeOff() {
        this.powerSavingMode = false
    }

    isPowerSavingModeOn() {
        return this.powerSavingMode;
    }

    reset() {
        return this.temperature = this.DEFAULT_TEMP;
    }
    
    currentEnergyUsage() {
        if (this.temperature <=25 && this.temperature >=18) {
            return "medium"
        }
        else if (this.temperature <18) {
            return "low"
        }
        else {
            return "high"
        }
    }
}
