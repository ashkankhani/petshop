const addresses = [
    '../images/banner1.png',
    '../images/banner2.png'
]
let scrollContainer = document.getElementById('container1');
let scrollContainer2 = document.getElementById('container2');

let backBtn = document.getElementById('backBtn');
let nextBtn = document.getElementById('nextBtn');

let backBtn2 = document.getElementById('backBtn2');
let nextBtn2 = document.getElementById('nextBtn2');

nextBtn.addEventListener('click' , (e) => {
    console.log('click')
    scrollContainer.style.scrollBehavior = 'smooth';
    scrollContainer.scrollLeft -= 500;
})

backBtn.addEventListener('click' , (e) => {
    scrollContainer.style.scrollBehavior = 'smooth';
    scrollContainer.scrollLeft += 500;
})

nextBtn2.addEventListener('click' , (e) => {
    scrollContainer2.style.scrollBehavior = 'smooth';
    scrollContainer2.scrollLeft -= 500;
})

backBtn2.addEventListener('click' , (e) => {
    scrollContainer2.style.scrollBehavior = 'smooth';
    scrollContainer2.scrollLeft += 500;
})

const banner = document.querySelector('#banner');

back = document.getElementById('back')
next = document.getElementById('next')


const handleClick = () => {
    const address = banner.getAttribute('src');
    if(address == addresses[0]){
        banner.setAttribute('src' , addresses[1])
    }else{
        banner.setAttribute('src' , addresses[0])
    }
}

setInterval(handleClick , 5000);
back.addEventListener('click' , handleClick);
next.addEventListener('click' , handleClick);
