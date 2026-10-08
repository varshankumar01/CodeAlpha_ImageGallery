import { useMemo } from 'react';

export default function BackgroundParticles() {
  const particles = useMemo(
    () =>
      Array.from({ length: 88 }, (_, index) => ({
        id: index,
        left: `${(index * 47 + 13) % 100}%`,
        top: `${(index * 71 + 9) % 100}%`,
        delay: `${-((index * 13) % 18)}s`,
        duration: `${12 + ((index * 7) % 15)}s`,
        size: `${index % 9 === 0 ? 3 : 1 + (index % 2)}px`,
        hue: [185, 220, 265, 300][index % 4],
      })),
    [],
  );

  return (
    <div className="ambient" aria-hidden="true">
      <div className="ambient-glow ambient-glow-one" />
      <div className="ambient-glow ambient-glow-two" />
      <div className="ambient-glow ambient-glow-three" />
      <div className="particle-field">
        {particles.map((particle) => (
          <span
            className="particle"
            key={particle.id}
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
              '--particle-hue': particle.hue,
            }}
          />
        ))}
      </div>
    </div>
  );
}
