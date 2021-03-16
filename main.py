def on_forever():
    basic.show_icon(IconNames.HEART)
    if input.button_is_pressed(Button.A):
        while not (input.button_is_pressed(Button.B)):
            basic.show_leds("""
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                """)
            basic.show_icon(IconNames.HEART)
    elif not (input.button_is_pressed(Button.AB)):
        basic.show_leds("""
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            """)
        basic.show_icon(IconNames.NO)
    elif input.button_is_pressed(Button.AB):
        basic.show_leds("""
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            """)
    elif input.button_is_pressed(Button.A) or input.button_is_pressed(Button.B):
        basic.show_icon(IconNames.HEART)
basic.forever(on_forever)
