import { Collapse, initTWE, Ripple, Input, Carousel } from "tw-elements";
import AOS from "aos";
import bgBlur from "./public/js/bg-blur";
import smoothScroll from "./public/js/smooth-scroll";
import collapse from "./public/js/collapse";
import headerRezise from "./public/js/header-rezise";
import bgBlurMobile from "./public/js/bg-blur-mobile";

document.addEventListener("DOMContentLoaded", () => {
  initTWE({ Collapse, Ripple, Input, Carousel });
  AOS.init();
  bgBlur();
  smoothScroll();
  collapse();
  headerRezise();
  bgBlurMobile();
});
