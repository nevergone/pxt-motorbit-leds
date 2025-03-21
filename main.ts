/**
 * This file contain test code for extension development.
 * It will not be included or compiled when this package is added to a project as an extension
 */


input.onButtonPressed(Button.A, function () {
    motorbit.Servo(motorbit.getServo(motorbit.Servos.S1), 180)
    motorbit.MotorRun(motorbit.getMotor(motorbit.Motors.M1), 255)
    motorbit_leds.Setting_the_on_board_lights(Offset.ONE, RgbColors.Red)
    motorbit_leds.Setting_the_on_board_lights(Offset.TWO, RgbColors.Green)
    motorbit_leds.Setting_the_on_board_lights(Offset.THREE, RgbColors.Blue)
    motorbit_leds.Setting_the_on_board_lights(Offset.FOUR, RgbColors.Yellow)
})
input.onButtonPressed(Button.B, function () {
    // stop all motors and leds
    motorbit.Servo(motorbit.getServo(motorbit.Servos.S1), 90)
    motorbit.MotorStopAll()
    motorbit_leds.close_all_the_on_board_lights()
})
