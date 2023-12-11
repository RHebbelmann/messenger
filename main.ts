radio.onReceivedNumber(function (receivedNumber) {
	
})
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.setLedColor(0x00ff00)
    radio.sendString("Hallo")
    basic.pause(500)
    basic.setLedColor(0xff0000)
})
radio.onReceivedString(function (receivedString) {
    basic.setLedColor(0x007fff)
    basic.showString(receivedString)
    basic.pause(500)
    basic.setLedColor(0xff0000)
})
radio.setGroup(169)
basic.setLedColor(0xff0000)
basic.forever(function () {
	
})
