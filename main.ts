input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
    while (input.temperature() >= 26 && input.temperature() <= 34) {
        basic.showLeds(`
            # # # # #
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            `)
        basic.pause(100)
        basic.showLeds(`
            # . . # .
            # # . # .
            # . # # .
            # . . # .
            # . . # .
            `)
        basic.pause(100)
        basic.showIcon(IconNames.Happy)
        basic.pause(100)
        basic.showNumber(input.temperature())
    }
    while (input.temperature() < 26) {
        basic.showLeds(`
            # # # # #
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            `)
        basic.pause(100)
        basic.showLeds(`
            # # # . .
            # . . # .
            # # # . .
            # . . # .
            # # # . .
            `)
        basic.pause(100)
        basic.showIcon(IconNames.Ghost)
        basic.pause(100)
        basic.showNumber(input.temperature())
    }
    while (input.temperature() > 34) {
        basic.showLeds(`
            # # # # #
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . # # . .
            # . . # .
            # # # # .
            # . . # .
            # . . # .
            `)
        basic.pause(100)
        basic.showIcon(IconNames.Skull)
        basic.pause(100)
        basic.showNumber(input.temperature())
    }
})
for (let index = 0; index < 2; index++) {
    basic.showLeds(`
        . # # # .
        # . . . #
        # . . . #
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . # # # .
        # . . . #
        # . # . #
        # . . . #
        . # # # .
        `)
}
basic.showString(" INICIAR INCUBACION")
basic.showIcon(IconNames.Tortoise)
basic.showString(" SELECIONAR ")
basic.showLeds(`
    . # # . .
    # . . # .
    # # # # .
    # . . # .
    # . . # .
    `)
