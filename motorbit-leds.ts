namespace motorbit_leds {

    /*
     ======================================
     ========== PUBLIC FUNCTIONS ==========
     ======================================
     */

    export enum Offset {
        //% block=one
        ONE = 0,
        //% block=two
        TWO = 1,
        //% block=three
        THREE = 2,
        //% block=four
        FOUR = 3
    }

    //% blockId="get_offset" block="led %offset"
    //% offset.fieldOptions.tooltips="false" pin.fieldOptions.width="250"
    export function getOffset(offset: Offset) {
        return offset;
    }

    //% blockId="get_color" block="color %color"
    //% offset.fieldOptions.tooltips="false" pin.fieldOptions.width="250"
    export function getColor(color: RgbColors) {
        return color;
    }

    //% blockId="get_color_effect" block="effect %coloreffect"
    //% offset.fieldOptions.tooltips="false" pin.fieldOptions.width="250"
    export function getColorEffect(color_effect: ColorEffect) {
        return color_effect;
    }

    //% blockId="get_rgbultrasonics" block="part %rgbultrasonics"
    //% offset.fieldOptions.tooltips="false" pin.fieldOptions.width="250"
    export function getRgbUltrasonics(rgbultrasonics: RgbUltrasonics) {
        return rgbultrasonics;
    }

    //% blockId="motorbit_rus04" block="On-board Ultrasonic %index show %rgb %effect"
    //% group="RUS-04" weight=78
    //% index.shadow=get_rgbultrasonics
    //% rgb.shadow=get_color
    //% effect.shadow=get_color_effect
    export function motorbit_rus04(index: number, rgb: number, effect: number): void {
        sensors.board_rus04_rgb(DigitalPin.P16, 4, index, rgb, effect);
    }

    //% blockId=Ultrasonic_reading_distance block="On-board Ultrasonic reading distance"
    //% group="RUS-04" weight=77
    export function Ultrasonic_reading_distance(): number {
        return sensors.Ultrasonic(DigitalPin.P2);
    }

    //% blockId=Setting_the_on_board_lights block="Setting the on-board lights %offset|%rgb"
    //% group="RGB" weight=76
    //% offset.shadow=get_offset
    //% rgb.shadow=get_color
    export function Setting_the_on_board_lights(offset: number, rgb: number): void {
        sensors.board_rus04_rgb(DigitalPin.P16, offset, 0, rgb, rgb_ColorEffect.None);
    }

    //% blockId=close_the_on_board_lights block="close the on-board lights %offset"
    //% group="RGB" weight=75
    //% offset.shadow=get_offset
    export function close_the_on_board_lights(offset: number): void {
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
