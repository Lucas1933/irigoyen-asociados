import { Collapse, initTWE, Ripple, Input, Carousel } from "tw-elements";
import AOS from "aos";
import "aos/dist/aos.css";
import smoothScroll from "./public/js/smooth-scroll";
import collapse from "./public/js/collapse";
initTWE({ Collapse, Ripple, Input, Carousel });
smoothScroll();
collapse();
AOS.init();
