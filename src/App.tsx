import { useState } from 'react';
import Splash from './screens/Splash';
import Login from './screens/Login';
import Home from './screens/Home';
import CategoryScreen from './screens/CategoryScreen';
import BookScreen from './screens/BookScreen';
import ReaderScreen from './screens/ReaderScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import BottomNav from './components/BottomNav';
import CategoriesModal from './components/CategoriesModal';
import SearchOverlay from './components/SearchOverlay';
import type { Category, Book, Reading } from './data/books';
import { Analytics } from './services/analytics';
import './index.css';

function App() {
  const [view, setView] = useState<'splash' | 'login' | 'home' | 'category' | 'book' | 'reader' | 'favorites'>('splash');
  const [tab, setTab] = useState('home');
  const [showCategoriesModal, setShowCategoriesModal] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);
  const [activeBook, setActiveBook] = useState<Book | null>(null);
  const [activeReading, setActiveReading] = useState<Reading | null>(null);

  const showBottomNav = ['home', 'category', 'book', 'reader', 'favorites'].includes(view);

  // Funciones de navegación
  const handleTabChange = (newTab: string) => {
    if (newTab === 'categories') {
      setShowCategoriesModal(true);
      return; // No cambiamos la tab visualmente, solo mostramos el popup
    }
    
    setTab(newTab);
    if (newTab === 'home') setView('home');
    if (newTab === 'favorites') setView('favorites');
  };

  const handleCategorySelect = (category: Category) => {
    setActiveCategory(category);
    setView('category');
    Analytics.logEvent('category_view', { categoryId: category.id, color: category.color });
  };

  const handleBookSelect = (book: Book) => {
    setActiveBook(book);
    setView('book');
    Analytics.logEvent('book_view', { bookId: book.id, categoryId: book.categoryId });
  };

  const handleReadingSelect = (reading: Reading) => {
    setActiveReading(reading);
    setView('reader');
  };

  const handleBackToHome = () => {
    setActiveCategory(null);
    setView('home');
  };

  const handleBackToCategory = () => {
    setActiveBook(null);
    setView('category');
  };

  const handleBackToBook = () => {
    setActiveReading(null);
    setView('book');
  };

  return (
    <>
      <div className="app-container" style={{ paddingBottom: showBottomNav ? '60px' : '0' }}>
        {view === 'splash' && <Splash onComplete={() => setView('login')} />}
        
        {view === 'login' && <Login onEnter={() => setView('home')} />}
        
        {view === 'home' && (
          <Home 
            onCategorySelect={handleCategorySelect}
            onBookSelect={handleBookSelect}
            onSearchOpen={() => setShowSearch(true)}
          />
        )}

        {view === 'category' && activeCategory && (
          <CategoryScreen 
            category={activeCategory} 
            onBack={handleBackToHome}
            onBookSelect={handleBookSelect}
          />
        )}

        {view === 'favorites' && (
          <FavoritesScreen 
            onBookSelect={handleBookSelect}
            onSearchOpen={() => setShowSearch(true)}
          />
        )}

        {view === 'book' && activeBook && (
          <BookScreen 
            book={activeBook}
            onBack={activeCategory ? handleBackToCategory : handleBackToHome}
            onReadingSelect={handleReadingSelect}
          />
        )}

        {view === 'reader' && activeReading && activeBook && (
          <ReaderScreen 
            reading={activeReading}
            parentBook={activeBook}
            onBack={handleBackToBook}
          />
        )}
      </div>

      {showBottomNav && (
        <BottomNav currentTab={tab} onTabChange={handleTabChange} />
      )}

      {showCategoriesModal && (
        <CategoriesModal 
          onClose={() => setShowCategoriesModal(false)}
          onSelect={(cat) => {
            handleCategorySelect(cat);
            setTab(''); // Opcional: Deseleccionar tabs al entrar forzosamente a categoria
          }}
        />
      )}

      {showSearch && (
        <SearchOverlay 
          onClose={() => setShowSearch(false)}
          onBookSelect={(b) => {
            handleBookSelect(b);
            setTab('');
          }}
        />
      )}
    </>
  );
}

export default App;
