import { useState, useEffect } from 'react';
import { ArrowLeft, BookOpen, ExternalLink, Loader } from 'lucide-react';
import type { Book, Reading } from '../data/books';
import { fetchBookText } from '../lib/gutendex';
import './CategoryScreen.css';

interface BookScreenProps {
  book: Book;
  onBack: () => void;
  onReadingSelect: (reading: Reading) => void;
}

export default function BookScreen({ book, onBack, onReadingSelect }: BookScreenProps) {
  const [readings, setReadings] = useState<Reading[]>(book.readings || []);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    
    const loadContent = async () => {
      // Si el libro es local o ya tiene lecturas, no hacemos nada
      if (!book.id.startsWith('gutenberg-') || book.readings.length > 0) {
         setReadings(book.readings);
         return;
      }

      setLoading(true);
      const gutenbergId = parseInt(book.id.split('-')[1]);
      const paragraphs = await fetchBookText(gutenbergId);
      
      if (!isMounted) return;

      // Dividir el libro completo en fragmentos manejables (ej. 15 párrafos por "capítulo/lectura")
      const chunks: Reading[] = [];
      const CHUNK_SIZE = 15;
      
      for (let i = 0; i < paragraphs.length; i += CHUNK_SIZE) {
        const chunkParams = paragraphs.slice(i, i + CHUNK_SIZE);
        chunks.push({
          id: `r-${gutenbergId}-${i}`,
          title: `Parte ${Math.floor(i / CHUNK_SIZE) + 1}`,
          excerpt: chunkParams[0]?.substring(0, 80) + '...',
          paragraphs: chunkParams
        });
      }

      setReadings(chunks);
      setLoading(false);
    };

    loadContent();
    return () => { isMounted = false; };
  }, [book]);

  return (
    <div className="category-screen">
      <header className="cat-header book-header-color">
        <button className="icon-btn-white" onClick={onBack}>
          <ArrowLeft size={24} />
        </button>
        <button className="icon-btn-white">
          <ExternalLink size={20} />
        </button>
      </header>

      <div className="cat-content">
        <div className="book-top-card">
           <div className="b-cover" style={{ backgroundColor: book.color }}></div>
           <div className="b-info">
              <h2>{book.title}</h2>
              <p className="b-author"><b>Autor:</b> {book.author}</p>
              <p className="b-meta"><b>Publicación:</b> {book.publisher}</p>
              <p className="b-meta"><b>Año:</b> {book.year}</p>
              <div className="b-tags">
                {book.tags.map((t, i) => <span key={i} className="tag">{t.substring(0, 15)}</span>)}
              </div>
           </div>
        </div>

        {loading ? (
           <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px', color: '#666' }}>
             <Loader size={32} className="lucide-spin" style={{ animation: 'spin 2s linear infinite', marginBottom: '10px' }} />
             <p>Descargando texto de la obra...</p>
             <style>{`@keyframes spin { 100% { transform: rotate(360deg); } }`}</style>
           </div>
        ) : (
          <div className="readings-list">
            {readings.map(reading => (
               <div key={reading.id} className="reading-card" onClick={() => onReadingSelect(reading)}>
                   <div className="r-info">
                     <h4>{reading.title}</h4>
                     <p>{reading.excerpt}</p>
                   </div>
                   <div className="r-thumb">
                      <div style={{ width: '100%', height: '100%', backgroundColor: book.color, borderRadius: '8px' }}></div>
                      <BookOpen size={20} className="r-icon"/>
                   </div>
               </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
