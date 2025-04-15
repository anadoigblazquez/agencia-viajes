import {toggleMobileMenu} from "./menu.js";
import {toggleModal} from "./toggleModal.js";

//const showMobileMenu = require('menu.js');

toggleMobileMenu('.js-menu-mobile', '.js-mobile-btn', '.js-close-menu', 'menu-mobile__nav--visible');
toggleMobileMenu('.filters', '.filters-button', '.js-close-filters', 'filters--visible');

toggleModal();