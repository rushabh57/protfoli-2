const defaultMockup = "assets/imgs/mockups/defaultMockup.jpg";
const defaultLink = "/assets/defaultPageForPorfolio/defaulPage.html";
const OL_IMG = "assets/imgs/icons/open-link.svg";
const projects = [
  {
    id: 0,
    proName: "I CODE THIS",
    proDisc: "Daily Chalanges Of Frontend",
    ProLink: "https://github.com/rushabh57/icodethis_CHALLANGES",
    ProImg: "assets/imgs/mockups/icodethisLogo.png",
    OL: `${OL_IMG}`,
    language: "JS",
  },
  {
    id: 1,
    proName: "youtube clone",
    proDisc: "youtube clone created with raw html , css , js",
    ProLink: "https://rushabh57.github.io/youtubeClone/",
    ProImg: "assets/imgs/mockups/youtubeClone.png",
    OL: `${OL_IMG}`,
    language: "JS",
  },
  {
    id: 2,
    proName: "giggle co.",
    proDisc:
      "e-commerce site created with HTML , CSS , JS , IN Animation GSAP.",
    ProLink: "https://rushabh57.github.io/giggleCO./",
    ProImg: "assets/imgs/mockups/giggleCo.png",
    OL: `${OL_IMG}`,
    language: "JS",
  },
  {
    id: 3,
    proName: "Pacific Rim Site",
    proDisc: "created with raw html , css , js , GSAP",
    ProLink: "https://rushabh57.github.io/OnePage_PacificRim/",
    ProImg: "assets/imgs/mockups/pacficONE_PAGE.png",
    OL: `${OL_IMG}`,
    language: "JS",
  },
  {
    id: 4,
    proName: "Bongo.",
    proDisc: "A Furniture Site , created with raw html , css , js",
    ProLink: "http://lll",
    ProImg: "assets/imgs/mockups/1.png",
    OL: `${OL_IMG}`,
    language: "JS",
  },
  {
    id: 5,
    proName: "lifeOcean",
    proDisc: "Ocean life animals website , created with raw html , css , js",
    ProLink: "https://rushabh57.github.io/lifeOcean/",
    ProImg: "assets/imgs/mockups/lifeocean.png",
    OL: `${OL_IMG}`,
    language: "JS",
  },
  {
    id: 6,
    proName: "weatherApp",
    proDisc: "using rapid API , created with raw html , css , js",
    ProLink: "https://rushabh57.github.io/weatherApp/",
    ProImg: "assets/imgs/mockups/weatherApp.png",
    OL: `${OL_IMG}`,
    language: "JS",
  },
  {
    id: 7,
    proName: "Racipe App",
    proDisc: "using rapid API , created with raw html , css , js , GSAP",
    ProLink: "https://rushabh57.github.io/racipeApp/",
    ProImg: "assets/imgs/mockups/racipeApp.png",
    OL: `${OL_IMG}`,
    language: "JS",
  },
  {
    id: 8,
    proName: "Meesho Clone.",
    proDisc: "Better Messho Clone With some new fetures.",
    ProImg: `assets/imgs/mockups/meesho.png`,
    OL: `${OL_IMG}`,
    language: "JS",
  },
  {
    id: 9,
    proName: "NoteKeeper",
    proDisc: "Note Creator with Greate UI.",
    ProLink: "https://notekeeper-kappa.vercel.app/",
    ProImg: `assets/imgs/mockups/notekeeper1.png`,
    OL: `${OL_IMG}`,
    language: "JS",
  },
  {
    id: 10,
    proName: "AirBnb",
    proDisc: "created with raw html , css , js Animaion GSAP.",
    ProLink: `${defaultLink}`,
    ProImg: `${defaultMockup}`,
    OL: `${OL_IMG}`,
    language: "JS",
  },
  {
    id: 11,
    proName: "eatNiche",
    proDisc: "Food Recipe App created with API.",
    ProLink: `https://rushabh57.github.io/eatniche/`,
    ProImg: `assets/imgs/mockups/eatNiche.png`,
    OL: `${OL_IMG}`,
    language: "React",
  },
  {
    id: 12,
    proName: "BMI Calc",
    proDisc: "BMI Calculator Made With HTML , JS , CSS.",
    ProLink: `https://rushabh57.github.io/BMI_caclulator/`,
    ProImg: `assets/imgs/mockups/BMI_Calc.png`,
    OL: `${OL_IMG}`,
    language: "JS",
  },
  {
    id: 13,
    proName: "NASA Solar Info",
    proDisc: "creating react app with NASA API.",
    ProLink: `https://rushabh57.github.io/NASA_API_APP/`,
    ProImg: `assets/imgs/mockups/NASA_APOD.png`,
    OL: `${OL_IMG}`,
    language: "JS",
  },
  {
    id: 14,
    proName: "age-calculator-app-main",
    proDisc: "frontEndJrLevel Challange:age-calculator-app-main.",
    ProLink: `https://rushabh57.github.io/FrontEndJrLvl_Challange__3/`,
    ProImg: `assets/imgs/mockups/Age_Calc.png`,
    OL: `${OL_IMG}`,
    language: "JS",
  },
  {
    id: 15,
    proName: "FM Challenge 1",
    proDisc: "frontEnd Mentor Challange.",
    ProLink: `https://rushabh57.github.io/FM_Challange_2/`,
    ProImg: `assets/imgs/mockups/FM_CH_1.png`,
    OL: `${OL_IMG}`,
    language: "JS",
  },
  {
    id: 16,
    proName: "FM Challenge 2",
    proDisc: "frontEnd Mentor Challange.",
    ProLink: `https://rushabh57.github.io/FM_Challange_1/`,
    ProImg: `assets/imgs/mockups/FM_2.png`,
    OL: `${OL_IMG}`,
    language: "JS",
  },
  {
    id: 17,
    proName: "FM Challenge 3",
    proDisc: "frontEnd Mentor Challange.",
    ProLink: `https://rushabh57.github.io/FM_Challange_4/`,
    ProImg: `assets/imgs/mockups/FM_3.png`,
    OL: `${OL_IMG}`,
    language: "JS",
  },
  {
    id: 18,
    proName: "FM Challenge ",
    proDisc: "frontEndJrLevel Challange:Landing Page.",
    ProLink: `https://rushabh57.github.io/FrontEndJrLvl_Challange__1/`,
    ProImg: `assets/imgs/mockups/FM_JR_1.png`,
    OL: `${OL_IMG}`,
    language: "JS",
  },
  {
    id: 19,
    proName: "FM Challenge 4",
    proDisc: "frontEnd Mentor Challange.",
    ProLink: `https://rushabh57.github.io/FM_Challange_3/`,
    ProImg: `assets/imgs/mockups/FM_4.png`,
    OL: `${OL_IMG}`,
    language: "JS",
  },
  {
    id: 20,
    proName: "FM Challenge ",
    proDisc: "frontEndJrLevel Challange:Validation.",
    ProLink: `https://rushabh57.github.io/FrontEndJrLvl_Challange__2/`,
    ProImg: `assets/imgs/mockups/FM_JR_2.png`,
    OL: `${OL_IMG}`,
    language: "JS",
  },
  {
    id: 21,
    proName: "TRYSITE_0",
    proDisc: "Learning Tailiwnd and shadcn",
    ProLink: `hhttps://rushabh57.github.io/trysite0/`,
    ProImg: `assets/imgs/mockups/TRYSITE_0.png`,
    OL: `${OL_IMG}`,
    language: "React",
  },
  {
    id: 22,
    proName: "Todo list",
    proDisc: "Creating to app using react",
    ProLink: `https://rushabh57.github.io/React_todoListApp/`,
    ProImg: `assets/imgs/mockups/TodoListReact.png`,
    OL: `${OL_IMG}`,
    language: "React",
  },
  {
    id: 23,
    proName: "VanLinker",
    proDisc: "Idea of making math more enjoyable",
    ProLink: `https://rushabh57.github.io/vanLinker/`,
    ProImg: `assets/imgs/mockups/vanLinker.png`,
    OL: `${OL_IMG}`,
    language: "js",
  },
  {
    id: 24,
    proName: "Ajio Clone",
    proDisc: "Making UI more user friendly with new & easy features",
    ProLink: `${defaultLink}`,
    ProImg: `${defaultMockup}`,
    OL: `${OL_IMG}`,
    language: "js",
  },
];
const proCardsContainer = document.querySelector(".pro-cards-container");
const projectsMy = [
  ...new Set(
    projects.map((item) => {
      return item;
    })
  ),
];
proCardsContainer.innerHTML = projectsMy
  .map((item) => {
    var { id, proName, proDisc, ProLink, ProImg, OL, language } = item;
    return `<div class="pro-card">
      <div class="pro-img">
          <img src="${ProImg}" alt="${id}">
          <label for="" class='buildLang' >${language}</label>
      </div>
      <div class="pro-full-info">
          <div class="pro-info">
              <h5 class="pro-name">${proName}</h5>
              <p class="pro-desc">${proDisc}</p>
          </div>
          <div class="link">
              <a href="${ProLink}">
                  <div class="img-ol-con">
                      <img src="${OL}" alt="${id}" loading="lazy">
                  </div>
              </a>
          </div>
      </div>
  </div>
  `;
  })
  .join("");

const projectCounter = document.getElementById("count");
projectCounter.innerText = projects.length;

const expandProjectSec = document.getElementById("expandProjectSec");
expandProjectSec.addEventListener("click", () => {
  console.log("hellow");
  proCardsContainer.style.overFlow = "scroll";
  proCardsContainer.style.maxHeight = "fit-content";
  disable(expandProjectSec);
});

function disable(e) {
  e.style.pointerEvents = "none";
  e.style.userSelection = "none";
  e.style.opacity = ".9";
  e.style.background = "#a9a9a9";
}

// download animation
const downaloadCVBtn = document.querySelector(".d-cv-btn");
const svg_Strigt_line_path = `M12 21H3 20.8201`;
dwonlaod_TL = gsap.timeline({
  defaults: {
    duration: 0.67,
  },
});
downaloadCVBtn.addEventListener("click", () => {
  gsap.to("#frst", {
    attr: { d: svg_Strigt_line_path },
    transformOrigin: "center",
    ease: "power4",
  });
});
