import { useCallback, useMemo, useState } from 'react';
import BackgroundParticles from './components/BackgroundParticles.jsx';
import CategoryFilters from './components/CategoryFilters.jsx';
import Footer from './components/Footer.jsx';
import Gallery from './components/Gallery.jsx';
import Header from './components/Header.jsx';
import Lightbox from './components/Lightbox.jsx';
import SearchBar from './components/SearchBar.jsx';
import { images } from './data/images.js';

export default function App() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [favoritesOnly, setFavoritesOnly] = useState(false);
  const [favorites, setFavorites] = useState(() => new Set());
  const [search, setSearch] = useState('');
  const [lightboxImageId, setLightboxImageId] = useState(null);

  const visibleImages = useMemo(() => {
    const query = search.trim().toLowerCase();
    return images.filter((image) => {
      const matchesCategory = activeCategory === 'All' || image.category === activeCategory;
      const matchesFavorite = !favoritesOnly || favorites.has(image.id);
      const matchesSearch =
        !query ||
        `${image.title} ${image.category} ${image.description}`.toLowerCase().includes(query);
      return matchesCategory && matchesFavorite && matchesSearch;
    });
  }, [activeCategory, favoritesOnly, favorites, search]);

  const toggleFavorite = useCallback((id) => {
    setFavorites((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const closeLightbox = useCallback(() => setLightboxImageId(null), []);

  const navigateLightbox = useCallback(
    (direction) => {
      setLightboxImageId((currentId) => {
        const currentIndex = visibleImages.findIndex((image) => image.id === currentId);
        if (currentIndex < 0 || !visibleImages.length) return currentId;
        const nextIndex = (currentIndex + direction + visibleImages.length) % visibleImages.length;
        return visibleImages[nextIndex].id;
      });
    },
    [visibleImages],
  );

  return (
    <div className="app-shell">
      <BackgroundParticles />
      <main className="page-content">
        <Header />
        <section className="gallery-section" aria-label="Image gallery">
          <div className="section-intro">
            <div>
              <p className="section-kicker">THE COLLECTION <span /></p>
              <h2>Find your next <span>favorite</span>.</h2>
            </div>
            <p className="collection-count">{visibleImages.length} <span>curated moments</span></p>
          </div>
          <div className="gallery-controls">
            <CategoryFilters
              activeCategory={activeCategory}
              onCategoryChange={(category) => {
                setActiveCategory(category);
                setFavoritesOnly(false);
              }}
              favoritesOnly={favoritesOnly}
              onFavoritesToggle={() => setFavoritesOnly((active) => !active)}
              favoriteCount={favorites.size}
            />
            <SearchBar value={search} onChange={setSearch} />
          </div>
          <Gallery
            images={visibleImages}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
            onOpen={setLightboxImageId}
          />
        </section>
        <Footer count={images.length} />
      </main>
      {lightboxImageId !== null && (
        <Lightbox
          images={visibleImages}
          imageId={lightboxImageId}
          isFavorite={favorites.has(lightboxImageId)}
          onClose={closeLightbox}
          onNavigate={navigateLightbox}
          onToggleFavorite={toggleFavorite}
        />
      )}
    </div>
  );
}
