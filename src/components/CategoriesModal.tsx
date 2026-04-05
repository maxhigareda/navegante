import * as LucideIcons from 'lucide-react';
import { CATEGORIES, type Category } from '../data/books';
import './CategoriesModal.css';

interface CategoriesModalProps {
  onClose: () => void;
  onSelect: (category: Category) => void;
}

export default function CategoriesModal({ onClose, onSelect }: CategoriesModalProps) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Categorías</h2>
          <button className="close-btn" onClick={onClose}><LucideIcons.X size={24} /></button>
        </div>
        
        <div className="categories-grid-modal">
          {CATEGORIES.map(cat => {
            const IconComponent = (LucideIcons as any)[cat.iconName] || LucideIcons.Folder;

            return (
              <div 
                key={cat.id} 
                className="category-item-modal"
                onClick={() => {
                  onSelect(cat);
                  onClose();
                }}
                style={{ borderBottomColor: cat.color }}
              >
                <IconComponent size={24} className="cat-icon" />
                <span>{cat.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
