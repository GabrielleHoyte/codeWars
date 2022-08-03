function guessBlue(blueStart, redStart, bluePulled, redPulled) {
  let blueRemainder = blueStart - bluePulled
  let redRemainder = redStart - redPulled
  return blueRemainder / (blueRemainder + redRemainder)
}