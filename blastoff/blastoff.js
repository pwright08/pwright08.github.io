var codeDigit1 = document.getElementById('code-digit-1')
var codeDigit2 = document.getElementById('code-digit-2')
var codeDigit3 = document.getElementById('code-digit-3')
var codeDigit4 = document.getElementById('code-digit-4')

function codeSubmit () {
  if (checkCode()) {
    document.body.style.backgroundColor = "black";
    document.getElementById('enterCode').hidden = true
    document.getElementById('vid').style = "height: 100vh; display: block; margin: auto; position: absolute; top: -9999px; bottom: -9999px; left: -9999px; right: -9999px;"
    document.getElementById('vid').currentTime = 124
    document.getElementById('vid').play()
  } else {
    changeElementColours('red')
    setTimeout(changeElementColours, 750, 'black')
  }
}

function checkCode () {
  return codeDigit1.value === '1' &&
    codeDigit2.value === '2' &&
    codeDigit3.value === '3' &&
    codeDigit4.value === '4'
}

function changeElementColours(colour) {
  document.getElementById('launch-header').style.color = colour

  codeDigit1.style.color = colour
  codeDigit2.style.color = colour
  codeDigit3.style.color = colour
  codeDigit4.style.color = colour
}
