import { useState, useEffect, useRef, useMemo } from 'react';
import { ArrowLeft, Maximize2, Minimize2 } from 'lucide-react';
import Toolbar from '../components/Toolbar';
import type { Reading, Book } from '../data/books';
import { Analytics } from '../services/analytics';
import './ReaderScreen.css';

interface ReaderScreenProps {
  reading: Reading;
  parentBook: Book;
  onBack: () => void;
}

export default function ReaderScreen({ reading, parentBook, onBack }: ReaderScreenProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [textSizeScale, setTextSizeScale] = useState(1);
  const [activeParagraphIndex, setActiveParagraphIndex] = useState(-1);
  
  const [showControls, setShowControls] = useState(true);
  const [ttsRate, setTtsRate] = useState(1); // 1x, 1.25x, 1.5x

  // Multiplicamos los párrafos por 6 para hacer los textos mucho más largos para pruebas de scroll
  const extendedParagraphs = useMemo(() => {
    return Array(6).fill(reading.paragraphs).flat();
  }, [reading.paragraphs]);

  // Calcular tiempo estimado de lectura (asumiendo ~200 palabras por minuto)
  const estimatedReadingTime = useMemo(() => {
    const totalWords = extendedParagraphs.join(' ').split(/\s+/).length;
    return Math.ceil(totalWords / 200);
  }, [extendedParagraphs]);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleScreenTap = () => {
    if (isExpanded) {
      setShowControls(!showControls);
    }
  };

  // Referencia para saber si cancelamos intencionalmente para cambiar velocidad
  const isSpeedChanging = useRef(false);
  const activeParagraphRef = useRef(0);

  useEffect(() => {
    Analytics.logEvent('reading_start', { readingId: reading.id });
    const startTime = Date.now();

    return () => {
      window.speechSynthesis.cancel();
      const readSeconds = Math.floor((Date.now() - startTime) / 1000);
      Analytics.logEvent('reading_end', { readingId: reading.id, duration_seconds: readSeconds });
    };
  }, [reading.id]);

  const startAudioFrom = (startIndex: number, rateToUse: number) => {
    const remainingParagraphs = extendedParagraphs.slice(startIndex);
    if (remainingParagraphs.length === 0) return;

    const joinedText = remainingParagraphs.join(' . ');
    const utterance = new SpeechSynthesisUtterance(joinedText);
    utterance.lang = 'es-MX';
    
    const voices = window.speechSynthesis.getVoices();
    const spanishVoices = voices.filter(v => v.lang.startsWith('es'));
    const premiumVoice = spanishVoices.find(v => 
      v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Sabina') || v.name.includes('Paulina')
    ) || spanishVoices[0];
    
    if (premiumVoice) {
      utterance.voice = premiumVoice;
    }

    utterance.rate = rateToUse;
    utterance.pitch = 1.05;

    const boundaryStarts = remainingParagraphs.reduce((acc, p) => {
      const last = acc[acc.length - 1];
      acc.push(last + p.length + 3);
      return acc;
    }, [0]);

    utterance.onboundary = (e) => {
      if (e.name === 'word') {
        const idx = boundaryStarts.findIndex((start: number, i: number) => {
           const nextStart = boundaryStarts[i+1] || Infinity;
           return e.charIndex >= start && e.charIndex < nextStart;
        });
        const trueIndex = startIndex + idx;
        setActiveParagraphIndex(trueIndex);
        activeParagraphRef.current = trueIndex; /* Guardar progreso actual */
      }
    };

    utterance.onend = () => {
      if (!isSpeedChanging.current) {
        setActiveParagraphIndex(-1);
        activeParagraphRef.current = 0;
      }
    };

    window.speechSynthesis.speak(utterance);
    Analytics.logEvent('tts_used', { readingId: reading.id, rate: rateToUse });
  };

  const handlePlayAudio = () => {
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
      setActiveParagraphIndex(-1);
      activeParagraphRef.current = 0;
      return;
    }
    startAudioFrom(0, ttsRate);
  };

  const handleTextSizeChange = () => {
    setTextSizeScale(s => s >= 3 ? 1 : s + 1); // 1, 2, 3
  };

  const handleSpeedChange = () => {
    setTtsRate(s => {
      const newRate = s === 1 ? 1.4 : (s === 1.4 ? 1.8 : 1);
      
      // Si ya está leyendo, interrumpir para aplicar nueva velocidad sin reiniciar
      if (window.speechSynthesis.speaking) {
        isSpeedChanging.current = true;
        window.speechSynthesis.cancel();
        
        // Timeout ultracorto para asegurar que cancel() purgue la cola de audio OS
        setTimeout(() => {
          const resumeIndex = activeParagraphRef.current > -1 ? activeParagraphRef.current : 0;
          startAudioFrom(resumeIndex, newRate);
          isSpeedChanging.current = false;
        }, 50);
      }
      return newRate;
    });
  };

  const paragraphElements = extendedParagraphs.map((text, i) => (
    <p key={i} className={activeParagraphIndex === i ? 'tts-active transition-colors' : 'transition-colors'}>{text}</p>
  ));

  return (
    <div className={`reader-screen ${isExpanded ? 'expanded' : ''}`}>
      {!isExpanded && (
        <header className="reader-topbar">
          <button className="icon-btn" onClick={onBack}>
            <ArrowLeft size={24} />
          </button>
          <div className="r-topbar-actions">
            <button className="icon-btn" onClick={toggleExpand}>
              <Maximize2 size={20} />
            </button>
          </div>
        </header>
      )}

      {!isExpanded && (
        <div className="reading-metadata">
          <div className="r-meta-cover">
            <div style={{ width: '100%', height: '100%', backgroundColor: parentBook.color, borderRadius: '8px' }}></div>
          </div>
          <div className="r-meta-info">
            <h2>{reading.title}</h2>
            <p style={{ marginBottom: '4px' }}>Fecha: <strong>{parentBook.year}</strong></p>
            <p>Tiempo de lectura: <strong>~{estimatedReadingTime} min</strong></p>
            <div className="b-tags" style={{ marginTop: '8px' }}>
              {parentBook.tags.map(t => <span key={t} className="tag">{t}</span>)}
            </div>
          </div>
        </div>
      )}

      <main className="reader-content-body" onClick={handleScreenTap} style={{ cursor: isExpanded ? 'pointer' : 'default' }}>
        {isExpanded && showControls && (
          <div className="expand-controls" onClick={(e) => e.stopPropagation()}>
            <button className="icon-btn floating-minimize" onClick={toggleExpand}>
              <Minimize2 size={24} />
            </button>
          </div>
        )}
        <div className={`text-container size-${textSizeScale}`}>
          {paragraphElements}
        </div>
      </main>

      <Toolbar 
        isVisible={!isExpanded || showControls}
        currentSpeed={ttsRate}
        onPlayAudio={handlePlayAudio} 
        onTextSizeChange={handleTextSizeChange} 
        onSpeedChange={handleSpeedChange} 
      />
    </div>
  );
}
