window.addEventListener('DOMContentLoaded', function () {
  window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0)
  })
  const menuBtn = document.querySelector('.menu-btn')
  const navigation = document.querySelector('.navigation')
  const navigationItems = document.querySelectorAll('.navigation a')

  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active')
    navigation.classList.toggle('active')
  })

  navigationItems.forEach(navItem => {
    navItem.addEventListener('click', () => {
      menuBtn.classList.remove('active')
      navigation.classList.remove('active')
    })
  })

  const scrollBtn = document.querySelector('.scrollToTop-btn')
  window.addEventListener('scroll', () => {
    scrollBtn.classList.toggle('active', window.scrollY > 500)
  })
  scrollBtn.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  })

  window.addEventListener('scroll', () => {
    let reveals = document.querySelectorAll('.reveal')

    for(let i = 0; i< reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let revealTop = reveals[i].getBoundingClientRect().top;
      let revealPoint = 50;

      if(revealTop < windowHeight - revealPoint) {
        reveals[i].classList.add('active')
      }
    }
  })
})
new Typed('#typed',{
  strings : ['Developer','Designer'],
  typeSpeed : 100,
  delaySpeed : 0,
  loop : true
});
new Typed('#typed2',{
  strings : ["Bekzod Kurbonov","a designer"," a frontend developer"],
  typeSpeed : 80,
  delaySpeed : 0,
  backSpeed:50,
  backDelay:10,
  loop:true,
  loopCount:2,
  showCursor:false
});

Aos.init({
  duration:1200
})