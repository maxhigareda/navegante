import { useState, useEffect } from 'react';
import { ArrowLeft, MoreVertical, Heart, Loader } from 'lucide-react';
import type { Category, Book } from '../data/books';
import { fetchBooksByCategory } from '../lib/gutendex';
import './CategoryScreen.css';

interface CategoryScreenProps {
  category: Category;
  onBack: () => void;
  onBookSelect: (book: Book) => void;
}

export default function CategoryScreen({ category, onBack, onBookSelect }: CategoryScreenProps) {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const loadBooks = async () => {
      setLoading(true);
      const gutendexBooks = await fetchBooksByCategory(category.id);
      
      if (!isMounted) return;

      // Mapeamos los resultados de Gutendex a nuestra estructura Book interface
      const mappedBooks: Book[] = gutendexBooks.map((gBook) => ({
        id: `gutenberg-${gBook.id}`,
        categoryId: category.id,
        title: gBook.title,
        author: gBook.authors[0]?.name || 'Autor Desconocido',
        publisher: 'Proyecto Gutenberg',
        year: gBook.authors[0]?.birth_year ? `${gBook.authors[0].birth_year} - ${gBook.authors[0].death_year || '?'}` : 'Dominio Público',
        tags: gBook.subjects.slice(0, 2),
        color: category.color,
        readings: [] // Se llenará cuando el usuario entre al libro
      }));

      // Fallback si la API no devuelve nada
      if (mappedBooks.length === 0) {
        setBooks(category.books); // Usamos la de mock como fallback
      } else {
        setBooks(mappedBooks);
      }
      
      setLoading(false);
    };

    loadBooks();
    return () => { isMounted = false; };
  }, [category]);

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
        {loading ? (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px', color: '#666' }}>
            <Loader size={32} className="lucide-spin" style={{ animation: 'spin 2s linear infinite', marginBottom: '10px' }} />
            <p>Buscando audiolibros reales...</p>
            <style>{`@keyframes spin { 100% { transform: rotate(360deg); } }`}</style>
          </div>
        ) : (
          books.map((book) => (
            <div key={book.id} className="book-list-card" onClick={() => onBookSelect(book)}>
              <div className="book-list-cover" style={{ backgroundColor: book.color }}></div>
              <div className="book-list-info">
                <h3>{book.title}</h3>
                <p className="b-author">{book.author}</p>
                <p className="b-meta">{book.publisher}</p>
                <p className="b-meta">{book.year}</p>
                <div className="b-tags">
                  {book.tags.map(t => <span key={t} className="tag">{t.substring(0, 20)}</span>)}
                </div>
              </div>
              <button className="btn-heart" onClick={(e) => { e.stopPropagation(); }}><Heart size={20} color="#8b8b8b" /></button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
