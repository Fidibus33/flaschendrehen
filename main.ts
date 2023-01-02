input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.setLedColor(0xff0000)
    basic.showString("=")
    if (Spieler > 3) {
        Spieler += -1
    }
    basic.showNumber(Spieler)
    for (let index = 0; index < 10; index++) {
        basic.setLedColor(0x0000ff)
        basic.pause(100)
        basic.setLedColor(0xff0000)
    }
    basic.setLedColor(0x000000)
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    music.playTone(370, music.beat(BeatFraction.Whole))
    basic.setLedColor(0x00ff00)
    basic.showString("=")
    if (Spieler < 8) {
        Spieler += 1
    }
    basic.showNumber(Spieler)
    for (let index = 0; index < 10; index++) {
        basic.setLedColor(0x0000ff)
        basic.pause(100)
        basic.setLedColor(0xff0000)
        basic.pause(100)
    }
    basic.setLedColor(0x000000)
    basic.showLeds(`
        . # . # .
        # . # . #
        # . . . #
        . # . # .
        . . # . .
        `)
})
input.onGesture(Gesture.Shake, function () {
    let list2: number[] = []
    Platz = 0
    Index = 0
    Kreis = randint(0, 3)
    Gewinner = randint(1, Spieler)
    Index = 1
    for (let Wert of list) {
        if (Wert == 1) {
            Index += 1
        }
        if (Index == Spieler) {
            list2.push(Wert)
        }
    }
    for (let index = 0; index < Spieler - 0; index++) {
        Index += 1
        Platz = Platz + Index
    }
    Platz = Platz + Gewinner - 3
    for (let index = 0; index < 3; index++) {
        Symbol = 9
        Ausgabe()
        basic.pause(50)
        Symbol = 10
        Ausgabe()
        basic.pause(50)
    }
    for (let Wert of list) {
        Symbol = Wert
        Ausgabe()
        basic.pause(100)
    }
    for (let index = 0; index < Kreis; index++) {
        for (let Wert of list2) {
            Symbol = Wert
            Ausgabe()
            basic.pause(150)
        }
    }
    for (let Index = 0; Index <= Gewinner - -1; Index++) {
        Symbol = Index + 0
    }
    for (let index = 0; index < 2; index++) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.pause(150)
        Symbol = list2[Gewinner - 1]
        Ausgabe()
        basic.pause(150)
    }
    Symbol = list2[Gewinner - 1]
    Ausgabe()
    music.playMelody("E E - G A A B - ", 244)
})
function Ausgabe () {
    if (Symbol == 1) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    } else if (Symbol == 2) {
        basic.showLeds(`
            . . . . #
            . . . # .
            # . # . .
            # # . . .
            # # # . .
            `)
    } else if (Symbol == 3) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    } else if (Symbol == 4) {
        basic.showLeds(`
            # # # . .
            # # . . .
            # . # . .
            . . . # .
            . . . . #
            `)
    } else if (Symbol == 5) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else if (Symbol == 6) {
        basic.showLeds(`
            . . # # #
            . . . # #
            . . # . #
            . # . . .
            # . . . .
            `)
    } else if (Symbol == 7) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    } else if (Symbol == 8) {
        basic.showLeds(`
            # . . . .
            . # . . .
            . . # . #
            . . . # #
            . . # # #
            `)
    } else if (Symbol == 9) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    } else {
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            `)
    }
}
let Symbol = 0
let Gewinner = 0
let Kreis = 0
let Index = 0
let Platz = 0
let list: number[] = []
let Spieler = 0
basic.showString("Flaschendrehen")
music.playMelody("G A B C5 G A B A ", 120)
Spieler = 2
list = [
1,
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
8
]
basic.showString("Spieler")
basic.showNumber(Spieler)
