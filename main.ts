function 가변저항LED제어 () {
    led.plotBarGraph(
    가변저항값,
    1023
    )
    pins.analogWritePin(AnalogPin.P1, pins.map(
    가변저항값,
    0,
    1023,
    0,
    255
    ))
}
function 서보모터동작 () {
    pins.servoWritePin(AnalogPin.P2, pins.map(
    가변저항값,
    0,
    1023,
    0,
    255
    ))
}
function 버튼동작 () {
    if (pins.digitalReadPin(DigitalPin.P2) == 0) {
        basic.showIcon(IconNames.Yes)
        LED동작()
    } else {
        basic.showIcon(IconNames.No)
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
}
function LED동작 () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P1, 0)
    basic.pause(500)
}
let 가변저항값 = 0
pins.setPull(DigitalPin.P2, PinPullMode.PullUp)
basic.forever(function () {
    가변저항값 = pins.analogReadPin(AnalogPin.P0)
    가변저항LED제어()
    서보모터동작()
})
