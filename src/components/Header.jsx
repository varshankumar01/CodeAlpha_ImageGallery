import { Aperture, Sparkles } from 'lucide-react';

export default function Header() {
  return (
    <header className="site-header">
      <div className="brand-mark" aria-hidden="true">
        <Aperture size={23} strokeWidth={1.8} />
      </div>
      <div className="brand-copy">
        <p className="eyebrow"><Sparkles size={12} /> A curated visual journey</p>
        <h1>Visual<span>Verse</span></h1>
        <p className="tagline">Explore moments. Discover colors. Capture stories.</p>
      </div>
    </header>
  );
}
