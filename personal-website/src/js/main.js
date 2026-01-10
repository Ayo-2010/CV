/**
 * Main Application Entry Point
 * Initializes all modules on DOMContentLoaded
 */

import { initNavigation } from './navigation.js';
import { initSmoothScroll, initScrollAnimations } from './scroll.js';
import { updateFooterYear } from './utils.js';

document.addEventListener('DOMContentLoaded', function() {
  initNavigation();
  initSmoothScroll();
  initScrollAnimations();
  updateFooterYear();
});
