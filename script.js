
//ELEMENT SELECTORS
const loadText = document.querySelector('.loading-text') 
const bg = document.querySelector('.bg')
const circle = document.querySelector('.circle')

//TIMING VARIABLE
let load = 0
//initiate blurring function which decreases blur effect by 1% every 30 milliseconds
let int = setInterval(blurring, 30)

//blurring function. counts to 100 then stops
function blurring() {
    load++
    console.log(load)

    if (load > 99) {
        clearInterval(int)  
        
    }

    loadText.innerText = `${load}%` //assigns the text element on the page to the counter variable
    loadText.style.opacity = scale(load, 0, 100, 1, 0) //causes text to fade out (opacity from 1 to 0) while load counts to 100
    circle.style.opacity = scale(load, 0, 100, 1, 0) //circle fades
    bg.style.filter = `blur(${scale(load, 0, 100, 25, 0)}px)` //background scales from 25% blur to 0 while load counts from 0 to 100

}

//map a range of numbers to another range of numbers
//logic taken from: https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (number, inMin, inMax, outMin, outMax) => {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}