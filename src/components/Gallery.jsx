import { Images } from 'lucide-react';
import GalleryCard from './GalleryCard.jsx';

export default function Gallery({ images, favorites, onToggleFavorite, onOpen }) {
  if (!images.length) {
    return (
      <div className="empty-state">
        <span className="empty-icon"><Images size={22} /></span>
        <h2>No moments found</h2>
        <p>Try a different search or category to explore the collection.</p>
      </div>
    );
  }

  return (
    <div className="gallery-grid">
      {images.map((image, index) => (
        <div className="card-enter" key={image.id} style={{ '--card-order': index }}>
          <GalleryCard
            image={image}
            isFavorite={favorites.has(image.id)}
            onToggleFavorite={onToggleFavorite}
            onOpen={onOpen}
          />
        </div>
      ))}
    </div>
  );
}
