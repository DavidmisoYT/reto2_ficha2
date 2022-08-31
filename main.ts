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
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            `)
        basic.showLeds(`
            # . . # .
            # # . # .
            # . # # .
            # . . # .
            # . . # .
            `)
        basic.showIcon(IconNames.Happy)
    }
    while (input.temperature() < 26) {
        basic.showLeds(`
            # # # # #
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            `)
        basic.showLeds(`
            # # # . .
            # . . # .
            # # # . .
            # . . # .
            # # # . .
            `)
        basic.showIcon(IconNames.Ghost)
    }
    while (input.temperature() > 34) {
        basic.showLeds(`
            # # # # #
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            `)
        basic.showLeds(`
            . # # . .
            # . . # .
            # # # # .
            # . . # .
            # . . # .
            `)
        basic.showIcon(IconNames.Skull)
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
basic.showString("SELECIONAR ")
basic.showLeds(`
    . # # . .
    # . . # .
    # # # # .
    # . . # .
    # . . # .
    `)
