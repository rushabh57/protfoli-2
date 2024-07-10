gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  defaults: {
    duration: 2,
    ease: "power1",
  },
});

// Menu =====
const Ham_tl = gsap.timeline({
  defaults: {
    duration: 0.7,
  },
});

//main Time line

tl.to(".dark-elips", {
  scrollTrigger: {
    trigger: ".dark-elips",
    start: "top center",
    end: "bottom center",
    scrub: 1,
  },
  opacity: 1,
  rotate: 360,
  duration: 7,
  ease: "back",
})
  // Hero section
  .to(".hero-heading", {
    scrollTrigger: {
      trigger: ".hero-heading",
      start: "-100% 30%",
      end: "-59% 60%",
      scrub: 1,
      toggleActions: "play none none none",
      once: true,
    },
    y: 0,
    opacity: 1,
    ease: "elastic.Out",
  })
  .to(".hero-sub-heading", {
    scrollTrigger: {
      trigger: ".hero-sub-heading",
      start: "-100% 30%",
      end: "-59% 60%",
      scrub: 1,
      toggleActions: "play none none none",
      once: true,
    },
    y: 0,
    opacity: 1,
    ease: "elastic.Out",
  })
  //============ skill section start
  .to(".skill-box", {
    scrollTrigger: {
      trigger: ".skill-box",
      start: "-65px center",
      end: "115px center",
      scrub: 1,
      once: true,
    },
    stagger: 0.7,
    delay: 0.8,
    ease: "back.out",
    opacity: 1,
    x: 0,
  })
  .to(".skill-box p", {
    ease: "power2",
    opacity: 1,
    x: 0,
  })
  .to(".skill-box .per-back", {
    scrollTrigger: {
      trigger: ".skill-box .per-back",
      start: "top center",
      end: "top center",
      scrub: 1,
      once: true,
    },
    ease: "power3.out",
    opacity: 1,
    left: "2.5px",
    delay: 0.3,
    duration: 1.7,
  })
  //============ skill section end
  //============ about section start
  .to(".a-m-h", {
    scrollTrigger: {
      trigger: ".a-m-h",
      start: "10px center",
      end: "10px center",
      scrub: 1,
      once: true,
    },
    y: 0,
    opacity: 1,
    ease: "power1",
  })
  .to(".a-m-p", {
    scrollTrigger: {
      trigger: ".a-m-p",
      start: "10px center",
      end: "10px center",
      scrub: 1,
      once: true,
    },
    opacity: 1,
    ease: "power1",
  })
  .to(".d-cv-btn", {
    scrollTrigger: {
      trigger: ".d-cv-btn",
      start: "-100px 50%",
      end: "-100px 50%",
      scrub: 1,
      once: true,
    },
    opacity: 1,
    y: 0,
    ease: "sine.out",
  })
  .to(".card", {
    scrollTrigger: {
      trigger: ".a-m-p",
      start: "-140px center",
      end: "-140px center",
      scrub: 1,
      once: true,
    },
    opacity: 1,
    y: 0,
    ease: "power1",
  })
  .to(".see-more-btn", {
    scrollTrigger: {
      trigger: ".see-more-btn",
      start: "10px center",
      end: "10px center",
      scrub: 1,
      once: true,
    },
    opacity: 1,
    y: 0,
    ease: "power3.in",
  })
  .to(".pro-card", {
    scrollTrigger: {
      trigger: ".pro-card",
      start: "center center",
      end: "+=350px",
      scrub: 1,
      once: true,
    },
    opacity: 1,
    delay: 0.2,
    duration: 0.7,
    stagger: 0.45,
    y: 0,
    ease: "expo.out",
  });

// ham burger
Ham_tl.to(".line1", {
  y: 11,
})
  .to(
    ".line3",
    {
      y: -11,
    },
    "<"
  )
  .to(".line3", {
    y: -10,
    rotate: 90,
    ease: "back",
  })
  .to(
    ".hb",
    {
      rotate: 45,
      ease: "bounce.out",
    },
    "-=.5"
  );
Ham_tl.paused(true);
const hamMenuBtn = document.querySelector(".hb");
let hamMenuBtnClick = false;
hamMenuBtn.addEventListener("click", () => {
  if (!hamMenuBtnClick) {
    hamMenuBtnClick = true;
    Ham_tl.play();
    document.body.style.overflowY = "hidden";
    gsap.to(".navLinks", {
      bottom: 0,
      ease: "power3.inOut",
      duration: 0.88,
      duration: 0.7,
    });
    document.querySelectorAll(".navLinks").forEach((navlink) => {
      navlink.addEventListener("click", () => {
        gsap.to(".navLinks", {
          duration: 0.7,
          bottom: "100%",
          ease: "power4",
        });
        Ham_tl.reverse(1);
        hamMenuBtnClick = false;
      });
    });
  } else {
    hamMenuBtnClick = false;
    document.body.style.overflowY = "scroll";
    Ham_tl.reverse(1);
    gsap.to(".navLinks", {
      duration: 0.7,
      bottom: "100%",
      ease: "power4",
    });
  }
});
// darkmode

// Greeting
//
