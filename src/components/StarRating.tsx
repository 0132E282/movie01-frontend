import Icon from "./Icon";

export default function StarRating({ rating, size = 14 }: { rating: number, size?: number }) {
  const full = Math.floor(rating / 2);
  const pct = (rating / 2 - full) * 100;
  return (
    <div className="flex items-center gap-[3px]">
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i} className="relative" style={{ width: size, height: size }}>
          <Icon name="starFill" size={size} color="rgba(255,255,255,0.15)" />
          {i <= full && (
            <div className="absolute inset-0">
              <Icon name="starFill" size={size} color="var(--gold)" />
            </div>
          )}
          {i === full + 1 && pct > 0 && (
            <div className="absolute inset-0 overflow-hidden" style={{ width: `${pct}%` }}>
              <Icon name="starFill" size={size} color="var(--gold)" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
