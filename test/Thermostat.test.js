const Thermostat = require('../src/Thermostat');

describe('Thermostat', () => {
    it('returns the current temperature', () => {
        let thermostat = new Thermostat
        expect(thermostat.getTemperature()).toEqual(20)
    });

    it('increases the temperature by 1', () => {
        let thermostat = new Thermostat
        thermostat.up()
        expect(thermostat.getTemperature()).toEqual(21)
    });

    it('has a minimum of 10 degrees', () => {
        let thermostat = new Thermostat
        for (let i=0; i < 11; i++) {
            thermostat.down()
        }
        expect(thermostat.getTemperature()).toEqual(10)
    });

    it('decreases temperature by 1', () => {
        let thermostat= new Thermostat
        thermostat.down()
        expect(thermostat.getTemperature()).toEqual(19)
    })

    it('has power saving mode on by default', () => {
        let thermostat= new Thermostat
        expect(thermostat.isPowerSavingModeOn()).toBe(true)
    })

    it('can switch PSM off', () => {
        let thermostat= new Thermostat
        thermostat.turnPowerSavingModeOff()
        expect(thermostat.isPowerSavingModeOn()).toBe(false)
    })

    it('cannot turn temperature above 25 when power saving mode turned on', () => {
        let thermostat = new Thermostat
        thermostat.turnPowerSavingModeOn()
        for (let i = 0; i < 8; i++) {
            thermostat.up()
        }
        expect(thermostat.getTemperature()).toEqual(25)
    })

    it('cannot turn temperature above 23 when power saving mode turned off', () => {
        let thermostat = new Thermostat
        thermostat.turnPowerSavingModeOff()
        for (let i = 0; i < 14; i++) {
            thermostat.up()
        }
        expect(thermostat.getTemperature()).toEqual(32)
    })

    it('can reset to the default temperature', () => {
        let thermostat = new Thermostat
        thermostat.up()
        thermostat.reset()
        expect(thermostat.getTemperature()).toEqual(20)
    })

    it('reports medium-usage for temps <= 25', () => {
        let thermostat = new Thermostat
        expect(thermostat.currentEnergyUsage()).toEqual("medium")
    })

    it('reports low for temps <18', () => {
        let thermostat = new Thermostat
        for (let i = 0; i < 20; i++) {
            thermostat.down() }
        expect(thermostat.currentEnergyUsage()).toEqual("low")
    })

    it('reports high for temps >25', () => {
        let thermostat = new Thermostat
        thermostat.turnPowerSavingModeOff();
        for (let i = 0; i < 10; i++) {
            thermostat.up() }
        expect(thermostat.currentEnergyUsage()).toEqual("high")
    })

});