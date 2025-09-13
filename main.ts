input.onButtonPressed(Button.A, function () {
    if (limitoffeed == 0) {
        limitoffeed = 1
        basic.pause(100)
        if (food > 0) {
            basic.clearScreen()
            basic.pause(200)
            food += -1
            datalogger.log(datalogger.createCV("food", -1))
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # . # .
                . . # . .
                `)
            basic.pause(200)
            basic.clearScreen()
            basic.showString("+5")
            hunger += 5
            datalogger.log(datalogger.createCV("hunger", 5))
            basic.pause(500)
            basic.clearScreen()
            limitoffeed = 0
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # # .
                . . . . .
                `)
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    if (feedhavelimit == 0) {
        feedhavelimit = 1
        basic.clearScreen()
        basic.pause(200)
        basic.showString("You Have:")
        basic.pause(300)
        basic.showString("" + (food))
        basic.showString("food")
        basic.pause(200)
        basic.clearScreen()
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            . . . . .
            `)
        feedhavelimit = 0
    }
})
input.onButtonPressed(Button.B, function () {
    if (limit == 0) {
        limit = 1
        basic.pause(100)
        if (randint(0, 5) == 3) {
            basic.clearScreen()
            basic.pause(200)
            basic.showLeds(`
                # # # . .
                # # # . .
                # # # . .
                . . . # .
                . . . . #
                `)
            basic.showString("+1")
            food += 1
            datalogger.log(datalogger.createCV("food", 1))
            basic.pause(300)
            basic.clearScreen()
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # # .
                . . . . .
                `)
            basic.pause(200)
            limit = 0
        } else {
            basic.clearScreen()
            basic.pause(200)
            basic.showLeds(`
                # . . . #
                . # . # .
                . . # . .
                . # . # .
                # . . . #
                `)
            basic.pause(300)
            basic.clearScreen()
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # # .
                . . . . .
                `)
            limit = 0
        }
    } else {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            . . . . .
            `)
    }
})
let warnlimit = 0
let limit = 0
let feedhavelimit = 0
let limitoffeed = 0
let hunger = 0
let food = 0
datalogger.setColumnTitles("food")
datalogger.setColumnTitles("hunger")
datalogger.log(datalogger.createCV("food", food))
datalogger.log(datalogger.createCV("hunger", hunger))
basic.clearScreen()
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    . # # # .
    . . . . .
    `)
basic.forever(function () {
    if (hunger > 100) {
        hunger = 100
        datalogger.log(datalogger.createCV("hunger", 100))
    }
})
basic.forever(function () {
    if (warnlimit == 0) {
        warnlimit = 1
        if (hunger == 10) {
            basic.clearScreen()
            hunger += -1
            datalogger.log(datalogger.createCV("hunger", 9))
            basic.pause(200)
            basic.showString("!!!")
            basic.pause(500)
            basic.clearScreen()
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # # .
                . . . . .
                `)
            warnlimit = 0
        }
    }
})
basic.forever(function () {
    basic.pause(15000)
    hunger += -1
    datalogger.log(datalogger.createCV("hunger", -1))
})
