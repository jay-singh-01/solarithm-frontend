import { useEffect, useState } from 'react';

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const winHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress((scrollTop / winHeight) * 100);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-1 bg-green-500 z-50"
      style={{ width: `${progress}%` }}
    />
  )
}

export default ScrollProgress;
