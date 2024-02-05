let scrollBtn = document.getElementById("upBtn");
let up = document.getElementById("up");
let more = document.getElementById("loadMore");
let Els = document.querySelectorAll(".meal-card");

window.onscroll = function () {
  if (scrollY >= 400) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};

scrollBtn.onclick = function () {
  scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

more.addEventListener("click", showele);

function showele() {
  let mode = true;
  let num = 12;

  if (mode == true) {
    for (let i = 0; i < num; i++) {
      Els[i].classList.toggle("show");
      more.innerHTML = "Show Less";
    }
  }
  if (mode == false) {
    mode = true;
    more.innerHTML = "Load More ";
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
// let reveal = document.querySelectorAll('.hidden')

// const observer = new IntersectionObserver(e => {
//     e.forEach(entry => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add('reveal')
//         } else {
//             entry.target.classList.remove('reveal')
//         }
//     })
// })
// reveal.forEach(ele => {
//     observer.observe(ele)
// })

let rev = document.querySelectorAll(".hidden");
const observer = new IntersectionObserver((e) =>
  e.forEach((event) => {
    if (event.isIntersecting) {
      event.target.classList.add("reveal");
    } else {
      event.target.classList.remove("reveal");
    }
  })
);

rev.forEach((ele) => observer.observe(ele));

// slide Cutomer Opinion
let lft = document.querySelector(".left");
let rgt = document.querySelector(".right");
let about = document.querySelectorAll(".about-us");
console.log(about);

lft.onclick = function () {
  about.target.classList.add("slideShow");
  console.log("slide");
  lft.style.color = "red";
};
// slide Cutomer Opinion

// This will create a button that, when clicked, will call the addImage() function. You can then define the addImage() function in your JavaScript code to perform the desired action, such as opening a file picker or allowing the user to drag and drop an image.

// // Here is an example of how you could implement the addImage() function:

// function addImage() {
//   // Create a new image element
//   var image = document.createElement("img");

//   // Set the image source to the selected file
//   image.src = URL.createObjectURL(event.target.files[0])

// }
("images/fried-squid-calamari-rings.jpg");
("images/fried-squid-calamari-rings.jpg");
("images/fried-squid-calamari-rings.jpg");
const data = [
  {
    id: 1,
    name: "smith",
    img: "https://images.pexels.com/photos/6651735/pexels-photo-6651735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    cat: "Breakfast",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad recusandae voluptatem distinctio culpa soluta labore \
       libero praesentium excepturi deserunt adipisci. .",
  },
  {
    id: 2,
    name: "kally",
    img: "images/fried-squid-calamari-rings.jpg",
    cat: "Dinner",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad recusandae voluptatem distinctio culpa soluta labore \
       libero praesentium excepturi deserunt adipisci. .",
  },
  {
    id: 3,
    name: "harry",
    img: "https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&cs=tinysrgb&w=600",
    cat: "Lunch",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad recusandae voluptatem distinctio culpa soluta labore \
       libero praesentium excepturi deserunt adipisci. .",
  },
  {
    id: 4,
    name: "john",
    img: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    cat: "fastFood",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad recusandae voluptatem distinctio culpa soluta labore \
       libero praesentium excepturi deserunt adipisci. .",
  },
  {
    id: 4,
    name: "john",
    img: "https://images.pexels.com/photos/6070394/pexels-photo-6070394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    cat: "healthyFood",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad recusandae voluptatem distinctio culpa soluta labore \
       libero praesentium excepturi deserunt adipisci. .",
  },
  {
    id: 1,
    name: "smith",
    img: "https://images.pexels.com/photos/6651735/pexels-photo-6651735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    cat: "Breakfast",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad recusandae voluptatem distinctio culpa soluta labore \
       libero praesentium excepturi deserunt adipisci. .",
  },
  {
    id: 2,
    name: "kally",
    img: "images/fried-squid-calamari-rings.jpg",
    cat: "Dinner",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad recusandae voluptatem distinctio culpa soluta labore \
       libero praesentium excepturi deserunt adipisci. .",
  },
  {
    id: 3,
    name: "harry",
    img: "https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&cs=tinysrgb&w=600",
    cat: "Lunch",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad recusandae voluptatem distinctio culpa soluta labore \
       libero praesentium excepturi deserunt adipisci. .",
  },
  {
    id: 4,
    name: "john",
    img: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    cat: "fastFood",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad recusandae voluptatem distinctio culpa soluta labore \
       libero praesentium excepturi deserunt adipisci. .",
  },
  {
    id: 4,
    name: "john",
    img: "https://images.pexels.com/photos/6070394/pexels-photo-6070394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    cat: "healthyFood",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad recusandae voluptatem distinctio culpa soluta labore \
       libero praesentium excepturi deserunt adipisci. .",
  },
];

let mealCategory = document.querySelectorAll(".types-nav ul li a");

mealCategory.forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    mealCategory.forEach((ele) => {
      ele.classList.remove("active");
    });
    e.target.classList.add("active");
    // console.log(e.target.innerHTML)
    let currenData = document.getElementsByClassName('active')
    console.log(currenData)
    getCategory(e.target.innerHTML);
  });
});

let imgArr = [];
let myData;
function getCategory(e) {
  data.filter((item) => {
    if (item.cat == e) {
      let img = document.createElement("img");
      img.src = item.src;
    }
  });
  imgArr.push(myData);
  console.log(imgArr);
}
