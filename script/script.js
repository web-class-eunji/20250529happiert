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