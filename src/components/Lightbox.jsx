import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, Heart, X } from 'lucide-react';

export default function Lightbox({ images, imageId, isFavorite, onClose, onNavigate, onToggleFavorite }) {
  const [isClosing, setIsClosing] = useState(false);
  const image = images.find((item) => item.id === imageId);

  useEffect(() => {
    if (!image) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowLeft') onNavigate(-1);
      if (event.key === 'ArrowRight') onNavigate(1);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [image, onClose, onNavigate]);

  useEffect(() => {
    if (!isClosing) return undefined;
    const timeout = window.setTimeout(onClose, 180);
    return () => window.clearTimeout(timeout);
  }, [isClosing, onClose]);

  if (!image) return null;

  return (
    <div
      className={`lightbox-backdrop${isClosing ? ' is-closing' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label={`${image.title} image viewer`}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) setIsClosing(true);
      }}
    >
      <button className="lightbox-close icon-button" type="button" onClick={() => setIsClosing(true)} aria-label="Close image viewer">
        <X size={21} />
      </button>
      <button className="lightbox-arrow lightbox-previous icon-button" type="button" onClick={() => onNavigate(-1)} aria-label="Previous image">
        <ArrowLeft size={21} />
      </button>
      <div className="lightbox-content">
        <div className="lightbox-photo-wrap">
          <img className="lightbox-photo" src={image.image} alt={image.title} />
        </div>
        <div className="lightbox-caption">
          <div>
            <span className="lightbox-category">{image.category}</span>
            <h2>{image.title}</h2>
            <p>{image.description}</p>
          </div>
          <button
            className={`lightbox-favorite icon-button${isFavorite ? ' is-favorite' : ''}`}
            type="button"
            aria-label={`${isFavorite ? 'Remove' : 'Add'} ${image.title} ${isFavorite ? 'from' : 'to'} favorites`}
            aria-pressed={isFavorite}
            onClick={() => onToggleFavorite(image.id)}
          >
            <Heart size={19} fill={isFavorite ? 'currentColor' : 'none'} />
          </button>
        </div>
      </div>
      <button className="lightbox-arrow lightbox-next icon-button" type="button" onClick={() => onNavigate(1)} aria-label="Next image">
        <ArrowRight size={21} />
      </button>
      <div className="lightbox-counter" aria-live="polite">
        {images.findIndex((item) => item.id === imageId) + 1} <span>/</span> {images.length}
      </div>
    </div>
  );
}
