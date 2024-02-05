let scrollBtn = document.getElementById('upBtn')
let up = document.getElementById('up')
let more = document.getElementById('loadMore')
let Els = document.querySelectorAll('.meal-card')

window.onscroll = function () {
    if (scrollY >= 400) {
        scrollBtn.style.display = 'block'
    }
    else {
        scrollBtn.style.display = 'none'
    }
}

scrollBtn.onclick = function () {
    scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
}

more.addEventListener('click', showele)


function showele() {

    let mode = true
    let num = 12
    
    if (mode == true) {

        for (let i = 0; i < num; i++) {
            Els[i].classList.toggle('show')
            more.innerHTML = 'Show Less'
        }
    }
    if(mode == false){
        mode = true
        more.innerHTML = 'Load More '
    }
}








// start REveal 

// ScrollReveal({
//     reset:true,
//     duration:2500,
//     delay:100,
//     distance:'60px'
// })

// ScrollReveal().reveal(".main")
// // End REveal 


// // // // // way Two to reveal 
let reveal = document.querySelectorAll('.hidden')

const observer = new IntersectionObserver(e => {
    e.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal')
        } else {
            entry.target.classList.remove('reveal')
        }
    })
})
reveal.forEach(ele => {
    observer.observe(ele)
})



// slide Cutomer Opinion 
let lft = document.querySelector('.left')
let rgt = document.querySelector('.right')
let about = document.querySelectorAll('.about-us')
console.log(about)


lft.onclick = function () {
    about.target.classList.add('slideShow')
    console.log('slide')
lft.style.color = 'red'
}


// slide Cutomer Opinion 