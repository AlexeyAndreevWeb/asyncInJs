export const renderUserInfo = (data, element) => {
  element.innerHTML = `
  <div class="persona">
    <img class="persona__avatar" src="./image/avatar.png" alt="avatar">
    <div>
      <p class="persona__name">Name: ${data.name}</p>
      <p class="persona__username">Username: ${data.username}</p>
      <p class="persona__telephone">Telephone: <a href="tel:${data.phone}">${data.phone}</a></p>
      <p class="persona__email">Email: <a href="${data.email}">${data.email}</a></p>
      <p class="persona__website">Website: <a href="${data.website}">${data.website}</a></p>
    </div>
  </div>
  `;
}