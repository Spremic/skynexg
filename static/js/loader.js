// Page Loader Script
(function() {
  'use strict';

  // Wait for DOM to be ready
  function initLoader() {
    const pageLoader = document.getElementById('page-loader');
    if (!pageLoader) return;

    // Hide loader when page is fully loaded
    function hideLoader() {
      pageLoader.classList.add('hidden');
      
      // Remove from DOM after animation completes
      setTimeout(() => {
        pageLoader.style.display = 'none';
      }, 600);
    }

    // Check if page is already loaded
    if (document.readyState === 'complete') {
      // Page already loaded, hide loader immediately
      setTimeout(hideLoader, 500); // Small delay for smooth transition
    } else {
      // Wait for page to fully load
      window.addEventListener('load', () => {
        // Minimum display time for better UX (1 second)
        const minDisplayTime = 1000;
        const loadTime = performance.now();
        
        setTimeout(() => {
          hideLoader();
        }, Math.max(0, minDisplayTime - loadTime));
      });
    }

    // Fallback: hide loader after maximum wait time (3 seconds)
    setTimeout(() => {
      if (!pageLoader.classList.contains('hidden')) {
        hideLoader();
      }
    }, 3000);
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLoader);
  } else {
    initLoader();
  }
})();

