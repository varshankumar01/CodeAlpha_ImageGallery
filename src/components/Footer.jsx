import { Sparkles } from 'lucide-react';

export default function Footer({ count }) {
  return (
    <footer className="site-footer">
      <span><Sparkles size={13} /> A little inspiration for your next adventure.</span>
      <span>{count} moments in the collection</span>
    </footer>
  );
}
