const Links = [
  {
    id: 1,
    img: "assets/imgs/icons/codepen-logo-black.png",
    link: "https://codepen.io/rushabh57",
    name: "codepen",
  },
  {
    id: 3,
    img: "assets/imgs/icons/cssBattle.svg",
    link: "https://cssbattle.dev/player/rushabh",
    name: "CSS BATTLE",
  },
  {
    id: 4,
    img: "assets/imgs/icons/github-mark.svg",
    link: "https://github.com/rushabh57",
    name: "github",
  },
  {
    id: 2,
    img: "assets/imgs/icons/frontend-mentor-logo.png",
    link: "https://www.frontendmentor.io/profile/rushabh57",
    name: "FM",
  },
];
const owlinks = document.querySelector(".o-w-links");
const flinks = document.querySelector(".f-links");
const EX_LINKS = [
  ...new Set(
    Links.map((item) => {
      return item;
    })
  ),
];
owlinks.innerHTML = EX_LINKS.map((item) => {
  var { link, img, name } = item;
  return ` <a href="${link}" class='ol-link'>
      <img  class="o-white" src="${img}" alt="${name}">
      </a>`;
}).join("");
flinks.innerHTML = EX_LINKS.map((item) => {
  var { link, img, name } = item;
  return ` <a href="${link}" class='ol-link' target="_blank">
      <img  class="o-white" src="${img}" alt="${name}">
      </a>`;
}).join("");
