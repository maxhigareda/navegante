import { Home, LayoutGrid, Heart, Bookmark } from 'lucide-react';
import './BottomNav.css';

interface BottomNavProps {
  currentTab: string;
  onTabChange: (tab: string) => void;
}

export default function BottomNav({ currentTab, onTabChange }: BottomNavProps) {
  return (
    <nav className="bottom-nav">
      <button className={currentTab === 'home' ? 'active' : ''} onClick={() => onTabChange('home')}>
        <Home size={22} className="nav-icon" />
        <span>Inicio</span>
      </button>
      <button className={currentTab === 'categories' ? 'active' : ''} onClick={() => onTabChange('categories')}>
        <LayoutGrid size={22} className="nav-icon" />
        <span>Categorías</span>
      </button>
      <button className={currentTab === 'favorites' ? 'active' : ''} onClick={() => onTabChange('favorites')}>
        <Heart size={22} className="nav-icon" />
        <span>Favoritos</span>
      </button>
      <button className={currentTab === 'bookmarks' ? 'active' : ''} onClick={() => onTabChange('bookmarks')}>
        <Bookmark size={22} className="nav-icon" />
        <span>Marcadores</span>
      </button>
    </nav>
  );
}
