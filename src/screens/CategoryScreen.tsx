import { ArrowLeft, MoreVertical, Heart } from 'lucide-react';
import type { Category, Book } from '../data/books';
import './CategoryScreen.css';

interface CategoryScreenProps {
  category: Category;
  onBack: () => void;
  onBookSelect: (book: Book) => void;
}

export default function CategoryScreen({ category, onBack, onBookSelect }: CategoryScreenProps) {
  return (
    <div className="category-screen">
      <header className="cat-header" style={{ backgroundColor: category.color }}>
        <button className="icon-btn-white" onClick={onBack}>
          <ArrowLeft size={24} />
        </button>
        <h1 className="cat-title">{category.name}</h1>
        <button className="icon-btn-white">
          <MoreVertical size={24} />
        </button>
      </header>
      
      <div className="cat-content">
        {category.books.map(book => (
          <div key={book.id} className="book-list-card" onClick={() => onBookSelect(book)}>
            <div className="book-list-cover" style={{ backgroundColor: book.color }}></div>
            <div className="book-list-info">
              <h3>{book.title}</h3>
              <p className="b-author">{book.author}</p>
              <p className="b-meta">{book.publisher}</p>
              <p className="b-meta">{book.year}</p>
              <div className="b-tags">
                {book.tags.map(t => <span key={t} className="tag" style={{ backgroundColor: book.color }}>{t}</span>)}
              </div>
            </div>
            <button className="btn-heart" onClick={(e) => { e.stopPropagation(); }}><Heart size={20} color="#8b8b8b" /></button>
          </div>
        ))}
      </div>
    </div>
  );
}
