const frontEndskills = [
  {
    id: 1,
    lang: "html",
    per: "80%",
    color: "#e34c26",
  },
  {
    id: 2,
    lang: "CSS",
    per: "80%",
    color: "#264de4",
  },
  {
    id: 2.1,
    lang: "SCSS",
    per: "75%",
    color: "#cd6799",
  },
  {
    id: 3,
    lang: "Tailwind",
    per: "60%",
    color: "#a5f3fc",
  },
  {
    id: 4,
    lang: "Bootstrap",
    per: "75%",
    color: "rgb(159, 151, 252)",
  },
  {
    id: 5,
    lang: "JS",
    per: "80%",
    color: "yellow",
  },
  {
    id: 6,
    lang: "react.js",
    per: "35%",
    color: "rgb(151, 231, 252)",
  },
  {
    id: 7,
    lang: "GSAP",
    per: "60%",
    color: "rgb(135, 255, 135)",
  },
];
const BackEndskills = [
  {
    id: 1,
    lang: "PHP",
    per: "48%",
    color: "#474A8A",
  },
  {
    id: 2,
    lang: "NODE",
    per: "20%",
    color: "rgb(112, 214, 112)",
  },
];
const DBSkills = [
  {
    id: 1,
    lang: "SQL",
    per: "30%",
    color: "#F29111",
  },
];
const skillContainer = document.querySelector(".skill-container");
const frontEnd = document.querySelector(".frontEnd");
const category = [
  ...new Set(
    frontEndskills.map((item) => {
      return item;
    })
  ),
];
frontEnd.innerHTML = category
  .map((item) => {
    var { lang, per, color } = item;
    return `<div class="skill-box" >
                  <p>${lang}</p>
                  <div 
                  class='per-back' 
                  style='width:${per}; background:${color};'>
                  </div>
                  
        </div>`;
  })
  .join("");

const BackEnd = document.querySelector(".BackEnd");
const category1 = [
  ...new Set(
    BackEndskills.map((item) => {
      return item;
    })
  ),
];
BackEnd.innerHTML = category1
  .map((item) => {
    var { lang, per, color } = item;
    return `<div class="skill-box">
            <p>${lang}</p>
            <div 
            class='per-back' 
            style='width:${per}; background:${color};'>
            </div>
            </div>`;
  })
  .join("");
const DB = document.querySelector(".DB");
const category2 = [
  ...new Set(
    DBSkills.map((item) => {
      return item;
    })
  ),
];
DB.innerHTML = category2
  .map((item) => {
    var { lang, per, color } = item;
    return `<div class="skill-box" >
            <p>${lang}</p>
            <div 
            class='per-back' 
            style='width:${per}; background:${color};'>
            </div>
            </div>`;
  })
  .join("");
