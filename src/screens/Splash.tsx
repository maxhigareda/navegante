import { useEffect } from 'react';
import './Splash.css';

export default function Splash({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2500); // 2.5s display time
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="splash-screen">
      <img src="/logo.svg" alt="Navegante Logo" className="splash-logo fade-in" />
    </div>
  );
}
