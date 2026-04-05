import { useState, useEffect } from 'react';
import './Toolbar.css';

interface ToolbarProps {
  onPlayAudio?: () => void;
  onTextSizeChange?: () => void;
  onSpeedChange?: () => void;
  currentSpeed?: number;
  isVisible: boolean;
}

export default function Toolbar({ onPlayAudio, onTextSizeChange, onSpeedChange, currentSpeed, isVisible }: ToolbarProps) {
  const [inclusiveMode, setInclusiveMode] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    if (inclusiveMode) {
      document.body.classList.add('inclusive-mode');
    } else {
      document.body.classList.remove('inclusive-mode');
    }
    return () => {
      document.body.classList.remove('inclusive-mode');
    };
  }, [inclusiveMode]);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleAudioGuide = () => {
    if (onPlayAudio) {
      onPlayAudio();
    } else {
      showToast('Funcionalidad de audio no disponible aquí');
    }
  };

  const handleBookmark = () => {
    showToast('Progreso guardado correctamente');
  };

  return (
    <>
      <div className={`toolbar-container ${!isVisible ? 'hidden' : ''}`}>
        <button 
          className={`toolbar-btn icon-only ${inclusiveMode ? 'active' : ''}`}
          onClick={() => setInclusiveMode(!inclusiveMode)}
          aria-label="Contraste"
        >
          <span>🌓</span>
        </button>

        <button 
          className="toolbar-btn icon-only text-aa"
          onClick={onTextSizeChange}
          aria-label="Texto"
        >
          <span>Aa</span>
        </button>

        <button 
          className="toolbar-btn icon-only text-aa"
          style={{ fontSize: '0.85rem' }}
          onClick={onSpeedChange}
          aria-label="Velocidad"
        >
          <span>{currentSpeed}x</span>
        </button>

        <button 
          className="toolbar-btn icon-only"
          onClick={handleAudioGuide}
          aria-label="Escuchar"
        >
          <span>🔊</span>
        </button>

        <button 
          className="toolbar-btn icon-only"
          onClick={handleBookmark}
          aria-label="Marcador"
        >
          <span>🔖</span>
        </button>
      </div>

      {toastMessage && (
        <div className="toast-notification">
          {toastMessage}
        </div>
      )}
    </>
  );
}
