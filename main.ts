joystickbit.initJoystickBit()
basic.forever(function () {
    if (joystickbit.getButton(joystickbit.JoystickBitPin.P12)) {
        basic.showArrow(ArrowNames.West)
    } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P13)) {
        basic.showArrow(ArrowNames.North)
    } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P14)) {
        basic.showArrow(ArrowNames.South)
    } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P15)) {
        basic.showArrow(ArrowNames.East)
    } else {
        basic.clearScreen()
    }
    if (input.buttonIsPressed(Button.A)) {
    	
    } else if (input.buttonIsPressed(Button.B)) {
    	
    } else if (input.logoIsPressed()) {
    	
    } else if (input.isGesture(Gesture.Shake)) {
    	
    } else {
        basic.clearScreen()
    }
})
