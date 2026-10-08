import { Heart } from 'lucide-react';

const categories = ['All', 'Nature', 'City', 'Space', 'Animals', 'Travel'];

export default function CategoryFilters({ activeCategory, onCategoryChange, favoritesOnly, onFavoritesToggle, favoriteCount }) {
  return (
    <div className="filter-row">
      <nav className="category-list" aria-label="Filter gallery by category">
        {categories.map((category) => (
          <button
            className={`filter-button${!favoritesOnly && activeCategory === category ? ' is-active' : ''}`}
            key={category}
            type="button"
            onClick={() => onCategoryChange(category)}
            aria-pressed={!favoritesOnly && activeCategory === category}
          >
            {category}
          </button>
        ))}
      </nav>
      <button
        type="button"
        className={`favorites-filter${favoritesOnly ? ' is-active' : ''}`}
        onClick={onFavoritesToggle}
        aria-pressed={favoritesOnly}
      >
        <Heart size={15} fill={favoritesOnly ? 'currentColor' : 'none'} />
        Favorites
        <span className="favorite-count">{favoriteCount}</span>
      </button>
    </div>
  );
}
