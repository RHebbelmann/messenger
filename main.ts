input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    radio.sendString("Hallo")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(1)
basic.forever(function () {
	
})
