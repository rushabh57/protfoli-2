const activeNavLink = document.querySelector(".active-nav-link");
const navLink = document.querySelectorAll(".navlink");
const navLink_Link = document.querySelectorAll(".navlink a");


const loadingBoxLatter = this.document.querySelectorAll('.load-latter-box');
const tween = gsap.to(loadingBoxLatter , {
  yPercent:-115,repeat:10,ease:'none',
})
const tween2 = gsap.to('.l-delay' , {
  yPercent:-115,repeat:10,ease:'none',
})
const eased = gsap.to(tween , {totalProgress:1,duration:4,ease:"power4.inOut", })
const eased2 = gsap.to(tween2 , {totalProgress:1,duration:4,delay:.04,ease:"power4.inOut" ,  })


window.addEventListener('load', function() {



  var totalLoadTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;
  var currentTime = Date.now();
  var percentage = 0;

  var loadingBar = document.getElementById('loadingScreen');
  let loadingprogressbar = this.document.querySelector('.loadingBar');
  var loadPercentage = document.querySelector('.loadPercentage');

  gsap.to(loadingprogressbar, {
    width: '100%',
    ease: 'power2.inOut', 
    // Use an easing function that provides a smoother transition
    duration: totalLoadTime / 1000, 
    // Convert milliseconds to seconds
    onUpdate: function() {
      var newPercentage = Math.ceil(this.progress() * 100);
      
      if (newPercentage !== percentage) {
        percentage = newPercentage;
        loadPercentage.innerHTML = `${percentage}%`;
      }
    },
    onComplete: function() {
      setTimeout(() => {
        document.body.classList.add('visible');
        loadingBar.classList.add('unvisible');
      }, 1200);
    },
  });



  var theme = localStorage.getItem("theme");
  if (theme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    iconToggle.setAttribute("src", "./assets/imgs/icons/moon-icon.svg");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    iconToggle.setAttribute("src", "./assets/imgs/icons/sun-icon.svg");
  }
});

let isactive = false;
navLink.forEach((link) => {
  link.addEventListener("click", () => {
    link.appendChild(activeNavLink);
  });
});

// darkmode ==========================
const iconToggle = document.querySelector(".icon-toggle");

const toggleSwitch = document.querySelector(
  '.darkmodetoggle input[type="checkbox"]'
);
const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
}

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    iconToggle.setAttribute("src", "./assets/imgs/icons/moon-icon.svg");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    iconToggle.setAttribute("src", "./assets/imgs/icons/sun-icon.svg");
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);

const ScrollToTop = document.querySelector('.top-btn');

const displayButton = () => {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      gsap.to(ScrollToTop ,{
        ease:'power2',
        opacity:1,
        duration:1.1,
        display:'block'
      })
      
    } else {
      gsap.to(ScrollToTop ,{
        ease:'power2',
        opacity:0,
        duration:1.1,
        display:'none'
      });
     
    }
  });
};

const scrollToTop = () => {
  ScrollToTop.addEventListener("click", () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    }); 
    console.log(event);
  });
};

displayButton();
scrollToTop();



var mail = document.querySelector('.mail');
const copyMail = async () => {
   try {
    await navigator.clipboard.writeText(mail.textContent);
    AlertBody();
   } catch (err) {
     console.error('Failed to copy: ', err);
   }
 }
 const emailBox = document.getElementById('email-b');
function AlertBody() {
  if(emailBox.checked = true){
    setTimeout(() => {
      t = mail.innerText = 'copied !';
      mail.parentElement.classList.add('copied');
      
    }, 500);
    setTimeout(() => {
      t = mail.innerText = 'rushabhmalvaniya12@gmail.com';
   
        mail.parentElement.classList.remove('copied');
        emailBox.checked = false
      }, 5000);
  }
  else{
    mail.innerText = 'rushabhmalvaniya12@gmail.com';
    
  }
}


 // JavaScript
 function smoothScroll(event) {
  event.preventDefault(); // Prevent the default anchor tag behavior

  const targetId = event.target.getAttribute("href"); // Get the target section id from the anchor tag's href attribute
  const targetElement = document.querySelector(targetId); // Find the target section element

  if (targetElement) {
    // Scroll to the target section using the scrollIntoView method with smooth behavior
    targetElement.scrollIntoView({
      behavior: "smooth"
    });
  }
}