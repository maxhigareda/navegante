import { useState } from 'react';
import * as LucideIcons from 'lucide-react';
import { CATEGORIES, type Category, type Book } from '../data/books';
import './Home.css';

interface HomeProps {
  onCategorySelect: (category: Category) => void;
  onBookSelect: (book: Book) => void;
  onSearchOpen: () => void;
}

export default function Home({ onCategorySelect, onBookSelect, onSearchOpen }: HomeProps) {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Seleccionamos un par de libros para Novedades y Favoritos como ejemplo
  const sampleBooks = CATEGORIES.flatMap(c => c.books).slice(0, 2);

  return (
    <div className="home-screen">
      <header className="main-header">
        <LucideIcons.Menu size={24} className="icon-btn" />
        <div className="search-bar" onClick={onSearchOpen} style={{ cursor: 'pointer' }}>
          <input type="text" placeholder="Busca autores o libros" disabled style={{ pointerEvents: 'none' }} />
          <LucideIcons.Search size={18} className="search-icon" />
        </div>
        <div className="profile-circle">N</div>
      </header>

      <section className="home-section">
        <h2 className="section-title">Novedades</h2>
        <div className="horizontal-scroll">
          {sampleBooks.map(book => (
            <div key={`nov-${book.id}`} className="book-thumb" onClick={() => onBookSelect(book)}>
              <div className="book-thumb-cover" style={{ backgroundColor: book.color }}></div>
              <div className="book-thumb-info">
                <h4>{book.title}</h4>
                <p>{book.author}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="home-section">
        <div className="section-header-row">
          <h2 className="section-title">Explora</h2>
          <div className="toggle-view">
            <button className={viewMode === 'list' ? 'active' : ''} onClick={() => setViewMode('list')}>
              <LucideIcons.Menu size={20} />
            </button>
            <button className={viewMode === 'grid' ? 'active' : ''} onClick={() => setViewMode('grid')}>
              <LucideIcons.LayoutGrid size={20} />
            </button>
          </div>
        </div>

        <div className={`categories-${viewMode}`}>
          {CATEGORIES.map(cat => {
            // Obtener el icono dinámico
            const IconComponent = (LucideIcons as any)[cat.iconName] || LucideIcons.Folder;

            return (
              <div 
                key={cat.id} 
                className={`category-item ${viewMode}`}
                onClick={() => onCategorySelect(cat)}
                style={viewMode === 'list' ? { borderRightColor: cat.color } : { borderBottomColor: cat.color }}
              >
                <IconComponent size={24} className="cat-icon" />
                <span>{cat.name}</span>
              </div>
            );
          })}
        </div>
      </section>

      <section className="home-section" style={{ paddingBottom: '80px' }}>
        <h2 className="section-title">Favoritos</h2>
        <div className="horizontal-scroll">
          {sampleBooks.map(book => (
             <div key={`fav-${book.id}`} className="book-thumb" onClick={() => onBookSelect(book)}>
             <div className="book-thumb-cover" style={{ backgroundColor: book.color }}></div>
             <div className="book-thumb-info">
               <h4>{book.title}</h4>
               <p>{book.author}</p>
             </div>
           </div>
          ))}
        </div>
      </section>
    </div>
  );
}
