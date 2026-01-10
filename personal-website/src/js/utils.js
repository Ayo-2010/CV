/**
 * Utility Functions Module
 * Common helper functions
 */

export function updateFooterYear() {
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}
