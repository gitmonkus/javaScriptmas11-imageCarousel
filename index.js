// Task:
// - Wire up the buttons to switch through the images in the imgs array. 
// - Make sure that the gallery works no matter how many images are added.
// - Decide/implement what to do when you reach either end of the array - do nothing and disable buttons, loop back round to the other end, or something else?
// - Remember to also update the alt tags.

// Stretch goals:
// - Add transitions for a smooth effect.
// - Allow the user to zoom in and out of the images.




// Play jingle
const audio = new Audio('audio/jingle.mp3')
document.getElementById("play-jingle").addEventListener('click', function() {
    audio.volume = .3
    audio.play()
})

// Image Sizer
let imgHeight = 300
document.getElementById('plus').addEventListener('click', function() {
    if (imgHeight <= 400) {
        imgHeight += 20
        img.style.height = `${imgHeight}px`
    
    }
})
document.getElementById('minus').addEventListener('click', function() {
    if (imgHeight > 300) {
        imgHeight -= 20
        img.style.height = `${imgHeight}px`
    }
})

// IMAGE CAROUSEL
const img = document.getElementById("img")

const imgs = [
    {src: "imgs/village.jpg",
    alt: "christmas village at night with snow and christmas tree"},
    {src: "imgs/present.jpg",
    alt: "white and gold wrapped present on white table with snowflake decorations"},
    {src: "imgs/doggies.jpg",
    alt: "small black dog and small beige dog looking out the window at snow next to Christmas wreath"}]

let imgNum = 0
  
function setImgAttributes() {
        img.setAttribute('src', imgs[imgNum].src)
        img.setAttribute('alt', imgs[imgNum].alt)
}

document.getElementById("next").addEventListener('click', function() {
    if (imgNum === imgs.length - 1) {
        imgNum = 0
    } else {
        imgNum++
    }
        setImgAttributes()
})
document.getElementById("previous").addEventListener('click', function() {
       if (imgNum === 0) {
        imgNum = imgs.length - 1
    } else {
        imgNum--
    }
        setImgAttributes()
})
