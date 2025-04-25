let A = 0
let B = 0
let M = 0
let S = 0
let L = 0
input.onButtonPressed(Button.A, function () {
    A = 9
    B = 6
    M = 1
    S = Math.min(A, B)
    L = Math.max(A, B)
    while (!(S * M % L == 0)) {
        M += 1
    }
    basic.showString("LCM:")
    basic.showNumber(S * M)
    basic.showString("HCF:")
    basic.showNumber(M)
})
