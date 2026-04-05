import { Menu, Search } from 'lucide-react';
import { CATEGORIES, type Book } from '../data/books';
import './FavoritesScreen.css';

interface FavoritesScreenProps {
  onBookSelect: (book: Book) => void;
  onSearchOpen: () => void;
}

export default function FavoritesScreen({ onBookSelect, onSearchOpen }: FavoritesScreenProps) {
  // Simulando algunos libros favoritos estáticos (por ejemplo, los 2 primeros)
  const favoriteBooks = CATEGORIES.flatMap(c => c.books).slice(0, 2);

  return (
    <div className="favorites-screen">
      <header className="fav-header">
        <div className="search-bar" onClick={onSearchOpen} style={{ cursor: 'pointer' }}>
          <Menu size={20} className="menu-icon" />
          <input type="text" placeholder="Busca autores o libros" disabled style={{ pointerEvents: 'none' }} />
          <Search size={20} className="search-icon" />
        </div>
      </header>

      <main className="fav-content">
        <h1 className="fav-title">Mis favoritos</h1>

        <div className="fav-list">
          {favoriteBooks.length > 0 ? (
            favoriteBooks.map((book, i) => (
              <div key={i} className="fav-book-card" onClick={() => onBookSelect(book)}>
                <div className="fav-cover" style={{ backgroundColor: book.color }}></div>
                <div className="fav-info">
                  <h3>{book.title}</h3>
                  <p className="b-author">{book.author}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="empty-state">No tienes libros favoritos guardados aún.</p>
          )}
        </div>
      </main>
    </div>
  );
}
