/* ============================= typing animation =============================*/ 
var typed = new Typed(".typing", {
    strings: ["", "Web Designer", "Web Developer", "Graphic Designer", "Mechanical Engineering Student"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true,
})

/* ============================= Aside =============================*/ 
const nav = document.querySelector('.nav'),
      navList = nav.querySelectorAll('li'),
      totalNavList = navList.length;
      for (let i = 0; i < totalNavList; i++) {
        const a = navList[i].querySelector('a');
        // console.log(a);

        a.addEventListener('click', function(){
            // console.log(this);
            for (let j = 0; j < totalNavList; j++) {
                navList[j].querySelector('a').classList.remove('active');
            }
            this.classList.add('active');
        })
      }