let Note2 = 0
input.onButtonPressed(Button.A, function () {
    Note2 = randint(0, 6)
    if (Note2 == 0) {
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Breve)), music.PlaybackMode.UntilDone)
    } else if (Note2 == 1) {
        music.play(music.tonePlayable(294, music.beat(BeatFraction.Breve)), music.PlaybackMode.UntilDone)
    } else if (Note2 == 2) {
        music.play(music.tonePlayable(330, music.beat(BeatFraction.Breve)), music.PlaybackMode.UntilDone)
    } else if (Note2 == 3) {
        music.play(music.tonePlayable(349, music.beat(BeatFraction.Breve)), music.PlaybackMode.UntilDone)
    } else if (Note2 == 4) {
        music.play(music.tonePlayable(392, music.beat(BeatFraction.Breve)), music.PlaybackMode.UntilDone)
    } else if (Note2 == 5) {
        music.play(music.tonePlayable(440, music.beat(BeatFraction.Breve)), music.PlaybackMode.UntilDone)
    } else {
        music.play(music.tonePlayable(494, music.beat(BeatFraction.Breve)), music.PlaybackMode.UntilDone)
    }
})
input.onButtonPressed(Button.B, function () {
    Note2 = randint(0, 6)
    if (Note2 == 0) {
        basic.showString("C")
    } else if (Note2 == 1) {
        basic.showString("D")
    } else if (Note2 == 2) {
        basic.showString("E")
    } else if (Note2 == 3) {
        basic.showString("F")
    } else if (Note2 == 4) {
        basic.showString("G")
    } else if (Note2 == 5) {
        basic.showString("A")
    } else {
        basic.showString("B")
    }
})
basic.forever(function () {
	
})
