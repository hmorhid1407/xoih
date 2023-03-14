let Temperatura = 0
led.enable(true)
basic.forever(function () {
    Temperatura = 300 * Math.idiv(pins.analogReadPin(AnalogPin.P0), 1023)
    basic.showNumber(Temperatura)
    basic.pause(100)
    serial.writeValue("temperatura(Cº)", 0)
})
