// frontend/src/components/ScrollToTop.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // scroll to top on route change
  }, [pathname]);

  return null; // renders nothing
}

export default ScrollToTop;
