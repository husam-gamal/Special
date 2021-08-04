

let landingImageChanger;
let landingPage = document.querySelector('.landing-page');
let navList = document.querySelector('.landing-page .header-area ul');
let navListBtn = document.querySelector('.landing-page .header-area button');
let siteColors = document.querySelectorAll('.setting-box .box ul li');
let ImageChagingBtns = document.querySelectorAll('.setting-box .box .rand button');


navListBtn.onclick = function(e){
    navList.style.display = 'block'
    e.stopPropagation();
}

document.addEventListener('click', (e) => {
    if(e.target !== navList && e.target !== navListBtn && window.innerWidth < 720){
        navList.style.display = 'none'
    }
});
window.onresize = function() {
    if(window.innerWidth > 720){
        navList.removeAttribute('style');
    }
}

// scrolle effects
let skills = document.querySelector('.skills');
let skillsProg = document.querySelectorAll('.skills .prog');
window.onscroll = function(){
    if(window.scrollY > (skills.offsetTop + skills.offsetHeight - window.innerHeight)){
        skillsProg.forEach(e =>{
            e.style.width = e.getAttribute('data')
        })
    }
}

function setupSetting() {
    // main color
    let color = localStorage.getItem('main-color')
    if(color != null) {
        document.querySelector(':root').style.setProperty('--main-color', localStorage.getItem('main-color'));
        siteColors.forEach(function(element) {
            element.classList.remove('active');
            if(element.style.backgroundColor == localStorage.getItem('main-color'))
            element.classList.add('active');
        })
    }
    // change background
    let changer = localStorage.getItem('image-changer')
    if(changer === 'true') {
        imageChaging()
    }else if(changer === 'false'){
        ImageChagingBtns[1].classList.add('active')
        ImageChagingBtns[0].classList.remove('active')
    }
}

// change main color of site
function setMainColor(selected) {
    siteColors.forEach(function(element) {
        element.classList.remove('active')
    })
    selected.classList = 'active'
    document.querySelector(':root').style.setProperty('--main-color',selected.style.backgroundColor);
    localStorage.setItem('main-color', selected.style.backgroundColor)
}

// change background image of landing
function imageChaging() {
    let imagesArray = ['01.jpg','02.jpg','03.jpg','04.jpg','05.jpg'];
    landingImageChanger = setInterval(function(){
        let randomIndex = Math.floor(Math.random() * imagesArray.length)
        landingPage.style.backgroundImage = 'url("images/' + imagesArray[randomIndex] + '")'
    },3000);
}
function startImageChaging(selected) {
    clearInterval(landingImageChanger);
    ImageChagingBtns.forEach(function(element) {
        element.classList.remove('active')
    });
    selected.classList = 'active';
    localStorage.setItem('image-changer', 'true')
    imageChaging()
}
function stopImageChaging(selected) {
    ImageChagingBtns.forEach(function(element) {
        element.classList.remove('active')
    })
    selected.classList = 'active';
    clearInterval(landingImageChanger);
    localStorage.setItem('image-changer', 'false')
}












let galleryPopup = document.querySelector('.gallery .popup');
let galleryPopupTitle = document.querySelector('.gallery .popup .box h2');
let galleryPopupImage = document.querySelector('.gallery .popup .box img');
let galleryPopupBtn = document.querySelector('.gallery .popup .box span');
function closeGalleryPopup() {
    galleryPopup.classList.add('hidding');
}
function openGalleryPopup(image) {
    galleryPopupTitle.textContent = image.getAttribute('alt')
    galleryPopupImage.src = image.src;
    galleryPopup.classList.remove('hidding');
}



function reusePlaceholder(e) {
    e.setAttribute('placeholder',e.getAttribute('data'))
}
function removePlaceholder(e) {
    e.setAttribute('data', e.getAttribute('placeholder'))
    e.removeAttribute('placeholder')
}

