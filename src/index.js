function setTime(){
  const secondsHand = document.querySelector('.second-hand')
  const minutesHand = document.querySelector('.min-hand')
  const hoursHand = document.querySelector('.hour-hand')

  let todaysDate = new Date()
  let seconds = todaysDate.getSeconds()
  let minutes = todaysDate.getMinutes()
  let hours = todaysDate.getHours()

  // When calculating degrees, we have to add 90 degrees because we offsey the hands by 90 in the CSS
  let secondsDegrees = (((seconds/60)*360)+90)
  let minutesDegrees = (((minutes/60)*360)+90)
  let hoursDegrees = (((hours/12)*360)+90)

  // Styling
  secondsHand.style.transform = `rotate(${secondsDegrees}deg)`
  minutesHand.style.transform = `rotate(${minutesDegrees}deg)`
  hoursHand.style.transform = `rotate(${hoursDegrees}deg)`
}

// we want to set the interval for 1000 seconds because thats when the first change in our site happens -- when seconds are updated.
setInterval(setTime, 1000)

// ------- BONUSSSSS ------ //
// When you click a button that says "Party Time", the background strobes -- extra bonus points if we can make the whole clock jump

// How would we go about creating a strobe effect? What is a strobe effect? It's a bunch of random colors -- so we would need to create a function that generates random colors and assigns them to the background after maybe 100 miliseconds (call that function in intervals) and then clear it after a few seconds.

function partyTimeSetUp(){
  let r = `${Math.floor(Math.random() * Math.floor(99))}`
  let b = `${Math.floor(Math.random() * Math.floor(99))}`
  let g = `${Math.floor(Math.random() * Math.floor(99))}`
  let color = r.concat(b).concat(g)

  const background = document.getElementsByTagName("HTML")[0]

  background.style.background = `#${color}`
}


function partyTime(){
  let counter = 0
  let timer = setInterval(() => {
    counter+=1
    console.log(counter)
    partyTimeSetUp()
    if (counter === 400){
      clearInterval(timer)
      console.log("interval cleared")
    }
  }, 5)



}

// We're going to add a counter to limit the amount of times setInterval runs
