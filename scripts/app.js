import { getPostsData } from "./service.js";
import { getPhotos } from "./service.js";

const dates = ["AUGUST 5, 2021", "JULY 22, 2021", "JULY 08, 2021"];
const images = [
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.fvkmrGHqfib51AW6t-YJ8gHaD4%26pid%3DApi&f=1",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.aN9TB_nJkMG8SbvFIZumHQHaE8%26pid%3DApi&f=1",
    "https://www.anchieta.br/hs-fs/hubfs/banner-graduacao-medicina-veterinaria.jpg?width=2121&name=banner-graduacao-medicina-veterinaria.jpg",
];
const cardTitleLimit = 20;
const cardTextLimit = 120;

const postsCards = document.querySelector(".posts-cards");
const staffImg = document.querySelectorAll(".staff-img");

init();
function init() {
    getPostsData().then((res) => fillPosts(res));
    getPhotos().then((res) => fillStaff(res));
}

function fillStaff(staff) {
    console.log(staff[0].url);
    console.log(staffImg[0]);

    for (let i = 0; i < staffImg.length; i++) {
        console.log(i);
        staffImg[i].setAttribute("src", staff[i].url);
    }
}

function fillPosts(list) {
    for (let i = 0; i < 3; i++) {
        //console.log(list[i]);

        const divContainer = document.createElement("div");
        divContainer.classList.add("card-content");

        const divImg = document.createElement("div");
        divImg.classList.add("card-img");
        const img = document.createElement("img");
        img.setAttribute("src", images[i]);
        //img.setAttribute("alt", list[i].title)
        divImg.appendChild(img);

        const divBody = document.createElement("div");
        divBody.classList.add("card-body");

        const title = document.createElement("h5");
        const date = document.createElement("p");
        const text = document.createElement("p");
        title.classList.add("card-text", "card-title");
        date.classList.add("card-date");
        text.classList.add("card-text");
        title.textContent = `${list[i].title.substr(0, cardTitleLimit)}...`;
        date.textContent = dates[i];
        text.textContent = `${list[i].body.substr(0, cardTextLimit)}...`;

        divBody.appendChild(title);
        divBody.appendChild(date);
        divBody.appendChild(text);

        divContainer.appendChild(divImg);
        divContainer.appendChild(divBody);

        postsCards.appendChild(divContainer);
    }
}
