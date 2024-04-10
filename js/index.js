import { data } from "./modules/getData.js";
import { renderUserInfo } from "./modules/renderUserInfo.js";
import { renderUsers } from "./modules/renderUsers.js";
import { getDogImage } from "./modules/getDogImage.js";

if (!localStorage.getItem("users")) {
  localStorage.setItem("users", JSON.stringify(data));
}

let users = JSON.parse(localStorage.getItem("users"));

const usersList = document.querySelector(".users__list");
const userInfo = document.querySelector(".user-info");

renderUsers(users, usersList);

usersList.addEventListener("click", (event) => {
  users.forEach((item) => {
    if (+event.target.id === item.id) {
      renderUserInfo(item, userInfo);
    }
  });

  if (event.target.classList.contains("delete")) {
    const newUsers = users.filter(
      (item) => item.id != event.target.parentElement.id
    );
    users = newUsers;
    usersList.innerHTML = "";
    renderUsers(users, usersList);
    localStorage.setItem("users", JSON.stringify(users));
  }
});

const dogImage = document.querySelector('.dogImage')
const image = document.createElement('img')
dogImage.append(image)

const arrayImageDogs = await getDogImage()
let count = 0
let interval;

interval = setInterval(() => {
  if(count < arrayImageDogs.message.length) {
    image.src = arrayImageDogs.message[count]
    count ++
  }else {
    clearInterval(interval)
    image.remove()
  }
}, 3000)
