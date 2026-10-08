import { Heart, Maximize2 } from 'lucide-react';

export default function GalleryCard({ image, isFavorite, onToggleFavorite, onOpen }) {
  return (
    <article className="gallery-card">
      <button
        className={`favorite-button${isFavorite ? ' is-favorite' : ''}`}
        type="button"
        aria-label={`${isFavorite ? 'Remove' : 'Add'} ${image.title} ${isFavorite ? 'from' : 'to'} favorites`}
        aria-pressed={isFavorite}
        onClick={(event) => {
          event.stopPropagation();
          onToggleFavorite(image.id);
        }}
      >
        <Heart size={17} fill={isFavorite ? 'currentColor' : 'none'} />
      </button>
      <button className="card-image-button" type="button" onClick={() => onOpen(image.id)} aria-label={`View ${image.title}`}>
        <img src={image.image} alt={image.title} loading="lazy" />
        <span className="card-shade" />
        <span className="card-content">
          <span className="card-category">{image.category}</span>
          <span className="card-title">{image.title}</span>
          <span className="view-image"><Maximize2 size={14} /> View image</span>
        </span>
      </button>
    </article>
  );
}
