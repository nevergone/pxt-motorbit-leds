enum Offset {
    //% block=one
    ONE = 0,
    //% block=two
    TWO = 1,
    //% block=three
    THREE = 2,
    //% block=four
    FOUR = 3
}

namespace motorbit_leds {

    //% blockId="motorbit_rus04" block="On-board Ultrasonic part %index show color %rgb effect %effect"
    //% group="RUS-04" weight=78
    export function motorbit_rus04(index: RgbUltrasonics, rgb: RgbColors, effect: ColorEffect): void {
        sensors.board_rus04_rgb(DigitalPin.P16, 4, index, rgb, effect);
    }

    //% blockId=Ultrasonic_reading_distance block="On-board Ultrasonic reading distance"
    //% group="RUS-04" weight=77
    export function Ultrasonic_reading_distance(): number {
        return sensors.Ultrasonic(DigitalPin.P2);
    }

    //% blockId=Setting_the_on_board_lights block="Setting the on-board lights %index|color|%rgb"
    //% group="RGB" weight=76
    export function Setting_the_on_board_lights(offset: Offset, rgb: RgbColors): void {
        sensors.board_rus04_rgb(DigitalPin.P16, offset, 0, rgb, rgb_ColorEffect.None);
    }

    //% blockId=close_the_on_board_lights block="close the on-board lights %index color"
    //% group="RGB" weight=75
    export function close_the_on_board_lights(offset: Offset): void {
        sensors.board_rus04_rgb(DigitalPin.P16, offset, 0, RgbColors.Black, rgb_ColorEffect.None);
    }

    //% blockId=close_all_the_on_board_lights block="close all the on-board lights"
    //% group="RGB" weight=74
    export function close_all_the_on_board_lights(): void {
        sensors.board_rus04_rgb(DigitalPin.P16, 0, 0, RgbColors.Black, rgb_ColorEffect.None);
        sensors.board_rus04_rgb(DigitalPin.P16, 1, 0, RgbColors.Black, rgb_ColorEffect.None);
        sensors.board_rus04_rgb(DigitalPin.P16, 2, 0, RgbColors.Black, rgb_ColorEffect.None);
        sensors.board_rus04_rgb(DigitalPin.P16, 3, 0, RgbColors.Black, rgb_ColorEffect.None);
    }
}
