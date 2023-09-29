
const navicon = document.getElementById('menu-bar-nav');
navicon.addEventListener('click',function() {
    const navitems = document.getElementById('mobile-menu-div');
    navitems.classList.remove('closed-menu');
});

const wrongicon = document.getElementById('wrong-mark');
wrongicon.addEventListener('click',function(){
    const navitems = document.getElementById('mobile-menu-div');
    navitems.classList.add('closed-menu');
});

const responsive = document.querySelectorAll('.menu-items-respon');
responsive.forEach(item => {
    item.addEventListener('click',function() {
        const navitems = document.getElementById('mobile-menu-div');
        navitems.classList.add('closed-menu');
    });
})

const formsubmit = document.querySelector('#form-submit');
formsubmit.addEventListener('click',function(){
    
    const input1 = document.getElementById('name');
    const input2 = document.getElementById('email');

    if(input1.value!="" && input2.value!=""){
        const matter = document.getElementById('submit-response');
        matter.textContent = "Thanks for contacting! I will reply as soon as possible";
    }
});