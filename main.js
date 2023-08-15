//Implement Tiny mobile menu

let mobileBtn = document.querySelector(".menu-btn")
let tinyMobileMenu = document.querySelector(".mobile-menu")

mobileBtn.addEventListener("click", () => {
        if(tinyMobileMenu.classList.contains('active')){
              tinyMobileMenu.classList.remove('active')
        }else{
              tinyMobileMenu.classList.add('active')
        }
})


let countdown = document.getElementById('count')
let deadline = new Date("Aug 30, 2023 00:00:00").getTime();

let interval = setInterval(() => {
      let now = new Date().getTime();

      let time = deadline - now;

      //get value of days, hours, minutes and seconds
      let days = Math.floor(time / (1000 * 60 * 60 * 24));
      let hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((time % (1000 * 60)) / 1000);

      countdown.innerText = `${days}d ${hours} hrs ${minutes}min ${seconds}s`


      if(time < 0){
            clearInterval(interval);
            countdown.innerText = 'Expired'
      }
})

const someData = [
      {name:"cool proj", url:"www.blabla", imgUrl:'img', tag:"UI/UX"},
      {name: "proj 2",url:"www.blabla", imgUrl:'', tag:"MERN"},
      {name: "proj3",url:"www.blabla", imgUrl:'', tag:"UI/UX"},
      ]
const filter = [...new Set(someData.map(item => item.tag))]
console.log(filter)