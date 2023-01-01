def on_button_a():
    global Spieler
    music.play_tone(262, music.beat(BeatFraction.WHOLE))
    basic.set_led_color(0xff0000)
    basic.show_string("=")
    if Spieler > 3:
        Spieler += -1
    basic.show_number(Spieler)
    for index in range(10):
        basic.set_led_color(0x0000ff)
        basic.pause(100)
        basic.set_led_color(0xff0000)
    basic.set_led_color(0x000000)
    basic.show_leds("""
        . # . # .
                # # # # #
                # # # # #
                . # # # .
                . . # . .
    """)
input.on_button_event(Button.A, input.button_event_click(), on_button_a)

def on_button_b():
    global Spieler
    music.play_tone(370, music.beat(BeatFraction.WHOLE))
    basic.set_led_color(0x00ff00)
    basic.show_string("=")
    if Spieler < 8:
        Spieler += 1
    basic.show_number(Spieler)
    for index2 in range(10):
        basic.set_led_color(0x0000ff)
        basic.pause(100)
        basic.set_led_color(0xff0000)
        basic.pause(100)
    basic.set_led_color(0x000000)
    basic.show_leds("""
        . # . # .
                # . # . #
                # . . . #
                . # . # .
                . . # . .
    """)
input.on_button_event(Button.B, input.button_event_click(), on_button_b)

def on_gesture_shake():
    global Platz, Index, Gewinner, Symbol
    Platz = 0
    Index = 0
    Gewinner = randint(1, Spieler)
    for index3 in range(Spieler - 0):
        Index += 1
        Platz = Platz + Index
    Platz = Platz + Gewinner - 3
    for index4 in range(9):
        Symbol = 9
        Ausgabe()
        basic.pause(50)
        Symbol = 10
        Ausgabe()
        basic.pause(50)
    for Wert in list2:
        Symbol = Wert
        Ausgabe()
        basic.pause(100)
    Symbol = list2[Platz]
    Ausgabe()
    music.play_melody("E E - G A A B - ", 244)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def Ausgabe():
    if Symbol == 1:
        basic.show_leds("""
            . . # . .
                        . . # . .
                        # . # . #
                        . # # # .
                        . . # . .
        """)
    elif Symbol == 2:
        basic.show_leds("""
            . . . . #
                        . . . # .
                        # . # . .
                        # # . . .
                        # # # . .
        """)
    elif Symbol == 3:
        basic.show_leds("""
            . . # . .
                        . # . . .
                        # # # # #
                        . # . . .
                        . . # . .
        """)
    elif Symbol == 4:
        basic.show_leds("""
            # # # . .
                        # # . . .
                        # . # . .
                        . . . # .
                        . . . . #
        """)
    elif Symbol == 5:
        basic.show_leds("""
            . . # . .
                        . # # # .
                        # . # . #
                        . . # . .
                        . . # . .
        """)
    elif Symbol == 6:
        basic.show_leds("""
            . . # # #
                        . . . # #
                        . . # . #
                        . # . . .
                        # . . . .
        """)
    elif Symbol == 7:
        basic.show_leds("""
            . . # . .
                        . . . # .
                        # # # # #
                        . . . # .
                        . . # . .
        """)
    elif Symbol == 8:
        basic.show_leds("""
            # . . . .
                        . # . . .
                        . . # . #
                        . . . # #
                        . . # # #
        """)
    elif Symbol == 9:
        basic.show_leds("""
            # . . . #
                        . # . # .
                        . . # . .
                        . # . # .
                        # . . . #
        """)
    else:
        basic.show_leds("""
            . . # . .
                        . . # . .
                        # # # # #
                        . . # . .
                        . . # . .
        """)
Symbol = 0
Gewinner = 0
Index = 0
Platz = 0
list2: List[number] = []
Spieler = 0
basic.show_string("Flaschendrehen")
music.play_melody("G A B C5 G A B A ", 120)
Modus = 0
Spieler = 2
list2 = [1,
    5,
    1,
    4,
    6,
    1,
    3,
    5,
    7,
    1,
    2,
    4,
    6,
    8,
    1,
    2,
    4,
    5,
    6,
    8,
    1,
    2,
    3,
    4,
    6,
    7,
    8,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8]
basic.show_string("Spieler")
basic.show_number(Spieler)