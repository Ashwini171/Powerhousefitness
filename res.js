burger= document.querySelector('.burger')
navbar= document.querySelector('.navbar')
navlist= document.querySelector('.navlist')
rightnav= document.querySelector('.rightnav')
burger.addEventListener('click',()=>{
    rightnav.classList.toggle('visbile');
    navlist.classList.toggle('visbile');
    navbar.classList.toggle('hnav')

})
