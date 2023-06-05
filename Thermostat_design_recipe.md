# {{PROBLEM}} Class Design Recipe

## 1. Describe the Problem

As a user, I want to adjust my thermostat, so I can set the temperature to my liking. 

## 2. Design the Class Interface

_Include the initializer and public methods with all parameters and return values._

  
```javascript
const thermostat {
    constructor(){
        this.temperature = 20
    }

getTemperature(){
    // return temperature
}
up(){
    // increase temperature by 1 degree
}
down(){
    // decrease temperature by 1 degree
    // can't go above 10 degrees
}
turnPowerSavingModeOn(){
 // max temp = 25
 //
}
turnPowerSavingModeOff(){
 
}
reset(){
    // reset temp back to 20 degrees
}
currentEnergyUsage() {
    // < 18 = low-usage
    // <= 25 = medium-usage
    // anything higher is high-usage
}
}
```

## 3. Create Examples as Tests

_Make a list of examples of how the class will behave in different situations._

```javascript
# EXAMPLE

# 1
thermostat.getTemperature()
// get temperature initially returns 20


# 2
thermostat.up()
// temperature goes up by 1 


# 3
thermostat.down()
// temperature goes down by 1

# 4
thermostat.setPowerSavingMode(true)
thermostat.up()
// error when turning temp up past 25

# 5
thermostat.setPowerSavingMode(false)
thermostat.up()
// error when going above 32

# 6
thermostat.reset()
// resets temp to 20

# 7 
thermostat.currentEnergyUsage() 
//  <= 25 = medium-usage

# 8 
thermostat.currentEnergyUsage() 
// < 18 = low-usage

# 9
thermostat.currentEnergyUsage()
// anything higher is high-usage


```

_Encode each example as a test. You can add to the above list as you go._

## 4. Implement the Behaviour

_After each test you write, follow the test-driving process of red, green, refactor to implement the behaviour._

