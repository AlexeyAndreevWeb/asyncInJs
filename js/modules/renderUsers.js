export const renderUsers = (data,element) => {
  data.forEach((item) =>
    element.insertAdjacentHTML(
      "beforeend",
      `<li class="user" id="${item.id}">${item.name}<img class="delete" src="./image/delete.svg" alt="delete"></li>`
    )
  );
};
