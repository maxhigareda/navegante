import { ArrowLeft, BookOpen, ExternalLink } from 'lucide-react';
import type { Book, Reading } from '../data/books';
import './CategoryScreen.css';

interface BookScreenProps {
  book: Book;
  onBack: () => void;
  onReadingSelect: (reading: Reading) => void;
}

export default function BookScreen({ book, onBack, onReadingSelect }: BookScreenProps) {
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
                {book.tags.map((t, i) => <span key={i} className="tag">{t}</span>)}
              </div>
           </div>
        </div>

        <div className="readings-list">
          {book.readings.map(reading => (
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
      </div>
    </div>
  );
}
