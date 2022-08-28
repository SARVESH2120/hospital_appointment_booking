
// navbar toggling
const navbarShowBtn = document.querySelector('.navbar-show-btn');
const navbarCollapseDiv = document.querySelector('.navbar-collapse');
const navbarHideBtn = document.querySelector('.navbar-hide-btn');

navbarShowBtn.addEventListener('click', function(){
    navbarCollapseDiv.classList.add('navbar-show');
});
navbarHideBtn.addEventListener('click', function(){
    navbarCollapseDiv.classList.remove('navbar-show');
});

// changing search icon image on window resize
window.addEventListener('resize', changeSearchIcon);
function changeSearchIcon(){
    let winSize = window.matchMedia("(min-width: 1200px)");
    if(winSize.matches){
        document.querySelector('.search-icon img').src = "images/search-icon.png";
    } else {
        document.querySelector('.search-icon img').src = "images/search-icon-dark.png";
    }
}
changeSearchIcon();

// stopping all animation and transition
let resizeTimer;
window.addEventListener('resize', () =>{
    document.body.classList.add('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove('resize-animation-stopper');
    }, 400);
});




//main container inst
var container = document.querySelector(".container18");
var image=["/images/hospital-beds2.jpg",
           "/images/hospital-wallpaper1.jpg",
           "/images/hospital-beds2.jpg",
           "/images/hospital-wallpaper1.jpg"
    
];

var index=0;
function forward(){
    index++;
    if(index>image.length-1){
        index=0;
    }
    container.style.backgroundImage=`url(${image[index]})`;
}
function backward(){
    index--;
    if(index<0){
        index=image.length-1;
    }
    container.style.backgroundImage=`url(${image[index]})`;

}

