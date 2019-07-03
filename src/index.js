// To update the hands of the clock, make a function that updates every second -- We are adding 90 to the "second degrees" because we offset the hands by 90 degrees

function setSeconds() {
  let todaysDate = new Date()
  let seconds = todaysDate.getSeconds()
  let secondDegrees = (((seconds/60)*360)+90)
  setSecondHandStyle(secondDegrees)
}

// grab the second hand and apply the styling

function setSecondHandStyle(degrees){
  const secondHand = document.querySelector('.second-hand')
  secondHand.style.transform = `rotate(${degrees}deg)`
}

setInterval(setSeconds, 1000)

// The second-hand is transforming according to what secondDegree we are on now. "SetSeconds" is running every second because we want to know at what second we're on every time a second passes.

//--------------------------Set Minutes--------------------------//

function setMinutes(){
  let todaysDate = new Date()
  let minutes = todaysDate.getMinutes()
  let minuteDegrees = (((minutes/60) *360)+90)
  setMinuteHandStyle(minuteDegrees)
}

function setMinuteHandStyle(degrees){
  const minuteHand = document.querySelector('.min-hand')
  minuteHand.style.transform = `rotate(${degrees}deg)`
}

setInterval(setMinutes, 60000-)
