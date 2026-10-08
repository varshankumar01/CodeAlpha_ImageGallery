import { Search, X } from 'lucide-react';

export default function SearchBar({ value, onChange }) {
  return (
    <label className="search-box">
      <Search size={18} aria-hidden="true" />
      <span className="sr-only">Search images</span>
      <input
        type="search"
        placeholder="Search images..."
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
      {value && (
        <button className="search-clear" type="button" onClick={() => onChange('')} aria-label="Clear search">
          <X size={16} />
        </button>
      )}
    </label>
  );
}
