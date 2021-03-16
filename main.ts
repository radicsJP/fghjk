basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    if (input.buttonIsPressed(Button.A)) {
        while (!(input.buttonIsPressed(Button.B))) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.showIcon(IconNames.Heart)
        }
    } else if (input.buttonIsPressed(Button.B)) {
        while (!(input.buttonIsPressed(Button.AB))) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.showIcon(IconNames.No)
        }
    } else if (input.buttonIsPressed(Button.AB)) {
        while (!(input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B))) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
    }
})
