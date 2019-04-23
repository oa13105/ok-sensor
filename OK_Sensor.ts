/**
 * support for read analog and digital sensor
 */

enum switchSW {
    //% block="Press"
    Press,
    //% block="No Press"
    noPress
}

enum switchLED {
    //% block="On"
    ON,
    //% block="Off"
    OFF
}

//% weight=8 icon="\uf2a3" color=#0066CC block="OK_Sensor"
namespace OK_Sensor {
    export enum analogPort {
        P0,
        P1,
        P2,
        P3,
        P4,
        P10
    }

    export enum digitalPort {
        P0,
        P1,
        P2,
        P3,
        P4,
        P5,
        P6,
        P7,
        P8,
        P9,
        P10,
        P11,
        P12


    }

    /**
     * LED On-Off from sensor value from P0-P12
     * @param selectpins         select digital pin to read
     * @return number           returns digital value  0 or 1
	 * @param pausetime  	mSec to delay; eg: 100
     */
    //% blockId=Led
    //% block="LED |%switchLED|%selectpins|puase%pausetime|mS"
    //% weight=100
    export function LED(switchL: switchLED, selectpins: digitalPort, pausetime: number) {
        if (switchL == 0) {
            if (selectpins == 0) { pins.digitalWritePin(DigitalPin.P0, 0) }
            else if (selectpins == 1) { pins.digitalWritePin(DigitalPin.P1, 0) }
            else if (selectpins == 2) { pins.digitalWritePin(DigitalPin.P2, 0) }
            else if (selectpins == 3) { pins.digitalWritePin(DigitalPin.P3, 0) }
            else if (selectpins == 4) { pins.digitalWritePin(DigitalPin.P4, 0) }
            else if (selectpins == 5) { pins.digitalWritePin(DigitalPin.P5, 0) }
            else if (selectpins == 6) { pins.digitalWritePin(DigitalPin.P6, 0) }
            else if (selectpins == 7) { pins.digitalWritePin(DigitalPin.P7, 0) }
            else if (selectpins == 8) { pins.digitalWritePin(DigitalPin.P8, 0) }
            else if (selectpins == 9) { pins.digitalWritePin(DigitalPin.P9, 0) }
            else if (selectpins == 10) { pins.digitalWritePin(DigitalPin.P10, 0) }
            else if (selectpins == 11) { pins.digitalWritePin(DigitalPin.P11, 0) }
            else if (selectpins == 12) { pins.digitalWritePin(DigitalPin.P12, 0) }
            basic.pause(pausetime)
        }
        if (switchL == 1) {
            if (selectpins == 0) { pins.digitalWritePin(DigitalPin.P0, 1) }
            else if (selectpins == 1) { pins.digitalWritePin(DigitalPin.P1, 1) }
            else if (selectpins == 2) { pins.digitalWritePin(DigitalPin.P2, 1) }
            else if (selectpins == 3) { pins.digitalWritePin(DigitalPin.P3, 1) }
            else if (selectpins == 4) { pins.digitalWritePin(DigitalPin.P4, 1) }
            else if (selectpins == 5) { pins.digitalWritePin(DigitalPin.P5, 1) }
            else if (selectpins == 6) { pins.digitalWritePin(DigitalPin.P6, 1) }
            else if (selectpins == 7) { pins.digitalWritePin(DigitalPin.P7, 1) }
            else if (selectpins == 8) { pins.digitalWritePin(DigitalPin.P8, 1) }
            else if (selectpins == 9) { pins.digitalWritePin(DigitalPin.P9, 1) }
            else if (selectpins == 10) { pins.digitalWritePin(DigitalPin.P10, 1) }
            else if (selectpins == 11) { pins.digitalWritePin(DigitalPin.P11, 1) }
            else if (selectpins == 12) { pins.digitalWritePin(DigitalPin.P12, 1) }
            basic.pause(pausetime)
        }
    }

    /**
     * Switch Press-No from sensor value from P0-P12
     * @param selectpins         select digital pin to read
     * @return number           returns digital value  0 or 1
     */
    //% blockId=Switch
    //% block="Switch |%switchSW|%selectpins"
    //% weight=100
    export function Switch(Switch: switchSW, selectpins: digitalPort) {
        if (Switch == 0) {
            if (selectpins == 0) { pins.digitalWritePin(DigitalPin.P0, 0) }
            else if (selectpins == 1) { pins.digitalWritePin(DigitalPin.P1, 0) }
            else if (selectpins == 2) { pins.digitalWritePin(DigitalPin.P2, 0) }
            else if (selectpins == 3) { pins.digitalWritePin(DigitalPin.P3, 0) }
            else if (selectpins == 4) { pins.digitalWritePin(DigitalPin.P4, 0) }
            else if (selectpins == 5) { pins.digitalWritePin(DigitalPin.P5, 0) }
            else if (selectpins == 6) { pins.digitalWritePin(DigitalPin.P6, 0) }
            else if (selectpins == 7) { pins.digitalWritePin(DigitalPin.P7, 0) }
            else if (selectpins == 8) { pins.digitalWritePin(DigitalPin.P8, 0) }
            else if (selectpins == 9) { pins.digitalWritePin(DigitalPin.P9, 0) }
            else if (selectpins == 10) { pins.digitalWritePin(DigitalPin.P10, 0) }
            else if (selectpins == 11) { pins.digitalWritePin(DigitalPin.P11, 0) }
            else if (selectpins == 12) { pins.digitalWritePin(DigitalPin.P12, 0) }
        }
        if (Switch == 1) {
            if (selectpins == 0) { pins.digitalWritePin(DigitalPin.P0, 1) }
            else if (selectpins == 1) { pins.digitalWritePin(DigitalPin.P1, 1) }
            else if (selectpins == 2) { pins.digitalWritePin(DigitalPin.P2, 1) }
            else if (selectpins == 3) { pins.digitalWritePin(DigitalPin.P3, 1) }
            else if (selectpins == 4) { pins.digitalWritePin(DigitalPin.P4, 1) }
            else if (selectpins == 5) { pins.digitalWritePin(DigitalPin.P5, 1) }
            else if (selectpins == 6) { pins.digitalWritePin(DigitalPin.P6, 1) }
            else if (selectpins == 7) { pins.digitalWritePin(DigitalPin.P7, 1) }
            else if (selectpins == 8) { pins.digitalWritePin(DigitalPin.P8, 1) }
            else if (selectpins == 9) { pins.digitalWritePin(DigitalPin.P9, 1) }
            else if (selectpins == 10) { pins.digitalWritePin(DigitalPin.P10, 1) }
            else if (selectpins == 11) { pins.digitalWritePin(DigitalPin.P11, 1) }
            else if (selectpins == 12) { pins.digitalWritePin(DigitalPin.P12, 1) }
        }
    }

    /**
     * read analog sensor value from P0 -P4 and P10
     * @param selectpin         select analog pin to read
     * @return number           returns analog value from 0 to 1023
     */
    //% blockId=AnalogRead
    //% block="analog read |%selectpin|"
    //% weight=40
    export function analogRead(selectpin: analogPort): number {
        switch (selectpin) {
            case analogPort.P0:
                return pins.analogReadPin(AnalogPin.P0);
            case analogPort.P1:
                return pins.analogReadPin(AnalogPin.P1);
            case analogPort.P2:
                return pins.analogReadPin(AnalogPin.P2);
            case analogPort.P3:
                return pins.analogReadPin(AnalogPin.P3);
            case analogPort.P4:
                return pins.analogReadPin(AnalogPin.P4);
            case analogPort.P10:
                return pins.analogReadPin(AnalogPin.P10);
            default:
                return 0;
        }
    }

    /**
     * read Digital sensor value from P0-P12
     * @param selectpins         select digital pin to read
     * @return number           returns digital value  0 or 1
     */
    //% blockId=DigitalRead
    //% block="digital read |%selectpins|"
    //% weight=39
    export function digitalRead(selectpins: digitalPort): number {
        switch (selectpins) {
            case digitalPort.P0:
                return pins.digitalReadPin(DigitalPin.P0);
            case digitalPort.P1:
                return pins.digitalReadPin(DigitalPin.P1);
            case digitalPort.P2:
                return pins.digitalReadPin(DigitalPin.P2);
            case digitalPort.P3:
                return pins.digitalReadPin(DigitalPin.P3);
            case digitalPort.P4:
                return pins.digitalReadPin(DigitalPin.P4);
            case digitalPort.P5:
                return pins.digitalReadPin(DigitalPin.P5);
            case digitalPort.P6:
                return pins.digitalReadPin(DigitalPin.P6);
            case digitalPort.P7:
                return pins.digitalReadPin(DigitalPin.P7);
            case digitalPort.P8:
                return pins.digitalReadPin(DigitalPin.P8);
            case digitalPort.P9:
                return pins.digitalReadPin(DigitalPin.P9);
            case digitalPort.P10:
                return pins.digitalReadPin(DigitalPin.P10);
            case digitalPort.P11:
                return pins.digitalReadPin(DigitalPin.P11);
            case digitalPort.P12:
                return pins.digitalReadPin(DigitalPin.P12);
            default:
                return 0;
        }
    }

	/**
     * terminal OLED height and width
     * @param selectpins         select digital pin to read
     * @param height    Height; eg: 64
	 * @param width    Width; eg: 128
     */
    //% blockId=oled_init_terminal
    //% weight=38
    //% block="initialize OLED with height %height|width %width"
    //% color=#009999
    //% icon="\uf1ec" 
    //% shim=OLED::init_terminal
    export function init(height: number, width: number): void {
        return;
    }
    /**
         * clears the screen.
         */
    //% weight=35
    //% blockId=oled_clear_screen
    //% block="clear OLED display"
    //% color=#009999
    //% icon="\uf1ec" 
    //% shim=OLED::clearDisplay
    export function clear(): void {
        return;
    }
    /**
          * prints a string on the OLED display
          * @param text text to display, eg: "OK_Board, OLED!"
          */
    //% weight=37 blockGap=8
    //% block="show|string %text" 
    //% async
    //% blockId=oled_print_stringWithNewLine
    //% color=#009999
    //% icon="\uf1ec"
    //% shim=OLED::showStringWithNewLine
    export function showStringWithNewLine(text: string): void {
        console.log("display: " + text);
        return;
    }

    /**
         * prints a number on the OLED display with a newline
         * @param number number to display 
         */
    //% weight=36
    //% blockId=oled_print_number1
    //% block="show|number %number" blockGap=8
    //% color=#009999
    //% async 
    //% shim=OLED::showNumberWithNewLine
    export function showNumberWithNewLine(number: number): void {
        console.log("display: " + number);
        return;
    }
}
