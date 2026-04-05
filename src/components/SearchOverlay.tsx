import { useState, useMemo, useEffect, useRef } from 'react';
import { ArrowLeft, Search } from 'lucide-react';
import { CATEGORIES, type Book } from '../data/books';
import './SearchOverlay.css';

interface SearchOverlayProps {
  onClose: () => void;
  onBookSelect: (book: Book) => void;
}

export default function SearchOverlay({ onClose, onBookSelect }: SearchOverlayProps) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const allBooks = useMemo(() => CATEGORIES.flatMap(c => c.books), []);

  const results = useMemo(() => {
    if (query.trim().length === 0) return [];
    const q = query.toLowerCase();
    return allBooks.filter(b => 
      b.title.toLowerCase().includes(q) || 
      b.author.toLowerCase().includes(q) ||
      b.tags.some(t => t.toLowerCase().includes(q))
    );
  }, [query, allBooks]);

  return (
    <div className="search-overlay">
      <header className="search-header">
        <button onClick={onClose} className="icon-btn-gray">
          <ArrowLeft size={24} />
        </button>
        <div className="search-input-box">
          <Search size={18} className="search-icon-sm" />
          <input 
            ref={inputRef}
            type="text" 
            placeholder="Busca autores, títulos o temas" 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </header>
      
      <div className="search-results">
        {query.trim().length === 0 && (
          <div className="search-empty-state">
            <Search size={48} color="#ddd" style={{ marginBottom: '1rem' }} />
            <p>Escribe algo para encontrar lecturas maravillosas</p>
          </div>
        )}

        {query.trim().length > 0 && results.length === 0 && (
          <p className="no-results">No encontramos resultados para "{query}".</p>
        )}
        
        {results.map(book => (
          <div key={book.id} className="search-result-item" onClick={() => { onBookSelect(book); onClose(); }}>
            <div className="search-book-cover" style={{ backgroundColor: book.color }}></div>
            <div className="search-book-info">
              <h4>{book.title}</h4>
              <p>{book.author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
