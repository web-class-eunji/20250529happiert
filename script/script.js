// 헤더 페이드인 인터랙션
const header = document.querySelector("header");
let posY = 0;
// 스크롤의 위치값을 담는 변수가 될거임

window.addEventListener("scroll", (e) => {
    if (posY < window.scrollY) {
        headerHide();
    } else {
        headershow();
    }
    posY = window.scrollY;
});

function headerHide() {
    header.classList.add("hide");
}

function headershow() {
    header.classList.remove("hide");
}


// 스크롤페이드인 인터랙션
const content = document.getElementsByClassName("content");
window.addEventListener("scroll",()=>{
    const winH = window.innerHeight;
    for(let i = 0; i < content.length; i++){
        const contentTop = content[i].getBoundingClientRect().top;
        if(contentTop - winH < 0){
            content[i].classList.add("in");
        }else {
            content[i].classList.remove("in");
        }
    }
});