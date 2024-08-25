let icon = document.querySelector(".links .icon");
let list = document.querySelector(".links .list");
let scrollButton = document.querySelector(".scroll-button");

icon.onclick = () => {
    icon.classList.toggle("close");
    list.classList.toggle("show");
};

document.onclick = (event) => {
    if (
        !event.target.classList.contains("icon") &&
        !event.target.classList.contains("list")
    ) {
        icon.classList.remove("close");
        list.classList.remove("show");
    }
};

window.onscroll = () => {
    if (window.scrollY > "500") {
        scrollButton.classList.add("show");
    } else {
        scrollButton.classList.remove("show");
    }
};

scrollButton.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};
