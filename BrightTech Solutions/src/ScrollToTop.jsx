import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  // 1. Get the current page URL path
  const { pathname } = useLocation();

  // 2. Every time the pathname changes, scroll the browser to the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // This component doesn't show anything on screen
}

export default ScrollToTop;