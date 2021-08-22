import { getPostsData } from "./service.js";
import { getPhotos } from "./service.js";
import { images } from "../db/imagenes.js";

// variables
const dates = ["AUGUST 5, 2021", "JULY 22, 2021", "JULY 08, 2021"];
const cardTitleLimit = 20;
const cardTextLimit = 120;

// selectores
const postsCards = document.querySelector(".posts-cards");
const staffImg = document.querySelectorAll(".staff-img");
const servicesImg = document.querySelectorAll(".services-img");

init();
function init() {
    getPostsData().then((res) => fillPosts(res));
    getPhotos().then((res) => {
        fillStaff(res);
        fillServices(res);
    });
}

function fillStaff(staff) {
    console.log(staff);

    for (let i = 0; i < staffImg.length; i++) {
        console.log(i);
        staffImg[i].setAttribute("src", staff[i].url);
    }
}

function fillServices(services) {
    for (let i = 0; i < servicesImg.length; i++) {
        servicesImg[i].setAttribute("src", services[i].url);
    }
}

function fillPosts(list) {
    for (let i = 0; i < 3; i++) {
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
        title.classList.add("card-text", "card-title", "link");
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
